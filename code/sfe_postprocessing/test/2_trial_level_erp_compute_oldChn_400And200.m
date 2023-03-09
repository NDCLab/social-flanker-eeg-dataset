%% to Run on FIU HPC%
% create a local cluster object
cluster = parcluster('local');

% start matlabpool with max workers set in the slurm file
parpool(cluster, str2num(getenv('SLURM_CPUS_ON_NODE')))

% running in "EEG_training" folder on your computer
main_dir = '/home/data/NDClab/datasets/social-flanker-eeg-dataset'; %directory on the HPC

% Location of EEGlab
addpath(genpath([main_dir filesep 'code' filesep 'eeglab13_4_4b']));% enter the path of the EEGLAB folder in this line

% remove path to octave functions inside matlab to prevent errors when
rmpath([main_dir filesep 'code' filesep 'eeglab13_4_4b' filesep 'functions' filesep 'octavefunc' filesep 'signal'])

% 1. Enter the path of the folder that has the raw data to be analyzed
rawdata_location = [main_dir filesep 'sourcedata' filesep 'raw' filesep 'eeg'];

% 2. Enter the path of the folder where you want to save the processed data
output_location = [main_dir filesep 'derivatives' filesep 'eeg' filesep 'preprocessed' ];

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Locate raw data on hpc
data_location = ['/home/data/NDClab/datasets/social-flanker-eeg-dataset/derivatives/eeg/preprocessed/processed_data'];
% data_location = '/Users/yanbinniu/Projects/social_flanker_eeg/script/sample/data/processed'

% note:accuracy and rt always corresponds to first response
% 'observation' = ns, s
% 'eventType' - stim, resp
% 'targetDir' - l, r
% 'congruency' - c, i
% 'responded' - 1, 0 as str
% 'accuracy' - 1, 0 as str copied from trsp
% 'rt' - 
% 'validRt' - 
% 'extraResponse' - 1, 0 as str
% 'validTrial' - 1 if single, validRt response, else 0

% 'prevTargetDir' - l, r
% 'prevCongruency' - c, i
% 'prevResponded' - 1, 0 as str
% 'prevAccuracy' - 1, 0 as str copied from trsp
% 'prevRt' - 
% 'prevValidRt' - 
% 'prevExtraResponse' - 1, 0 as str
% 'prevValidTrial' - 1 if single, validRt response, else 0

% 'nextTargetDir' - l, r
% 'nextCongruency' - c, i
% 'nextResponded' - 1, 0 as str
% 'nextAccuracy' - 1, 0 as str copied from trsp
% 'nextRt' - 
% 'nextValidRt' - 
% 'nextExtraResponse' - 1, 0 as str
% 'nextValidTrial' - 1 if single, validRt response, else 0

% subject list
datafile_names = dir([data_location filesep '*.set']);
datafile_names = datafile_names(~ismember({datafile_names.name},{'.', '..', '.DS_Store'}));
sub_file_name_list = {datafile_names.name};

% create lists for subject, trial_num, condition, congruency, accuracy, rt,
% pre and post etc.
subj_list = [];
erp_baseline_list = [];
erp_ern = [];
erp_pe400_list = [];
erp_pe500_list = [];
observation_list = [];
congruency_list = [];
acc_list = [];
rt_list = [];
validRt_list = [];
validTrial_list = [];
marker_list = [];
targetDir_list = [];
prevCongruency_list = [];
prevAccuracy_list = [];
prevRt_list = [];
prevValidRt_list = [];
prevValidTrial_list = [];
nextCongruency_list = [];
nextAccuracy_list = [];
nextRt_list = [];
nextValidRt_list = [];
nextValidTrial_list = [];

% channels of interest
% OPTION 1
chn_cluster_ern = [1, 2, 5, 34, 37]
% % OPTION 2
% chn_cluster_ern = [33, 1, 3, 17, 35]
chn_cluster_pe = [17, 18, 19, 49, 50] 

for s = 1:length(sub_file_name_list)
    
    % Find subject name
    cur_subj_file = sub_file_name_list{s};
    
    % skip all bad data
    if contains(cur_subj_file, 'bad')
        continue
    end
    
    % Load the component removed dataset
    EEG = pop_loadset('filename', cur_subj_file, 'filepath', data_location);
    EEG = eeg_checkset(EEG);
    
    % remove all the non-stim-locking markers
    EEG = pop_selectevent( EEG, 'latency','-.1 <= .1','deleteevents','on');
	EEG = eeg_checkset( EEG );
    
    % find all resp trials
    cur_resp_all = find((strcmp({EEG.event.eventType},'resp')));
    cur_keepTrials = [cur_resp_all];
    
    % remove trials that we dont want
    EEG = pop_selectevent(EEG,'event',cur_keepTrials,'deleteevents','on','deleteepochs','on','invertepochs','off');
    EEG = eeg_checkset(EEG);
    
    % delete markers not used as event locking (duplicates of resp or stim )
    EEG = pop_selectevent(EEG, 'latency','-.1 <= .1','deleteevents','on');
    EEG = eeg_checkset(EEG);
    
    cur_resp_all = EEG.data;
    [ch_n, time_p, trial_num] = size(cur_resp_all);
    
    % baseline correction
    startTime = -400; %(in ms)
    endTime = -200; %(in ms)
    [temp, startIdx] = min(abs(EEG.times-startTime));
    [temp2, endIdx] = min(abs(EEG.times-endTime));
    erp_baseline = squeeze(mean(cur_resp_all(:, startIdx:endIdx, :),2));
    
    cur_resp_all_corrected = zeros(ch_n, time_p, trial_num);
    for k=1:time_p
        cur_resp_all_corrected(:,k,:) = squeeze(cur_resp_all(:,k,:)) - erp_baseline;
    end
    
    % ern, 1001~1101
    cur_ern_ched = squeeze(mean(cur_resp_all_corrected(chn_cluster_ern,:,:),1));
    cur_ern_avg = squeeze(mean(cur_ern_ched(1001:1101, :),1));
    
    % pe400, 1201~1401
    cur_pe_ched = squeeze(mean(cur_resp_all_corrected(chn_cluster_pe,:,:),1));
    cur_pe_avg400 = squeeze(mean(cur_pe_ched(1201:1401, :),1));
    
    % pe500, 1201~1501
    cur_pe_avg500 = squeeze(mean(cur_pe_ched(1201:1501, :),1));
    
    % other variables
    subj_current = str2num(cur_subj_file(1:6));
    subj_list = [subj_list repelem(subj_current, size(cur_ern_avg,2))];
    erp_ern = [erp_ern cur_ern_avg];
    erp_pe400_list = [erp_pe400_list cur_pe_avg400];
    erp_pe500_list = [erp_pe500_list cur_pe_avg500];
    observation_list = [observation_list {EEG.event.observation}];
    congruency_list = [congruency_list {EEG.event.congruency}];
    acc_list = [acc_list {EEG.event.accuracy}];
    rt_list = [rt_list {EEG.event.rt}];
    validRt_list = [validRt_list {EEG.event.validRt}];
    validTrial_list = [validTrial_list {EEG.event.validTrial}];
    marker_list = [marker_list {EEG.event.type}];
    targetDir_list = [targetDir_list {EEG.event.targetDir}];
    prevCongruency_list = [prevCongruency_list {EEG.event.prevCongruency}];
    prevAccuracy_list = [prevAccuracy_list {EEG.event.prevAccuracy}];
    prevRt_list = [prevRt_list {EEG.event.prevRt}];
    prevValidRt_list = [prevValidRt_list {EEG.event.prevValidRt}];
    prevValidTrial_list = [prevValidTrial_list {EEG.event.prevValidTrial}];
    nextCongruency_list = [nextCongruency_list {EEG.event.nextCongruency}];
    nextAccuracy_list = [nextAccuracy_list {EEG.event.nextAccuracy}];
    nextRt_list = [nextRt_list {EEG.event.nextRt}];
    nextValidRt_list = [nextValidRt_list {EEG.event.nextValidRt}];
    nextValidTrial_list = [nextValidTrial_list {EEG.event.nextValidTrial}];
    
end

% save data
various = {'subject', 'erp_ern', 'erp_pe400', 'erp_pe500', ...
    'observation', 'congruency', 'accuracy', 'rt', 'validRt', 'validTrial', ...
    'marker', 'targetDir', 'prevCongruency', 'prevAccuracy', 'prevRt', ...
    'prevValidRt', 'prevValidTrial', 'nextCongruency', 'nextAccuracy', 'nextRt', ...
    'nextValidRt', 'nextValidTrial'};
result_table = table(subj_list',erp_ern',erp_pe400_list',erp_pe500_list',observation_list', ...
    congruency_list', acc_list', rt_list', validRt_list', validTrial_list', ...
    marker_list', targetDir_list', prevCongruency_list', prevAccuracy_list', ...
    prevRt_list', prevValidRt_list', prevValidTrial_list', nextCongruency_list', ...
    nextAccuracy_list', nextRt_list', nextValidRt_list', nextValidTrial_list', 'VariableNames',various);
writetable(result_table, 'trial_erp_all_oldChn_400And200.csv');


% %% Add labels to the event structure 
% EEG = pop_editeventfield( EEG, 'indices',  strcat('1:', int2str(length(EEG.event))), ...
%     'observation','NaN',  'eventType','NaN', 'targetDir','NaN', 'congruency','NaN', 'responded','NaN', 'accuracy','NaN', ...
%     'rt','NaN', 'validRt','NaN', 'extraResponse','NaN', 'validTrial','NaN', ...
%     'prevTargetDir','NaN', 'prevCongruency','NaN', 'prevResponded','NaN', ...
%     'prevAccuracy','NaN', 'prevRt','NaN', 'prevValidRt','NaN', ...
%     'prevExtraResponse','NaN', 'prevValidTrial','NaN', ...
%     'nextTargetDir','NaN', 'nextCongruency','NaN', 'nextResponded','NaN', 'nextAccuracy','NaN', ...
%     'nextRt','NaN', 'nextValidRt','NaN', 'nextExtraResponse','NaN', ...
%     'nextValidTrial','NaN');
% EEG = eeg_checkset( EEG );
% 
% %note:accuracy and rt always corresponds to first response
% % 'observation' = ns, s
% % 'eventType' - stim, resp
% % 'targetDir' - l, r
% % 'congruency' - c, i
% % 'responded' - 1, 0 as str
% % 'accuracy' - 1, 0 as str copied from trsp
% % 'rt' - 
% % 'validRt' - 
% % 'extraResponse' - 1, 0 as str
% % 'validTrial' - 1 if single, validRt response, else 0
% 
% % 'prevTargetDir' - l, r
% % 'prevCongruency' - c, i
% % 'prevResponded' - 1, 0 as str
% % 'prevAccuracy' - 1, 0 as str copied from trsp
% % 'prevRt' - 
% % 'prevValidRt' - 
% % 'prevExtraResponse' - 1, 0 as str
% % 'prevValidTrial' - 1 if single, validRt response, else 0
% 
% % 'nextTargetDir' - l, r
% % 'nextCongruency' - c, i
% % 'nextResponded' - 1, 0 as str
% % 'nextAccuracy' - 1, 0 as str copied from trsp
% % 'nextRt' - 
% % 'nextValidRt' - 
% % 'nextExtraResponse' - 1, 0 as str
% % 'nextValidTrial' - 1 if single, validRt response, else 0
    