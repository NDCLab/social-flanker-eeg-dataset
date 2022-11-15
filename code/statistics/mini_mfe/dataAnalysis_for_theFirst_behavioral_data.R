# This script allows to run statistical analysis on Psychopy output of the memory for error project.
# Author: Kianoosh Hosseini at NDCLab @FIU (May 2022; https://Kianoosh.info; https://NDClab.com)
# Some parts are from scripts by George Buzzell, Jessica M. Alexander, and Arina Polyanskaya.  
# Last Update: 2022-06-09 (YYYY-MM-DD)


library(tidyverse)
library(dplyr)
library(stringr)
library(ggplot2)


#Working directory should be the Psychopy experiment directory. 
proje_wd <- "~/Documents/GitHub/memory-for-error-dataset/materials/experiments/arrowFlanker_with_chicago_background_half"
setwd(proje_wd)

today <- Sys.Date()
today <- format(today, "%Y%m%d")

# Defining the input and output folders.
input_path <- paste(proje_wd, "data", sep ="/", collapse = NULL) # input data directory
output_path <- paste(proje_wd, "stat_output", sep ="/", collapse = NULL) # output directory
proc_fileName <- paste(today, "_mfeProj.csv", sep ="", collapse = NULL) # output filename

#identify data files 
datafiles_list <- c() # an empty list that will be filled in the next for loop! 
csvSelect = list.files(input_path, pattern = ".csv") # listing only csv files
for (lisar1 in 1:length(csvSelect)){
  temp_for_file <- ifelse (str_detect(csvSelect[lisar1], "face_flanker_v1", negate = FALSE), 1, 0)
  if (temp_for_file == 1){
    temp_list <- csvSelect[lisar1]
    datafiles_list <- c(datafiles_list, temp_list)
  }
}

# Creating the main empty dataframe that will be filled with the data from the loop below:
mainDat <- setNames(data.frame(matrix(ncol = 44, nrow = 0)), c("id", "congAcc", "incongAcc", "congCorr_meanRT", "incongCorr_meanRT", "congCorr_logMeanRT", "incongCorr_logMeanRT",
                                                               "flankEff_meanACC", "flankEff_meanRT", "flankEff_logMeanRT",
                                                               "reported_errors", "committed_errors", "memoryBias_score", 
                                                               "num_incong_errorFaces_reported_old", "num_incong_errorFaces_reported_new",
                                                               "num_incong_corrFaces_reported_old", "num_incong_corrFaces_reported_new",
                                                               "num_foilFaces_reported_new", "num_foilFaces_reported_old",
                                                               "num_incong_errorFaces_reported_friendly", "num_incong_errorFaces_reported_unfriendly",
                                                               "num_incong_corrFaces_reported_friendly", "num_incong_corrFaces_reported_unfriendly",
                                                               "num_post_incong_errorFaces_reported_old", "num_post_incong_errorFaces_reported_new", "num_post_incong_correctFaces_reported_old", "num_post_incong_correctFaces_reported_new",
                                                               "num_pre_incong_errorFaces_reported_old", "num_pre_incong_errorFaces_reported_new", "num_pre_incong_correctFaces_reported_old", "num_pre_incong_correctFaces_reported_new",
                                                               "num_post_incong_errorFaces_reported_friendly", "num_post_incong_errorFaces_reported_unfriendly", "num_post_incong_correctFaces_reported_friendly", "num_post_incong_correctFaces_reported_unfriendly",
                                                               "num_pre_incong_errorFaces_reported_friendly", "num_pre_incong_errorFaces_reported_unfriendly", "num_pre_incong_correctFaces_reported_friendly", "num_pre_incong_correctFaces_reported_unfriendly",
                                                               "errorFaces_hit", "correctFaces_hit", "falseAlarm_for_both", "d_prime_error", "d_prime_correct"))


# will loop over all participant datafiles. 
for(i in 1:length(datafiles_list)){
  #for this participant, find the csv file
  psychopy_file <- paste(input_path,datafiles_list[i], sep = "/", collapse = NULL)
    
    #read in the data for this participant, establish id, and remove extraneous variables
  psychopyDat <- read.csv(file = psychopy_file, stringsAsFactors = FALSE, na.strings=c("", "NA"))
  id <- psychopyDat$id[1]
  psychopyDatTrim <- psychopyDat[c("id",
                                   "new", # The displayed face is new? This column stores the correct value of the task not the response from the subject
                                   "newKey", # Which key should be pressed when the face is new!
                                   "FriendlyKey", # Which key should be pressed when they identify face as friendly!
                                   "congruent",
                                   "stimNum",
                                   "accuracy",
                                   "task1_stim_keyResp.keys", 
                                   "textbox_2.text", # stores the number of reported errors by subjects
                                   "surprise_key_resp.keys",
                                   "friendly_key_resp.keys",
                                   "bigFace.started",
                                   "surpriseFaces",
                                   "straightFace",
                                   "task1_stim_keyResp.rt", #  this stores reaction time for each trial
                                   "task_trial_loop.thisTrialN")] # This stores the number of trial in a block; For this study it starts from 0 to 31 
  #                                                                 as we have 32 trials in each block. 
  ###################################
  #### SECTION 1:
  #remove practice trials and any rows that do not reflect experiment data
  remove_first_row <- psychopyDatTrim[c(-1),]
  remove_prac_trials <- subset(remove_first_row, !complete.cases(remove_first_row$bigFace.started)) # removes practice trials
  # Calculate the overall accuracy in the main task
  accuracy <- mean(remove_prac_trials$accuracy, na.rm = TRUE)
  # Calculate the average accuracy in congruent trials
  congDat <- filter(remove_prac_trials, congruent ==1) # subset the data for congruent trials.
  congAcc <- mean(congDat$accuracy, na.rm = TRUE) # mean accuracy for congruent trials              
  # Calculate the average accuracy in incongruent trials
  incongDat <- filter(remove_prac_trials, congruent ==0) # subset the data for incongruent trials.
  incongAcc <- mean(incongDat$accuracy, na.rm = TRUE) # mean accuracy for incongruent trials          
  
  
  keep_rows_with_acc_vals <- subset(remove_prac_trials, complete.cases(remove_prac_trials$accuracy))
  errorDat <- filter(keep_rows_with_acc_vals, accuracy ==0) # subset error trials
  errorDat$task1_stim_keyResp.rt <- gsub("[", "", errorDat$task1_stim_keyResp.rt, fixed = TRUE) #removing brackets and converting to numeric
  errorDat$task1_stim_keyResp.rt <- gsub("]", "", errorDat$task1_stim_keyResp.rt, fixed = TRUE)
  errorDat$task1_stim_keyResp.rt <- gsub(",.*","",errorDat$task1_stim_keyResp.rt) # removing the RT for the second response within the same trial.
  errorDat$task1_stim_keyResp.rt <- as.numeric(errorDat$task1_stim_keyResp.rt) # 
  errorDat <- subset(errorDat, complete.cases(errorDat$task1_stim_keyResp.rt))
  incong_errorDat <- filter(errorDat, congruent ==0) # subset incongruent error trials
  corrDat <- filter(keep_rows_with_acc_vals, accuracy ==1) # subset correct trials
  corrDat$task1_stim_keyResp.rt <- gsub("[", "", corrDat$task1_stim_keyResp.rt, fixed = TRUE)
  corrDat$task1_stim_keyResp.rt <- gsub("]", "", corrDat$task1_stim_keyResp.rt, fixed = TRUE)
  corrDat$task1_stim_keyResp.rt <-  gsub(",.*","",corrDat$task1_stim_keyResp.rt)
  corrDat$task1_stim_keyResp.rt <- as.numeric(corrDat$task1_stim_keyResp.rt) # 
  corrDat <- subset(corrDat, complete.cases(corrDat$task1_stim_keyResp.rt))
  
  

  # subset the data for correct trials only, separately for congruent and incongruent trials, creating new data frames for each
  cong_corrDat <- corrDat[corrDat$congruent == 1,]
  incong_corrDat <- corrDat[corrDat$congruent == 0,]  
  #for correct trials, compute mean RT (raw and log-corrected)
  congCorr_meanRT <- mean(cong_corrDat$task1_stim_keyResp.rt)
  incongCorr_meanRT <- mean(incong_corrDat$task1_stim_keyResp.rt)
  
  congCorr_logMeanRT <- mean(log((1+cong_corrDat$task1_stim_keyResp.rt)))
  incongCorr_logMeanRT <- mean(log((1+incong_corrDat$task1_stim_keyResp.rt)))
  
  # compute flanker-effect scores for accuracy, RT, log-RT
  flankEff_meanACC <- incongAcc - congAcc
  flankEff_meanRT <- incongCorr_meanRT - congCorr_meanRT
  flankEff_logMeanRT <- incongCorr_logMeanRT - congCorr_logMeanRT
  
  # number of errors made in the main task
  committed_errors <- 0
  for (khata in 1:nrow(keep_rows_with_acc_vals)){
    if (keep_rows_with_acc_vals$accuracy[khata] == 0){
      committed_errors <- committed_errors +1
    }
  }
  reported_errors <- subset(remove_prac_trials, complete.cases(remove_prac_trials$textbox_2.text))
  reported_errors <- reported_errors$textbox_2.text # number of reported errors by participants
  if (length(reported_errors) == 0){ # in case a participant does not answer the question, this code will prevent from future errors.
    reported_errors <- 'Missing'
    memoryBias_score <- 'Missing'
  } else {
    memoryBias_score <- (committed_errors - reported_errors)/ abs(committed_errors) # percent bias score calculation
  }
  surpDat <- subset(remove_prac_trials, !complete.cases(remove_prac_trials$FriendlyKey)) 
  surpDat <- subset(surpDat, complete.cases(surpDat$newKey)) 
  surpDat <- subset(surpDat, complete.cases(surpDat$new)) #contains all the data we need from the surprise task
  surpDat$newKey <- replace(surpDat$newKey, surpDat$newKey =='right', 8) # replace 8 values with right for the next loop.
  surpDat$newKey <- replace(surpDat$newKey, surpDat$newKey =='left', 1) 
  #######################################
  ######## SECTION 2: Surprise Task
  # Let's keep only the surprise trials that have faces from error trials in the main task. Then, we will be able to easily use that smaller dataframe to calculate the number of OLD faces among error trials.
  # Loop over the faces from error trials.
  num_incong_errorFaces_reported_old <- 0 # this is the number of error faces that they report as OLD and will be updated in the loop below:
  for (Jafa in 1:nrow(incong_errorDat)){
    temp_face <- incong_errorDat$straightFace[Jafa]
    temp_for_surp <- filter(surpDat, surpriseFaces == temp_face)
    identified_old_correctly <- ifelse (temp_for_surp$newKey != temp_for_surp$surprise_key_resp.keys, 1, 0) #returns 1 when participant correctly identifies the face as OLD!
    if (identified_old_correctly == 1){
      num_incong_errorFaces_reported_old <- num_incong_errorFaces_reported_old + 1 # The number of error faces that they report as OLD
    }
  }
  num_incong_errorFaces_reported_new <- nrow(incong_errorDat) - num_incong_errorFaces_reported_old # stores the # of error faces that the participant incorrectly identifies as new.
  num_incong_corrFaces_reported_old <- 0
  for (Jafa2 in 1:nrow(incong_corrDat)){
    temp_face <- incong_corrDat$straightFace[Jafa2]
    temp_for_surp <- filter(surpDat, surpriseFaces == temp_face) # find the error face in the surpDat
    identified_old_correctly <- ifelse (temp_for_surp$newKey != temp_for_surp$surprise_key_resp.keys, 1, 0) #returns 1 when participant correctly identifies the face as OLD!
    if (identified_old_correctly == 1){
      num_incong_corrFaces_reported_old <- num_incong_corrFaces_reported_old + 1 # The number of correct faces that they report as OLD
    }
  }
  num_incong_corrFaces_reported_new <- nrow(incong_corrDat) - num_incong_corrFaces_reported_old # The number of correct faces that they report as new
  #####
  # Number of foil faces reported new? old?
  num_foilFaces_reported_new <- 0
  num_foilFaces_reported_old <- 0
  for (foil_num in 1:nrow(surpDat)){
    if (surpDat$new[foil_num] == 1){
      if (surpDat$newKey[foil_num] == surpDat$surprise_key_resp.keys[foil_num]){
        num_foilFaces_reported_new <- num_foilFaces_reported_new + 1
      } else if (surpDat$newKey[foil_num] != surpDat$surprise_key_resp.keys[foil_num]){
        num_foilFaces_reported_old <- num_foilFaces_reported_old + 1
      }
    }
  }

  ######################################
  #SECTION 3: Friendly Task
  friendlyDat <- subset(remove_prac_trials, complete.cases(remove_prac_trials$FriendlyKey)) # keeps only the rows from the friendly task 
  friendlyDat$FriendlyKey <- replace(friendlyDat$FriendlyKey, friendlyDat$FriendlyKey =='right', 8) # replace 8 values with right for the next loop.
  friendlyDat$FriendlyKey <- replace(friendlyDat$FriendlyKey, friendlyDat$FriendlyKey =='left', 1) 
  friendlyDat <- subset(friendlyDat, complete.cases(friendlyDat$surpriseFaces))
  num_incong_errorFaces_reported_friendly <- 0 # this is the number of error faces that they report as OLD and will be updated in the loop below:
  # Loop over the faces from error trials.
  for (salsal in 1:nrow(incong_errorDat)){
    temp_face <- incong_errorDat$straightFace[salsal]
    temp_for_friendly <- filter(friendlyDat, surpriseFaces == temp_face) # find the error face in the friendlyDat
    identified_friendly <- ifelse (temp_for_friendly$FriendlyKey == temp_for_friendly$friendly_key_resp.keys, 1, 0) #returns 1 when participant identifies the face as friendly!
    if (identified_friendly == 1){
      num_incong_errorFaces_reported_friendly <- num_incong_errorFaces_reported_friendly + 1 # The number of error faces that they report as friendly
    }
  }
  num_incong_errorFaces_reported_unfriendly <- nrow(incong_errorDat) - num_incong_errorFaces_reported_friendly
  num_incong_corrFaces_reported_friendly <- 0
  for (salsal2 in 1:nrow(incong_corrDat)){
    temp_face <- incong_corrDat$straightFace[salsal2]
    temp_for_friendly <- filter(friendlyDat, surpriseFaces == temp_face) # find the error face in the friendlyDat
    identified_friendly <- ifelse (temp_for_friendly$FriendlyKey == temp_for_friendly$friendly_key_resp.keys, 1, 0) #returns 1 when participant identifies the face as friendly!
    if (identified_friendly == 1){
      num_incong_corrFaces_reported_friendly <- num_incong_corrFaces_reported_friendly + 1 # The number of error faces that they report as OLD
    }
  }
  num_incong_corrFaces_reported_unfriendly <- nrow(incong_corrDat) - num_incong_corrFaces_reported_friendly

  ######################################
  #Section 4: Do they remember post-error faces?
  # I should loop over the data frame that has only the main task with accuracy vals, i.e., keep_rows_with_acc_vals
  # The goal is to create a data frame of post-error faces. We will just use incongruent pre/post data.
  post_error_faces <- c() # will be filled in the loop below.
  for (zaman in 1:nrow(keep_rows_with_acc_vals)){
    next_idx <- zaman + 1
    if (keep_rows_with_acc_vals$accuracy[zaman] ==0){
      if (keep_rows_with_acc_vals$congruent[zaman] == 0){
        if (keep_rows_with_acc_vals$task_trial_loop.thisTrialN[zaman] == 31){ # Trial #31 is the last trial in a block and
        # the face after that is the first trial of the next block. So, that face cannot be among post_error_faces.
        post_error_faces <- post_error_faces
      } else {
        post_error_faces <- rbind(post_error_faces, keep_rows_with_acc_vals[next_idx,])
        }
      }
    }
  }
  post_error_faces <- subset(post_error_faces, complete.cases(post_error_faces$id))
  # Let's find out how many of the post-error faces were correctly identified as OLD!
  num_post_incong_errorFaces_reported_old <- 0 # this is the number of error faces that they report as OLD and will be updated in the loop below:
  for (zaman2 in 1:nrow(post_error_faces)){
    temp_face <- post_error_faces$straightFace[zaman2]
    temp_for_surp <- filter(surpDat, surpriseFaces == temp_face)
    identified_old_correctly <- ifelse (temp_for_surp$newKey != temp_for_surp$surprise_key_resp.keys, 1, 0) #returns 1 when participant correctly identifies the face as OLD!
    if (identified_old_correctly == 1){
      num_post_incong_errorFaces_reported_old <- num_post_incong_errorFaces_reported_old + 1 # The number of post-error faces that they report as OLD  1111111111111111111
    }
  }
  num_post_incong_errorFaces_reported_new <- nrow(post_error_faces) - num_post_incong_errorFaces_reported_old
  # What about post-correct faces?
  post_correct_faces <- c()
  for (zaman in 1:nrow(keep_rows_with_acc_vals)){
    next_idx <- zaman + 1
    if (keep_rows_with_acc_vals$accuracy[zaman] ==1){
      if (keep_rows_with_acc_vals$congruent[zaman] == 0){
        if (keep_rows_with_acc_vals$task_trial_loop.thisTrialN[zaman] == 31){ #Checks if this is the last trial of the block.
        post_correct_faces <- post_correct_faces
      } else {
        post_correct_faces <- rbind(post_correct_faces, keep_rows_with_acc_vals[next_idx,])
        }
      }
    }
  }
  post_correct_faces <- subset(post_correct_faces, complete.cases(post_correct_faces$id))
  # Let's find out how many of the post-correct faces were correctly identified as OLD!
  num_post_incong_correctFaces_reported_old <- 0 # this is the number of correct faces that they report as OLD and will be updated in the loop below:
  for (zaman2 in 1:nrow(post_correct_faces)){
    temp_face <- post_correct_faces$straightFace[zaman2]
    temp_for_surp <- filter(surpDat, surpriseFaces == temp_face)
    identified_old_correctly <- ifelse (temp_for_surp$newKey != temp_for_surp$surprise_key_resp.keys, 1, 0) #returns 1 when participant correctly identifies the face as OLD!
    if (identified_old_correctly == 1){
      num_post_incong_correctFaces_reported_old <- num_post_incong_correctFaces_reported_old + 1 # The number of post-correct faces that they report as OLD  1111111111111111111
    }
  }
  num_post_incong_correctFaces_reported_new <- nrow(post_correct_faces) - num_post_incong_correctFaces_reported_old
  ##############
  #Section 5: Do they remember pre-error faces?
  pre_error_faces <- c() # will be filled in the loop below.
  for (zaman in 1:nrow(keep_rows_with_acc_vals)){
    prior_idx <- zaman - 1
    if (keep_rows_with_acc_vals$accuracy[zaman] ==0){
      if (keep_rows_with_acc_vals$congruent[zaman] ==0){
        if (keep_rows_with_acc_vals$task_trial_loop.thisTrialN[zaman] == 0){ #Checks if this is the first trial of the block.
        pre_error_faces <- pre_error_faces
      } else {
        pre_error_faces <- rbind(pre_error_faces, keep_rows_with_acc_vals[prior_idx,])
        }
      }
    }
  }
  pre_error_faces <- subset(pre_error_faces, complete.cases(pre_error_faces$id))
  # Let's find out how many of the pre-error faces were correctly identified as OLD!
  num_pre_incong_errorFaces_reported_old <- 0 # this is the number of correct faces that they report as OLD and will be updated in the loop below:
  for (zaman2 in 1:nrow(pre_error_faces)){
    temp_face <- pre_error_faces$straightFace[zaman2]
    temp_for_surp <- filter(surpDat, surpriseFaces == temp_face)
    identified_old_correctly <- ifelse (temp_for_surp$newKey != temp_for_surp$surprise_key_resp.keys, 1, 0) #returns 1 when participant correctly identifies the face as OLD!
    if (identified_old_correctly == 1){
      num_pre_incong_errorFaces_reported_old <- num_pre_incong_errorFaces_reported_old + 1 # The number of pre-error faces that they report as OLD  1111111111111111111
    }
  }
  num_pre_incong_errorFaces_reported_new <- nrow(pre_error_faces) - num_pre_incong_errorFaces_reported_old
  pre_correct_faces <- c()
  for (zaman in 1:nrow(keep_rows_with_acc_vals)){
    prior_idx <- zaman - 1
    if (keep_rows_with_acc_vals$accuracy[zaman] ==1){
      if (keep_rows_with_acc_vals$congruent[zaman] ==0){
        if (keep_rows_with_acc_vals$task_trial_loop.thisTrialN[zaman] == 0){ #Checks if this is the first trial of the block.
        pre_correct_faces <- pre_correct_faces
      } else {
        pre_correct_faces <- rbind(pre_correct_faces, keep_rows_with_acc_vals[prior_idx,])
        }
      }
    }
  }
  # What about pre-correct faces?
  pre_correct_faces <- subset(pre_correct_faces, complete.cases(pre_correct_faces$id))
  # Let's find out how many of the post-correct faces were correctly identified as OLD!
  num_pre_incong_correctFaces_reported_old <- 0 # this is the number of correct faces that they report as OLD and will be updated in the loop below:
  for (zaman2 in 1:nrow(pre_correct_faces)){
    temp_face <- pre_correct_faces$straightFace[zaman2]
    temp_for_surp <- filter(surpDat, surpriseFaces == temp_face)
    identified_old_correctly <- ifelse (temp_for_surp$newKey != temp_for_surp$surprise_key_resp.keys, 1, 0) #returns 1 when participant correctly identifies the face as OLD!
    if (identified_old_correctly == 1){
      num_pre_incong_correctFaces_reported_old <- num_pre_incong_correctFaces_reported_old + 1 # The number of pre-correct faces that they report as OLD  1111111111111111111
    }
  }
  num_pre_incong_correctFaces_reported_new <- nrow(pre_correct_faces) - num_pre_incong_correctFaces_reported_old
  ##############
  #Section 6: How do they rate post-error faces? [friendly vs. unfriendly] 
  num_post_incong_errorFaces_reported_friendly <- 0
  for (realMadrid in 1:nrow(post_error_faces)){
    temp_face <- post_error_faces$straightFace[realMadrid]
    temp_for_friendly <- filter(friendlyDat, surpriseFaces == temp_face) # find the error face in the friendlyDat
    identified_friendly <- ifelse (temp_for_friendly$FriendlyKey == temp_for_friendly$friendly_key_resp.keys, 1, 0) #returns 1 when participant identifies the face as friendly!
    if (identified_friendly == 1){
      num_post_incong_errorFaces_reported_friendly <- num_post_incong_errorFaces_reported_friendly + 1 # The number of post_error faces that they report as friendly  1111111111111111111
    }
  }
  num_post_incong_errorFaces_reported_unfriendly <- nrow(post_error_faces) - num_post_incong_errorFaces_reported_friendly
  # What about post-correct faces?
  num_post_incong_correctFaces_reported_friendly <- 0
  for (realMadrid in 1:nrow(post_correct_faces)){
    temp_face <- post_correct_faces$straightFace[realMadrid]
    temp_for_friendly <- filter(friendlyDat, surpriseFaces == temp_face) # find the error face in the friendlyDat
    identified_friendly <- ifelse (temp_for_friendly$FriendlyKey == temp_for_friendly$friendly_key_resp.keys, 1, 0) #returns 1 when participant identifies the face as friendly!
    if (identified_friendly == 1){
      num_post_incong_correctFaces_reported_friendly <- num_post_incong_correctFaces_reported_friendly + 1 # The number of post_correct faces that they report as friendly  1111111111111111111
    }
  }
  num_post_incong_correctFaces_reported_unfriendly <- nrow(post_correct_faces) - num_post_incong_correctFaces_reported_friendly
  # What about pre-error faces?
  num_pre_incong_errorFaces_reported_friendly <- 0
  for (realMadrid in 1:nrow(pre_error_faces)){
    temp_face <- pre_error_faces$straightFace[realMadrid]
    temp_for_friendly <- filter(friendlyDat, surpriseFaces == temp_face) # find the error face in the friendlyDat
    identified_friendly <- ifelse (temp_for_friendly$FriendlyKey == temp_for_friendly$friendly_key_resp.keys, 1, 0) #returns 1 when participant identifies the face as friendly!
    if (identified_friendly == 1){
      num_pre_incong_errorFaces_reported_friendly <- num_pre_incong_errorFaces_reported_friendly + 1 # The number of pre_error faces that they report as friendly  1111111111111111111
    }
  }
  num_pre_incong_errorFaces_reported_unfriendly <- nrow(pre_error_faces) - num_pre_incong_errorFaces_reported_friendly
  # What about pre-correct faces?
  num_pre_incong_correctFaces_reported_friendly <- 0
  for (realMadrid in 1:nrow(pre_correct_faces)){
    temp_face <- pre_correct_faces$straightFace[realMadrid]
    temp_for_friendly <- filter(friendlyDat, surpriseFaces == temp_face) # find the error face in the friendlyDat
    identified_friendly <- ifelse (temp_for_friendly$FriendlyKey == temp_for_friendly$friendly_key_resp.keys, 1, 0) #returns 1 when participant identifies the face as friendly!
    if (identified_friendly == 1){
      num_pre_incong_correctFaces_reported_friendly <- num_pre_incong_correctFaces_reported_friendly + 1 # The number of pre_error faces that they report as friendly  1111111111111111111
    }
  }
  num_pre_incong_correctFaces_reported_unfriendly <- nrow(pre_correct_faces) - num_pre_incong_correctFaces_reported_friendly
  ########################## SIGNAL DETECTION THEORY ########################################
  # We make use of SDT in the surprise memory task.
  # OLD is our target.
  # OLD faces are going to be divided into old_errorFaces and old_correctFaces
  # We first compute hit and false alarm for each individual.
  errorFaces_hit <- num_incong_errorFaces_reported_old/nrow(incong_errorDat) #this is the hit (true positives) for old_errorFaces (only incongruent)
  correctFaces_hit <- num_incong_corrFaces_reported_old/nrow(incong_corrDat) # hit for old_correctFaces
  falseAlarm_for_both <- num_foilFaces_reported_old/(num_foilFaces_reported_new + num_foilFaces_reported_old) # False alarm rate for old_correctFaces and old_errorFaces
  # To compute z-score associated with a probability, we use "qnorm" function.
  # https://brain.mcmaster.ca/SDT/dprime.html # To compute d-prime, take a look at this! d_prime = Z_hit - Z_falseAlarm
  d_prime_error <- qnorm(errorFaces_hit) - qnorm(falseAlarm_for_both)
  d_prime_correct <- qnorm(correctFaces_hit) - qnorm(falseAlarm_for_both)
  ########## 
  mainDat[nrow(mainDat) + 1,] <-c(id, congAcc, incongAcc, congCorr_meanRT, incongCorr_meanRT, congCorr_logMeanRT, incongCorr_logMeanRT, flankEff_meanACC, flankEff_meanRT, flankEff_logMeanRT, reported_errors, committed_errors, memoryBias_score, num_incong_errorFaces_reported_old, num_incong_errorFaces_reported_new,num_incong_corrFaces_reported_old, num_incong_corrFaces_reported_new, num_foilFaces_reported_new, num_foilFaces_reported_old, num_incong_errorFaces_reported_friendly, num_incong_errorFaces_reported_unfriendly, num_incong_corrFaces_reported_friendly, num_incong_corrFaces_reported_unfriendly, num_post_incong_errorFaces_reported_old, num_post_incong_errorFaces_reported_new, num_post_incong_correctFaces_reported_old, num_post_incong_correctFaces_reported_new, num_pre_incong_errorFaces_reported_old, num_pre_incong_errorFaces_reported_new, num_pre_incong_correctFaces_reported_old, num_pre_incong_correctFaces_reported_new, num_post_incong_errorFaces_reported_friendly, num_post_incong_errorFaces_reported_unfriendly, num_post_incong_correctFaces_reported_friendly, num_post_incong_correctFaces_reported_unfriendly, num_pre_incong_errorFaces_reported_friendly, num_pre_incong_errorFaces_reported_unfriendly, num_pre_incong_correctFaces_reported_friendly, num_pre_incong_correctFaces_reported_unfriendly, errorFaces_hit, correctFaces_hit, falseAlarm_for_both, d_prime_error, d_prime_correct)
  
}
#write the extracted summary scores to disk
write.csv(mainDat,paste(output_path,proc_fileName, sep = "/", collapse = NULL), row.names=FALSE) 



#### Plotting

# pre-error friendly
# error friendly
# Post_error friendly

# pre-correct friendly
# correct friendly
# Post_correct friendly

# pre-error unfriendly
# error unfriendly
# Post_error unfriendly

# pre-correct unfriendly
# correct unfriendly
# Post_correct unfriendly

# The same thing as above for old/new (error and correct)

## Let's do some Bar plotting!
sample_size <- length(datafiles_list) # total number of participants. This will be needed to compute standard error.
# Convert mainDat with specified columns to long format. So, I can use ggplot, etc. easily.
longDat_friendly <- gather(mainDat, column_name, value, num_pre_incong_errorFaces_reported_friendly, num_incong_errorFaces_reported_friendly, num_post_incong_errorFaces_reported_friendly,
                  num_pre_incong_correctFaces_reported_friendly, num_incong_corrFaces_reported_friendly,
                  num_post_incong_correctFaces_reported_friendly)

longDat_unfriendly <- gather(mainDat, column_name, value,  num_pre_incong_errorFaces_reported_unfriendly,
                             num_incong_errorFaces_reported_unfriendly, num_post_incong_errorFaces_reported_unfriendly,
                             num_pre_incong_correctFaces_reported_unfriendly, num_incong_corrFaces_reported_unfriendly,
                             num_post_incong_correctFaces_reported_unfriendly)

longDat_old <- gather(mainDat, column_name, value, num_pre_incong_errorFaces_reported_old,
                      num_incong_errorFaces_reported_old, num_post_incong_errorFaces_reported_old,
                      num_pre_incong_correctFaces_reported_old, num_incong_corrFaces_reported_old,
                      num_post_incong_correctFaces_reported_old)

longDat_new <- gather(mainDat, column_name, value, num_pre_incong_errorFaces_reported_new,
                      num_incong_errorFaces_reported_new, num_post_incong_errorFaces_reported_new,
                      num_pre_incong_correctFaces_reported_new, num_incong_corrFaces_reported_new,
                      num_post_incong_correctFaces_reported_new)

# friendly
for_plot_friendly <- longDat_friendly %>%
  group_by(column_name) %>%
  summarise(
    n=n(),
    mean=mean(as.numeric(value)),
    sd=sd(as.numeric(value))
  ) %>%
  mutate( se=sd/sqrt(n))
ggplot(for_plot_friendly) +
  geom_bar( aes(x= column_name, y=mean), stat="identity", fill="forestgreen", alpha=0.5) +
  geom_errorbar( aes(x=column_name, ymin=mean-se, ymax=mean+se), width=0.4, colour="orange", alpha=0.9, size=1.5) +
  theme(axis.text.x = element_text(angle=90, vjust=.5, hjust=1)) +
  ggtitle("Friendly")

# Unfriendly
for_plot_unfriendly <- longDat_unfriendly %>%
  group_by(column_name) %>%
  summarise(
    n=n(),
    mean=mean(as.numeric(value)),
    sd=sd(as.numeric(value))
  ) %>%
  mutate( se=sd/sqrt(n))
ggplot(for_plot_unfriendly) +
  geom_bar( aes(x= column_name, y=mean), stat="identity", fill="forestgreen", alpha=0.5) +
  geom_errorbar( aes(x=column_name, ymin=mean-se, ymax=mean+se), width=0.4, colour="orange", alpha=0.9, size=1.5) +
  theme(axis.text.x = element_text(angle=90, vjust=.5, hjust=1)) +
  ggtitle("Unfriendly")


# Old
for_plot_old <- longDat_old %>%
  group_by(column_name) %>%
  summarise(
    n=n(),
    mean=mean(as.numeric(value)),
    sd=sd(as.numeric(value))
  ) %>%
  mutate( se=sd/sqrt(n))
ggplot(for_plot_old) +
  geom_bar( aes(x= column_name, y=mean), stat="identity", fill="forestgreen", alpha=0.5) +
  geom_errorbar( aes(x=column_name, ymin=mean-se, ymax=mean+se), width=0.4, colour="orange", alpha=0.9, size=1.5) +
  theme(axis.text.x = element_text(angle=90, vjust=.5, hjust=1)) +
  ggtitle("Old")

# New
for_plot_new <- longDat_new %>%
  group_by(column_name) %>%
  summarise(
    n=n(),
    mean=mean(as.numeric(value)),
    sd=sd(as.numeric(value))
  ) %>%
  mutate( se=sd/sqrt(n))
ggplot(for_plot_new) +
  geom_bar( aes(x= column_name, y=mean), stat="identity", fill="forestgreen", alpha=0.5) +
  geom_errorbar( aes(x=column_name, ymin=mean-se, ymax=mean+se), width=0.4, colour="orange", alpha=0.9, size=1.5) +
  theme(axis.text.x = element_text(angle=90, vjust=.5, hjust=1)) +
  ggtitle("New")


