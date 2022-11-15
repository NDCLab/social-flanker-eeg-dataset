%
% This script was created by George Buzzell for the NDC Lab EEG Training
% Workshop on 02/22. This script uses parts of the "set up" structure from
% the MADE preprocessing pipeline (Debnath, Buzzell, et. al., 2020)

clear % clear matlab workspace
clc % clear matlab command window

%% setup; run this section before any other section below

% MUST EDIT THIS
%running in "EEG_training" folder on your computer
main_dir = '/Users/gbuzzell/Documents/Projects/abmt';

% Setting up other things

%Location of MADE and ADJUSTED-ADJUST scripts
addpath(genpath([main_dir filesep 'scripts' filesep 'MADE-EEG-preprocessing-pipeline']));% enter the path of the folder in this line

%Location of "EEG
addpath(genpath([main_dir filesep 'scripts' filesep 'eeglab13_4_4b']));% enter the path of the EEGLAB folder in this line

%remove path to octave functions inside matlab to prevent errors when
rmpath([main_dir filesep 'scripts' filesep 'eeglab13_4_4b' filesep 'functions' filesep 'octavefunc' filesep 'signal'])

% 1. Enter the path of the folder that has the data to be analyzed
data_location = [main_dir filesep 'derivatives' filesep 'eeg' filesep 'preprocessed' filesep 'processed_data'];

% 2. Enter the path of the folder where you want to save the processed data
output_location = [main_dir filesep 'derivatives' filesep 'eeg' filesep 'preprocessed'];

% 3. Enter the path of the channel location file
channel_locations = [main_dir filesep 'scripts' filesep 'MADE-EEG-preprocessing-pipeline' filesep 'chan_locs_files' filesep 'GSN-HydroCel-129.sfp'];

% enter the stimulus makers that need to be adjusted for time offset
stimulus_markers = {'fixa', 'Ffit', 'Ffin', 'Ffcn', 'Fmit', 'Fmin', 'Fmcn', 'Pfit', 'Pfin', 'Pfcn', 'Pmit', 'Pmin', 'Pmcn'};      % enter the stimulus makers that need to be adjusted for time offset

% Read files to analyses
datafile_names=dir([data_location filesep '*.set']);
datafile_names=datafile_names(~ismember({datafile_names.name},{'.', '..', '.DS_Store'}));
datafile_names={datafile_names.name};
[filepath,name,ext] = fileparts(char(datafile_names{1}));

% Check whether EEGLAB and all necessary plugins are in Matlab path.
if exist('eeglab','file')==0
    error(['Please make sure EEGLAB is on your Matlab path. Please see EEGLAB' ...
        'wiki page for download and instalation instructions']);
end

% Create output folders to save data
if exist([output_location filesep 'processed_data'], 'dir') == 0
    mkdir([output_location filesep 'processed_data'])
end

%load in dataset info regarding ndar vs capp/yale ids, as well as rct-arm
ndar_info = readtable('/Users/gbuzzell/Documents/Projects/abmt/info/eeg_dotprobe_07.14.22_final2_edit.xlsx');
rctArm_info = readtable('/Users/gbuzzell/Documents/Projects/abmt/info/Randomized list combined abbreviated 08.11.2022.xlsx');

%% Count trials

% switch to output directory
cd(output_location);

for subject=1:length(datafile_names)
    
    EEG=[];
    
    fprintf('\n\n\n*** Processing subject %d (%s) ***\n\n\n', subject, datafile_names{subject});
    
    %load in raw data that is alread in eeglab (.set) format)
    EEG = pop_loadset( 'filename', datafile_names{subject}, 'filepath', data_location);
    EEG = eeg_checkset(EEG);
    
%     %extract filename
%     fName_split = strsplit(datafile_names{subject},'_');
%     subIdNum = fName_split{1};
    
    %remove all the non-stim-locking markers (should have done already...)
    EEG = pop_selectevent( EEG, 'latency','-.1 <= .1','deleteevents','on');
	EEG = eeg_checkset( EEG );

    %count how many of each event type (combination of event types) of
    %interest are present   
    
    face = length(find( strcmp({EEG.event.eventType}, 'face')  )); 
    probe = length(find( strcmp({EEG.event.eventType}, 'probe')  )); 

    face_c = length(find(  strcmp({EEG.event.eventType}, 'face')  &  strcmp({EEG.event.congruency}, 'c')  )); 
    face_i = length(find(  strcmp({EEG.event.eventType}, 'face')  &  strcmp({EEG.event.congruency}, 'i')  )); 
    
    probe_c = length(find(  strcmp({EEG.event.eventType}, 'probe')  &  strcmp({EEG.event.congruency}, 'c')  )); 
    probe_i = length(find(  strcmp({EEG.event.eventType}, 'probe')  &  strcmp({EEG.event.congruency}, 'i')  )); 
    
    probe_i_n = length(find(  strcmp({EEG.event.eventType}, 'probe')  &  strcmp({EEG.event.congruency}, 'i')  &  strcmp({EEG.event.probeLoc}, 'n') )); 
    probe_i_t = length(find(  strcmp({EEG.event.eventType}, 'probe')  &  strcmp({EEG.event.congruency}, 'i')  &  strcmp({EEG.event.probeLoc}, 't') )); 

    %Create the trial counts table for trial counts
    counts_table=table({datafile_names{subject}}, {face}, {probe}, {face_c}, {face_i}, {probe_c}, {probe_i}, {probe_i_n}, {probe_i_t});
    
    %create variable names for count trials output and write to disk
    counts_table.Properties.VariableNames = {'fileName', 'face', 'probe', 'face_c', 'face_i', 'probe_c', 'probe_i', 'probe_i_n', 'probe_i_t'};

    %write/append table to disk
    writetable(counts_table, [output_location filesep 'abmt_trial_counts.csv'], "WriteMode", "append");
    
end


%% pull erp mat file

%this list can be created automatically by additional code that searches
%the trial counts file, etc. Here, just hard coding (presumably based on
%manual inspection of trial counts file and other notes/parameters)

    
%initialize participant counter variable (used for indexing into large mat
%file that data is saved into)
pIdx = 0;

%array to store erp data (participants x conditions x channels x samples of avg epoch data)
abmt_erpDat_probeLoc = zeros(length(datafile_names),2,128,750);

% loop through each participant in the study
for i = 1:length(datafile_names)
    
    pIdx = pIdx + 1;

    %load in raw data that is alread in eeglab (.set) format)
    EEG = pop_loadset( 'filename', datafile_names{i}, 'filepath', data_location);
    EEG = eeg_checkset(EEG);
    
    %remove all the non-stim-locking markers (should have done already...)
    EEG = pop_selectevent( EEG, 'latency','-.1 <= .1','deleteevents','on');
	EEG = eeg_checkset( EEG );

    % loop through four conditions (combinations of event types)
    for c = 1:2
        
        if (c==1)
            eventType  = 'face';
            congruency  = 'c';
        elseif (c==2) 
            eventType  = 'face';
            congruency  = 'i';
        end
%         
%         if (c==1)
%             eventType  = 'probe';
%             congruency  = 'i';
%             probeLoc  = 'n';
%         elseif (c==2) 
%             eventType  = 'probe';
%             congruency  = 'i';
%             probeLoc  = 't';
%         end
        

        %select combintion of event types of interest based on vars above
        EEG1 = pop_selectevent( EEG, 'latency','-1<=1','eventType',eventType,'congruency',congruency,'deleteevents','on','deleteepochs','on','invertepochs','off');
        EEG1 = eeg_checkset( EEG1 );
  
%         %select combintion of event types of interest based on vars above
%         EEG1 = pop_selectevent( EEG, 'latency','-1<=1','eventType',eventType,'congruency',congruency,'probeLoc',probeLoc,'deleteevents','on','deleteepochs','on','invertepochs','off');
%         EEG1 = eeg_checkset( EEG1 );
%         
        % Average across epoch dimension
        % this all Channel ERP only needs to be computed once
        % per condition
        meanEpochs = mean(EEG1.data, 3);
        
        %store data for this condition in array
        abmt_erpDat(pIdx,c,:,:)= meanEpochs;
        %abmt_erpDat_probeLoc(pIdx,c,:,:)= meanEpochs;

    %end loop through conditions
    end
 
%end loop through participants
end

%save the erps and subject list
save('abmt_erpDat.mat','abmt_erpDat', 'subject')
%save('abmt_erpDat_probeLoc.mat','abmt_erpDat_probeLoc', 'subject')


%% Plot ERPs!!

%load the mat file that has the erps and subject list
load('abmt_erpDat.mat')
%load('abmt_erpDat_probeLoc.mat')

%make a copy/rename the erp matrix 
allData = abmt_erpDat;
%allData = abmt_erpDat_probeLoc;

%load in one of the participants EEGLAB-formatted data; this is to load
%parameters needed for plotting (sampling rate, chanlocs, etc).
EEG = pop_loadset( 'filename', datafile_names{1}, 'filepath', data_location);
EEG = eeg_checkset(EEG);

%if not whole numbers already, then round EEG.times to nearest whole ms to make easier to work with
EEG.times = round(EEG.times);

%setup for baseline correcting the ERP data (always done before plotting or extracting
%erps, not done to the data previously to allow use of different baselines
%as a function of review comments)
startTime = -200; %(in ms)
endTime = 0 ; %(in ms)

%find closest values in (rounded) EEG.times to the specified start/stop
[temp,startIdx] = min(abs(EEG.times-startTime));
[temp2,endIdx] = min(abs(EEG.times-endTime));

%baseline corrections
range = startIdx:endIdx;
allBase = squeeze(mean(allData(:,:,:,range),4));
allBase = mean(allData(:,:,:,range),4);

for i=1:size(allData,4)
    newData(:,:,:,i) = allData(:,:,:,i) - allBase;
end

%% select channel(s) to plot

%individual electrodes
% chan = (newData(:,:,[75],:)); %Oz
% chan = (newData(:,:,[72],:)); %POz
% chan = (newData(:,:,[65],:)); %PO7
% chan = (newData(:,:,[90],:)); %PO8

%clusters
 chan = (newData(:,:,[72,71,76,75],:)); %central occipital
% chan = (newData(:,:,[65,70,66,59,58],:)); %left-lateral occipital
% chan = (newData(:,:,[90,83,84,91,96],:)); %right-lateral occipital
% chan = (newData(:,:,[65,70,66,59,58,90,83,84,91,96],:)); %bi-lateral occipital
% chan = (newData(:,:,[72,71,76,75,65,70,66,59,58,90,83,84,91,96],:)); %FULL occipital
% chan = (newData(:,:,[12,5,112,106,7,13,6],:)); %mediofrontal

%% 

%average over selectd channels
chan = mean(chan,3);

%pull out four conditions of interest for all subs
face_c = chan(:,1,:,:);
face_i = chan(:,2,:,:);

%average across subs
face_c_Mean = squeeze(mean(face_c,1));
face_i_Mean = squeeze(mean(face_i,1));

%corrMean = lowpass(squeeze(mean(corr,1)),20,1000);
%errorMean = lowpass(squeeze(mean(error,1)),20,1000);

%label for plot and define colors for plot
blue = [0  0 1];
red = [1 0 0];

%plot the two response-related erps
figure;
hold on
%plot(EEG.times, corrMean, 'color', blue, 'LineWidth', 1.5); %'LineStyle', '--');
%plot(EEG.times, errorMean, 'color', red, 'LineWidth', 1.5); %'LineStyle', '--');
plot(EEG.times, face_c_Mean, 'color', blue, 'LineWidth', 1.5);
plot(EEG.times, face_i_Mean, 'color', red, 'LineWidth', 1.5);
title(sprintf('ERP to Face Onset; Electrode POz'), 'FontSize', 30);
legendHandle = legend('NN', 'NT');
set(legendHandle, 'box', 'off', 'FontSize', 26);
hold off;

% set parameters
plotStartTime = -500; %(in ms)
plotEndTime = 1500 ; %(in ms)
set(gcf, 'Color', [1 1 1]);
set(gca, 'YLim', [-4 8]);
set(gca, 'XLim', [plotStartTime plotEndTime]);
set(gca, 'FontSize', 20);
set(get(gca, 'YLabel'), 'String', 'Amplitude in  \muV', 'FontSize', 26);
set(get(gca, 'XLabel'), 'String', 'Time Relative to Face Onset (ms)', 'FontSize', 26);
set(gca, 'Box', 'off');
set(gcf, 'Position', [0 0 1440 900]);



%% Plot topos!!

%load the mat file that has the erps and subject list
load('abmt_erpDat.mat')

%make a copy/rename the erp matrix 
allData = abmt_erpDat;

%load in one of the participants EEGLAB-formatted data; this is to load
%parameters needed for plotting (sampling rate, chanlocs, etc).
EEG = pop_loadset( 'filename', datafile_names{1}, 'filepath', data_location);
EEG = eeg_checkset(EEG);

%round EEG.times to nearest whole ms to make easier to work with
EEG.times = round(EEG.times);

%setup for baseline correcting the ERP data (always done before plotting or extracting
%erps, not done to the data previously to allow use of different baselines
%as a function of review comments)
startTime = -200; %(in ms)
endTime = 0 ; %(in ms)

%find closest values in (rounded) EEG.times to the specified start/stop
[temp,startIdx] = min(abs(EEG.times-startTime));
[temp2,endIdx] = min(abs(EEG.times-endTime));

%baseline corrections
range = startIdx:endIdx;
allBase = squeeze(mean(allData(:,:,:,range),4));
allBase = mean(allData(:,:,:,range),4);

for i=1:size(allData,4)
    newData(:,:,:,i) = allData(:,:,:,i) - allBase;
end

%start and end time range for component of interest
compStartTime = 108; %(in ms)
compEndTime = 176 ; %(in ms)

%find closest values in (rounded) EEG.times to the specified start/stop
[temp,compStartIdx] = min(abs(EEG.times-compStartTime));
[temp2,compEndIdx] = min(abs(EEG.times-compEndTime));

%idxs of time range to plot topo for
compRange = compStartIdx:compEndIdx;

%pull out conditions of interest for all subs, and average over time
%range of interest
condition_A = mean(newData(:,1,:,compRange),4); %NN (c)
condition_B = mean(newData(:,2,:,compRange),4); %NT (i)

%average across subs
condition_A_Mean = squeeze(mean(condition_A,1)); %NN (c)
condition_B_Mean = squeeze(mean(condition_B,1)); %NT (i)

%compute difference topo
con_B_minus_A_Mean = condition_B_Mean - condition_A_Mean; %NT-NN (i-c)

%plot topos
figure
topoplot(condition_A_Mean, EEG.chanlocs, 'maplimits', [-6 6], 'electrodes', 'on', 'gridscale', 300)
set(get(gca, 'title'), 'String', 'NN; Mean Amplitude (108-176 ms)', 'FontSize', 16);

figure
topoplot(condition_B_Mean, EEG.chanlocs, 'maplimits', [-6 6], 'electrodes', 'on', 'gridscale', 300)
set(get(gca, 'title'), 'String', 'NT; Mean Amplitude (108-176 ms)', 'FontSize', 16);

figure
topoplot(con_B_minus_A_Mean, EEG.chanlocs, 'maplimits', [-2 2], 'electrodes', 'on', 'gridscale', 300, 'plotrad', .6)
set(get(gca, 'title'), 'String', 'NT Minus NN; Mean Amplitude (108-176 ms)', 'FontSize', 16);




%% Extract mean component amplitudes (for statistics)

%clear output
output = [];

%create variable names for count trials output and write to disk
outputHeader = {'id, ERN, CRN, deltaERN'};
dlmwrite(strcat('erpCore_compMeans_example_', date, '.csv'), outputHeader, 'delimiter', '', '-append');

%define electrodes average over for component
compCluster = [17 21 22]; 

%define timeRange to average over for component 
compTime = [0 100]; 

%load the mat file that has the erps and subject list
load('erpCore_erps_example.mat')

%make a copy/rename the erp matrix 
allData = erpCore_erpDat_example;

%load in one of the participants EEGLAB-formatted data; this is to load
%parameters needed for plotting (sampling rate, chanlocs, etc).
EEG = pop_loadset( 'filename', datafile_names{1}, 'filepath', data_location);
EEG = eeg_checkset(EEG);

%round EEG.times to nearest whole ms to make easier to work with
EEG.times = round(EEG.times);

%setup for baseline correcting the ERP data (always done before plotting or extracting
%erps, not done to the data previously to allow use of different baselines
%as a function of review comments)
startTime = -400; %(in ms)
endTime = -200 ; %(in ms)

%find closest values in (rounded) EEG.times to the specified start/stop
[temp,startIdx] = min(abs(EEG.times-startTime));
[temp2,endIdx] = min(abs(EEG.times-endTime));

%baseline corrections
range = startIdx:endIdx;
allBase = squeeze(mean(allData(:,:,:,range),4));
allBase = mean(allData(:,:,:,range),4);

for i=1:size(allData,4)
    newData(:,:,:,i) = allData(:,:,:,i) - allBase;
end

%start and end time range for component of interest
compStartTime = compTime(1); %(in ms)
compEndTime = compTime(2) ; %(in ms)

%find closest values in (rounded) EEG.times to the specified start/stop
[temp,compStartIdx] = min(abs(EEG.times-compStartTime));
[temp2,compEndIdx] = min(abs(EEG.times-compEndTime));

%idxs of time range to plot topo for
compRange = compStartIdx:compEndIdx;

%pull out conditions of interest for all subs, and average over time
%range of interest
resp_incon_error_avgTime = mean(newData(:,1,:,compRange),4);
resp_incon_corr_avgTime = mean(newData(:,2,:,compRange),4);

%average cluster of interest
resp_incon_error_avgTimeClust = mean(resp_incon_error_avgTime(:,:,compCluster),3);
resp_incon_corr_avgTimeClust = mean(resp_incon_corr_avgTime(:,:,compCluster),3);

%compute difference scores
resp_incon_error_avgTimeClust_diff = resp_incon_error_avgTimeClust - resp_incon_corr_avgTimeClust;

%write sub numbers to ouput
output(:,1) = subjects';

%write component means to output
output(:,2) = resp_incon_error_avgTimeClust;
output(:,3) = resp_incon_corr_avgTimeClust;
output(:,4) = resp_incon_error_avgTimeClust_diff;
        
%write component means to disk
dlmwrite(strcat('erpCore_compMeans_example_', date, '.csv'), output, 'delimiter', ',', '-append');
