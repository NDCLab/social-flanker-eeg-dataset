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

% 3. Enter the path of the channel location file
channel_locations = [main_dir filesep 'code' filesep 'MADE-EEG-preprocessing-pipeline' filesep 'chan_locs_files' filesep 'GSN-HydroCel-129.sfp'];


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
sub_file_name_list = [];
for k = 1:length(datafile_names)
    cur_name = datafile_names(k).name;
    if ~contains(cur_name, 'bad')
        sub_file_name_list = [sub_file_name_list {cur_name}];
    end
end

% create lists for subject, trial_num, condition, congruency, accuracy, rt,
Incongruent_Err_s = zeros(length(sub_file_name_list), 64, 3000);
Incongruent_Corr_s = zeros(length(sub_file_name_list), 64, 3000);
Incongruent_Err_ns = zeros(length(sub_file_name_list), 64, 3000);
Incongruent_Corr_ns = zeros(length(sub_file_name_list), 64, 3000);
subj_list = [];

for s = 1:length(sub_file_name_list)
    
    % Open EEGLAB Toolbox  
    %[ALLEEG EEG CURRENTSET ALLCOM] = eeglab;
    
    % Find subject name
    cur_subj_file = sub_file_name_list{s};
    
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
%     [ch_n, time_p, trial_num] = size(cur_resp_all);
    
    % other variables
    idx_ns_i_c = find((strcmp({EEG.event.observation},'ns')) & (strcmp({EEG.event.congruency},'i')) ...
        & ([EEG.event.accuracy] == 1) & ([EEG.event.validTrial] == 1));
    idx_ns_i_e = find((strcmp({EEG.event.observation},'ns')) & (strcmp({EEG.event.congruency},'i')) ...
        & ([EEG.event.accuracy] == 0) & ([EEG.event.validTrial] == 1));
    idx_s_i_c = find((strcmp({EEG.event.observation},'s')) & (strcmp({EEG.event.congruency},'i')) ...
        & ([EEG.event.accuracy] == 1) & ([EEG.event.validTrial] == 1));
    idx_s_i_e = find((strcmp({EEG.event.observation},'s')) & (strcmp({EEG.event.congruency},'i')) ...
        & ([EEG.event.accuracy] == 0) & ([EEG.event.validTrial] == 1));
    
    cur_erp_ns_i_c = cur_resp_all(:, :, idx_ns_i_c);
    cur_erp_ns_i_e = cur_resp_all(:, :, idx_ns_i_e);
    cur_erp_s_i_c = cur_resp_all(:, :, idx_s_i_c);
    cur_erp_s_i_e = cur_resp_all(:, :, idx_s_i_e);
    
    cur_erp_ns_i_c_avg = squeeze(mean(cur_erp_ns_i_c(:,:,:),3));
    cur_erp_ns_i_e_avg = squeeze(mean(cur_erp_ns_i_e(:,:,:),3));
    cur_erp_s_i_c_avg = squeeze(mean(cur_erp_s_i_c(:,:,:),3));
    cur_erp_s_i_e_avg = squeeze(mean(cur_erp_s_i_e(:,:,:),3));
    
    % assign values
    Incongruent_Corr_ns(s,:,:) = cur_erp_ns_i_c_avg;
    Incongruent_Err_ns(s,:,:) = cur_erp_ns_i_e_avg;
    Incongruent_Corr_s(s,:,:) = cur_erp_s_i_c_avg;
    Incongruent_Err_s(s,:,:) = cur_erp_s_i_e_avg;
    
    subj_current = str2num(cur_subj_file(1:6));
    subj_list = [subj_list subj_current];
    
end

% save
topo_ern.Incongruent_Corr_ns = Incongruent_Corr_ns;
topo_ern.Incongruent_Err_ns = Incongruent_Err_ns;
topo_ern.Incongruent_Corr_s = Incongruent_Corr_s;
topo_ern.Incongruent_Err_s = Incongruent_Err_s;
topo_ern.subj = subj_list;
save(['topo_ern.mat'], 'topo_ern');


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
    