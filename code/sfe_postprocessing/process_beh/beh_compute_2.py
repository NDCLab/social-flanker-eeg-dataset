import ast
import glob
import numpy as np
import pandas as pd

'''
The way George suggested to deal with double responses: I use the first response as the one to compute behavior
 (and dont throw out the trial).
'''

# beh data path
# beh_data_path = '/Users/yanbinniu/Projects/social_flanker_eeg/script/process_beh'
beh_data_path = '/home/data/NDClab/datasets/social-flanker-eeg-dataset/sourcedata/raw/sfe_psychopy/flanker_basic_v5/psychopy'

# exclude list
exclude_list = ['160003', '160004', '160009', '160010', '160011', '160014', '160024', '160035', '160041',
                '160054', '160055', '160061', '160062', '160065']

# glob a list of file
file_list = glob.glob(f'{beh_data_path}/*.csv')

# exclude subjects
include_idx = [i.split('/')[-1][:6] not in exclude_list for i in file_list]
compute_list = [file_list[i] for i, x in enumerate(include_idx) if x]

# compute rt
def rt_compute(x):
    if pd.isna(x):
        return np.nan
    else:
        res = ast.literal_eval(x)
        return float(res[0])

# social and nonsocial stim_list
nonsocial_stim_list = ['41', '42', '43', '44']
social_stim_list = ['51', '52', '53', '54']
valid_resp_list = ["['8']", "['1']", "None"]
final_tabulated_df = pd.DataFrame(columns=['subject', 'total_nonsocial', 'non_resp_nonsocial', 'resp_twice_nonsocial',
                                           'acc_all_nonsocial', 'acc_congruent_nonsocial', 'acc_incongruent_nonsocial',
                                           'rt_all_nonsocial', 'rt_congruent_nonsocial', 'rt_incongruent_nonsocial',
                                           'rt_correct_nonsocial', 'rt_error_nonsocial',
                                           'rt_congruent_correct_nonsocial', 'rt_congruent_error_nonsocial',
                                           'rt_incongruent_correct_nonsocial', 'rt_incongruent_error_nonsocial',
                                           'total_social', 'non_resp_social', 'resp_twice_social', 'acc_all_social',
                                           'acc_congruent_social', 'acc_incongruent_social', 'rt_all_social',
                                           'rt_congruent_social', 'rt_incongruent_social', 'rt_correct_social',
                                           'rt_error_social', 'rt_congruent_correct_social',
                                           'rt_congruent_error_social', 'rt_incongruent_correct_social',
                                           'rt_incongruent_error_social'])
for idx, file in enumerate(compute_list):
    # read in beta csv
    print(file)
    beh_current_df = pd.read_csv(file, index_col=False)
    beh_current_df_isNotNa = beh_current_df[beh_current_df['stimNum'].notna()]
    beh_current_df_isNotNa['stimNum'] = beh_current_df_isNotNa['stimNum'].astype(int).astype(str)
    beh_current_nonsocial = beh_current_df_isNotNa[beh_current_df_isNotNa['stimNum'].isin(nonsocial_stim_list)]
    beh_current_social = beh_current_df_isNotNa[beh_current_df_isNotNa['stimNum'].isin(social_stim_list)]

    beh_current_nonsocial_valid = beh_current_nonsocial[beh_current_nonsocial['task_stim_keyResp.keys'].isin(valid_resp_list)]
    beh_current_social_valid = beh_current_social[beh_current_social['task_stim_keyResp.keys'].isin(valid_resp_list)]
    # total valid numbers
    num_total_nonsocial = len(beh_current_nonsocial_valid)
    num_total_social = len(beh_current_social_valid)
    # twice responses counts
    num_2resp_nonsocial = len(beh_current_nonsocial) - len(beh_current_nonsocial_valid)
    num_2resp_social = len(beh_current_social) - len(beh_current_social_valid)
    # non responses counts
    num_nonresp_nonsocial = sum(beh_current_nonsocial_valid['task_stim_keyResp.keys'].isin(["None"]))
    num_nonresp_social = sum(beh_current_social_valid['task_stim_keyResp.keys'].isin(["None"]))

    # do not remove double responses
    beh_current_nonsocial_valid = beh_current_nonsocial
    beh_current_social_valid = beh_current_social
    # modify the accuracy to 0 for None response
    beh_current_nonsocial_valid.loc[beh_current_nonsocial_valid['task_stim_keyResp.keys'].isin(["None"]), 'accuracy'] = 0
    beh_current_social_valid.loc[beh_current_social_valid['task_stim_keyResp.keys'].isin(["None"]), 'accuracy'] = 0
    # convert rt
    beh_current_nonsocial_valid['rt_new'] = beh_current_nonsocial_valid['task_stim_keyResp.rt'].apply(rt_compute)
    beh_current_social_valid['rt_new'] = beh_current_social_valid['task_stim_keyResp.rt'].apply(rt_compute)
    # 0: incongruent; 1: congruent; 1: correct, 0: error
    # nonsocial
    incong_corr_nonsocial_current = beh_current_nonsocial_valid[(beh_current_nonsocial_valid['congruent'] == 0)
                                                                & (beh_current_nonsocial_valid['accuracy'] == 1.0)]
    incong_err_nonsocial_current = beh_current_nonsocial_valid[(beh_current_nonsocial_valid['congruent'] == 0)
                                                                & (beh_current_nonsocial_valid['accuracy'] == 0.0)]
    cong_corr_nonsocial_current = beh_current_nonsocial_valid[(beh_current_nonsocial_valid['congruent'] == 1)
                                                              & (beh_current_nonsocial_valid['accuracy'] == 1.0)]
    cong_err_nonsocial_current = beh_current_nonsocial_valid[(beh_current_nonsocial_valid['congruent'] == 1)
                                                             & (beh_current_nonsocial_valid['accuracy'] == 0.0)]
    # social
    incong_corr_social_current = beh_current_social_valid[(beh_current_social_valid['congruent'] == 0)
                                                          & (beh_current_social_valid['accuracy'] == 1.0)]
    incong_err_social_current = beh_current_social_valid[(beh_current_social_valid['congruent'] == 0)
                                                         & (beh_current_social_valid['accuracy'] == 0.0)]
    cong_corr_social_current = beh_current_social_valid[(beh_current_social_valid['congruent'] == 1)
                                                        & (beh_current_social_valid['accuracy'] == 1.0)]
    cong_err_social_current = beh_current_social_valid[(beh_current_social_valid['congruent'] == 1)
                                                       & (beh_current_social_valid['accuracy'] == 0.0)]

    # acc computation -- nonsocial
    num_incong_corr_nonsocial_current = len(incong_corr_nonsocial_current)
    num_incong_err_nonsocial_current = len(incong_err_nonsocial_current)
    num_cong_corr_nonsocial_current = len(cong_corr_nonsocial_current)
    num_cong_err_nonsocial_current = len(cong_err_nonsocial_current)
    acc_all_nonsocial_current = (num_incong_corr_nonsocial_current
                                 + num_cong_corr_nonsocial_current) / (num_incong_corr_nonsocial_current
                                                                       + num_incong_err_nonsocial_current
                                                                       + num_cong_corr_nonsocial_current
                                                                       + num_cong_err_nonsocial_current)
    acc_incong_nonsocial_current = num_incong_corr_nonsocial_current / (num_incong_corr_nonsocial_current
                                                                        + num_incong_err_nonsocial_current)
    acc_cong_nonsocial_current = num_cong_corr_nonsocial_current / (num_cong_corr_nonsocial_current
                                                                    + num_cong_err_nonsocial_current)

    # acc computation -- social
    num_incong_corr_social_current = len(incong_corr_social_current)
    num_incong_err_social_current = len(incong_err_social_current)
    num_cong_corr_social_current = len(cong_corr_social_current)
    num_cong_err_social_current = len(cong_err_social_current)
    acc_all_social_current = (num_incong_corr_social_current
                              + num_cong_corr_social_current) / (num_incong_corr_social_current
                                                                 + num_incong_err_social_current
                                                                 + num_cong_corr_social_current
                                                                 + num_cong_err_social_current)
    acc_incong_social_current = num_incong_corr_social_current / (num_incong_corr_social_current
                                                                  + num_incong_err_social_current)
    acc_cong_social_current = num_cong_corr_social_current / (num_cong_corr_social_current
                                                              + num_cong_err_social_current)

    # rt computation -- nonsocial
    rt_all_nonsocial_current = beh_current_nonsocial_valid['rt_new'].mean(skipna=True)
    rt_incong_corr_nonsocial_current = incong_corr_nonsocial_current['rt_new'].mean(skipna=True)
    rt_incong_err_nonsocial_current = incong_err_nonsocial_current['rt_new'].mean(skipna=True)
    rt_cong_corr_nonsocial_current = cong_corr_nonsocial_current['rt_new'].mean(skipna=True)
    rt_cong_err_nonsocial_current = cong_err_nonsocial_current['rt_new'].mean(skipna=True)

    incong_nonsocial_current = incong_corr_nonsocial_current.append(incong_err_nonsocial_current)
    rt_incong_nonsocial_current = incong_nonsocial_current['rt_new'].mean(skipna=True)
    cong_nonsocial_current = cong_corr_nonsocial_current.append(cong_err_nonsocial_current)
    rt_cong_nonsocial_current = cong_nonsocial_current['rt_new'].mean(skipna=True)

    corr_nonsocial_current = incong_corr_nonsocial_current.append(cong_corr_nonsocial_current)
    rt_corr_nonsocial_current = corr_nonsocial_current['rt_new'].mean(skipna=True)
    err_nonsocial_current = incong_err_nonsocial_current.append(cong_err_nonsocial_current)
    rt_err_nonsocial_current = err_nonsocial_current['rt_new'].mean(skipna=True)

    # rt computation -- social
    rt_all_social_current = beh_current_social_valid['rt_new'].mean(skipna=True)
    rt_incong_corr_social_current = incong_corr_social_current['rt_new'].mean(skipna=True)
    rt_incong_err_social_current = incong_err_social_current['rt_new'].mean(skipna=True)
    rt_cong_corr_social_current = cong_corr_social_current['rt_new'].mean(skipna=True)
    rt_cong_err_social_current = cong_err_social_current['rt_new'].mean(skipna=True)

    incong_social_current = incong_corr_social_current.append(incong_err_social_current)
    rt_incong_social_current = incong_social_current['rt_new'].mean(skipna=True)
    cong_social_current = cong_corr_social_current.append(cong_err_social_current)
    rt_cong_social_current = cong_social_current['rt_new'].mean(skipna=True)

    corr_social_current = incong_corr_social_current.append(cong_corr_social_current)
    rt_corr_social_current = corr_social_current['rt_new'].mean(skipna=True)
    err_social_current = incong_err_social_current.append(cong_err_social_current)
    rt_err_social_current = err_social_current['rt_new'].mean(skipna=True)

    final_tabulated_df = final_tabulated_df.append({'subject': file.split('/')[-1][:6],
                                                    'total_nonsocial': num_total_nonsocial,
                                                    'non_resp_nonsocial': num_nonresp_nonsocial,
                                                    'resp_twice_nonsocial': num_2resp_nonsocial,
                                                    'acc_all_nonsocial': acc_all_nonsocial_current,
                                                    'acc_congruent_nonsocial': acc_cong_nonsocial_current,
                                                    'acc_incongruent_nonsocial': acc_incong_nonsocial_current,
                                                    'rt_all_nonsocial': rt_all_nonsocial_current,
                                                    'rt_congruent_nonsocial': rt_cong_nonsocial_current,
                                                    'rt_incongruent_nonsocial': rt_incong_nonsocial_current,
                                                    'rt_correct_nonsocial': rt_corr_nonsocial_current,
                                                    'rt_error_nonsocial': rt_err_nonsocial_current,
                                                    'rt_congruent_correct_nonsocial': rt_cong_corr_nonsocial_current,
                                                    'rt_congruent_error_nonsocial': rt_cong_err_nonsocial_current,
                                                    'rt_incongruent_correct_nonsocial': rt_incong_corr_nonsocial_current,
                                                    'rt_incongruent_error_nonsocial': rt_incong_err_nonsocial_current,
                                                    'total_social': num_total_social,
                                                    'non_resp_social': num_nonresp_social,
                                                    'resp_twice_social': num_2resp_social,
                                                    'acc_all_social': acc_all_social_current,
                                                    'acc_congruent_social': acc_cong_social_current,
                                                    'acc_incongruent_social': acc_incong_social_current,
                                                    'rt_all_social': rt_all_social_current,
                                                    'rt_congruent_social': rt_cong_social_current,
                                                    'rt_incongruent_social': rt_incong_social_current,
                                                    'rt_correct_social': rt_corr_social_current,
                                                    'rt_error_social': rt_err_social_current,
                                                    'rt_congruent_correct_social': rt_cong_corr_social_current,
                                                    'rt_congruent_error_social': rt_cong_err_social_current,
                                                    'rt_incongruent_correct_social': rt_incong_corr_social_current,
                                                    'rt_incongruent_error_social': rt_incong_err_social_current},
                                                   ignore_index=True)

# final_tabulated_df.to_csv('/Users/yanbinniu/Projects/social_flanker_eeg/script/process_beh/test.csv', index=False)
final_tabulated_df.to_csv('/home/data/NDClab/datasets/social-flanker-eeg-dataset/code/sfe_postprocessing/process_beh/beh_all.csv', index=False)