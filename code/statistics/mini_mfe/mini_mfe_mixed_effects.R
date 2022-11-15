# This script allows to run statistical analysis on Psychopy output of the memory for error project.
# Author: Kianoosh Hosseini at NDCLab @FIU (May 2022; https://Kianoosh.info; https://NDClab.com)
# Last Update: 2022-10-17 (YYYY-MM-DD)

#install.packages('devtools')
#library(devtools)
#install_github("d4ndo/binaryLogic")

library(binaryLogic) # for as.binary

library(tidyverse)
library(dplyr)
library(stringr)
library(ggplot2)
library(nlme)

#Working directory should be the Psychopy experiment directory.
proje_wd <- "~/Documents/GitHub/memory-for-error-dataset/materials/experiments/larger_arrows_triggers"
setwd(proje_wd)

today <- Sys.Date()
today <- format(today, "%Y%m%d")

# Defining the input and output folders.
input_path <- paste(proje_wd, "data", sep ="/", collapse = NULL) # input data directory
output_path <- paste(proje_wd, "stat_output", sep ="/", collapse = NULL) # output directory
proc_fileName <- paste(today, "_mfeProj.csv", sep ="", collapse = NULL) # output filename

#identify data files
datafiles_list <- c() # an empty list that will be filled in the next "for" loop!
csvSelect <- list.files(input_path, pattern = ".csv") # listing only csv files
for (lisar1 in 1:length(csvSelect)){
  temp_for_file <- ifelse (str_detect(csvSelect[lisar1], "face_flanker_v1", negate = FALSE), 1, 0)
  if (temp_for_file == 1){
    temp_list <- csvSelect[lisar1]
    datafiles_list <- c(datafiles_list, temp_list)
  }
}

# Creating the main empty dataframe that will be filled with the data from the loop below:
mainDat <- setNames(data.frame(matrix(ncol = 10, nrow = 0)), c("id", "facesName", "surpriseAcc", "is_congruent", "is_new", # Surprise accuracy refers to whether the face has been identified correctlyin the surprise task or not.
                                                              "is_pre_error_face", "is_correct_face", "is_post_error_face", "is_post_correct_face", "is_pre_correct_face"))

outlier_mainDat <- setNames(data.frame(matrix(ncol = 14, nrow = 0)), c("id", "congAcc", "incongAcc", "congCorr_meanRT", "incongCorr_meanRT", "congCorr_logMeanRT", "incongCorr_logMeanRT",
                                                                       "flankEff_meanACC", "flankEff_meanRT", "flankEff_logMeanRT",
                                                                       "reported_errors", "committed_errors", "memoryBias_score", "num_incong_errors"))


# will loop over all participant datafiles.
for(i in 1:length(datafiles_list)){
  #for this participant, find the csv file
  psychopy_file <- paste(input_path,datafiles_list[i], sep = "/", collapse = NULL)

  #read in the data for this participant, establish id, and remove extraneous variables
  psychopyDat <- read.csv(file = psychopy_file, stringsAsFactors = FALSE, na.strings=c("", "NA"))
  id <- psychopyDat$id[1]
  psychopyDatTrim <- psychopyDat[c("id",
                                   "new", # The  face appeared during the surprise task! This column was used to differentiate the faces appear during the surprise task from the ones
                                   # appear during the flanker! This column does not differentiate the Old vs. New faces!
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
  overall_acc <- accuracy
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
    reported_errors <- NA
    memoryBias_score <- NA
  } else {
    memoryBias_score <- (committed_errors - reported_errors)/ abs(committed_errors) # percent bias score calculation
  }

  surpDat <- subset(remove_prac_trials, !complete.cases(remove_prac_trials$FriendlyKey))
  surpDat <- subset(surpDat, complete.cases(surpDat$newKey))
  surpDat <- subset(surpDat, complete.cases(surpDat$new)) #contains all the data we need from the surprise task
  surpDat$newKey <- replace(surpDat$newKey, surpDat$newKey =='right', 8) # replace 8 values with right for the next loop.
  surpDat$newKey <- replace(surpDat$newKey, surpDat$newKey =='left', 1)
  num_incong_errors <- nrow(incong_errorDat)
  #################################### OUTLIER identification Zone #####################################
  # In this section: I first compute overall d prime and exclude outliers based on that. Under that if statement, I, then, exclude
  # outliers based on the number of their errors.
  ### To prepare data, I need to add a column to surpDat that shows if the face is new or old.
  # I will name the column is_new: (0 -> old; 1 -> new)!
  for (mahsa in 1:nrow(surpDat)){
    temp_face <- surpDat$surpriseFaces[mahsa]
    face_is_old <- sum(str_detect(keep_rows_with_acc_vals$straightFace, temp_face)) > 0
    if (face_is_old == 1){
      surpDat$is_new[mahsa] <- 0
    } else if (face_is_old == 0){
      surpDat$is_new[mahsa] <- 1
    }
  }
  num_oldFaces_identified_correctly <- 0 # this is the number of old faces identifeied correctly
  num_newFaces_identified_correctly <- 0 # this is the number of new faces identifeied correctly
  # and will be updated in the loop below:
  for (Jafa in 1:nrow(surpDat)){
    if (surpDat$is_new[Jafa] == 0){ # The displayed face in the surprise is old!
      identified_correctly_old <- ifelse (surpDat$newKey[Jafa] != surpDat$surprise_key_resp.keys[Jafa], 1, 0) #returns 1 when participant correctly identifies the face as OLD!
      if (identified_correctly_old == 1){
        num_oldFaces_identified_correctly <- num_oldFaces_identified_correctly + 1 # The number of old faces identified correctly
      }
    } else if (surpDat$is_new[Jafa] == 1){ # The displayed face in the surprise is new!
      identified_correctly_new <- ifelse (surpDat$newKey[Jafa] == surpDat$surprise_key_resp.keys[Jafa], 1, 0) #returns 1 when participant correctly identifies the face as NEW!
      if (identified_correctly_new == 1){
        num_newFaces_identified_correctly <- num_newFaces_identified_correctly + 1 # The number of new faces faces identified correctly
      }
    }
  }
  total_num_newFaces <- 80 # I have this number frtom my MATLAB script that I have made for the Psychopy task.
  num_newFaces_identified_incorrectly <- total_num_newFaces - num_newFaces_identified_correctly
  num_faces_identified_correctly <- num_oldFaces_identified_correctly + num_newFaces_identified_correctly # nmuber of faces identified correctly in the surprise task
  overall_hit <- (num_faces_identified_correctly)/(nrow(surpDat))
  if  (overall_hit == 0 || is.nan(overall_hit) || length(overall_hit) == 0){
    overall_hit <- 0.5
  }
  overall_falseAlarm <- num_newFaces_identified_incorrectly/total_num_newFaces # False Alarm rate
  if  (overall_falseAlarm == 0 || is.nan(overall_falseAlarm) || length(overall_falseAlarm) == 0){
    overall_falseAlarm <- 0.5
  }
  d_prime_overall <- qnorm(overall_hit) - qnorm(overall_falseAlarm)
  d_prime_based_outlier <- 0.7548748 - 0.4064889
  #d_prime_based_outlier <- 0.7741951 - 0.3954228 # the first value is the mean of d_prime_overall across all subjects and the second value is SD!
  if (d_prime_overall >= d_prime_based_outlier){
    # Participants with less than 1 incong errors are considered outliers. This may be updated according to the data mean and SD.
    outlier_num <- 1
    if (nrow(incong_errorDat) >= outlier_num){ #for when the participant has outlier_num or more than outlier_num incongruent errors
      # The goal is to create a dataframe is in long format form and then used for mixed effects models.
      # "id", "facesName", "surpriseAcc", "is_congruent", "is_new", "is_pre_error_face", "is_error_face", "is_post_error_face"))
      post_error_faces <- c() # will be filled in the loop below.
      for (zaman in 1:nrow(keep_rows_with_acc_vals)){
        next_idx <- zaman + 1
        if (keep_rows_with_acc_vals$accuracy[zaman] ==0){
          if (keep_rows_with_acc_vals$congruent[zaman] == 0){
            if (keep_rows_with_acc_vals$task_trial_loop.thisTrialN[zaman] == 31){ # Trial #31 is the last trial in a block and
              # the face after that is the first trial of the next block. So, that face cannot be among post_error_faces.
              post_error_faces <- post_error_faces
            } else {
              if (keep_rows_with_acc_vals$accuracy[next_idx] ==1){ # to have only correct trials in the post_error
                post_error_faces <- rbind(post_error_faces, keep_rows_with_acc_vals[next_idx,])
              }
            }
          }
        }
      }
      post_correct_faces <- c()
      for (zaman in 1:nrow(keep_rows_with_acc_vals)){
        next_idx <- zaman + 1
        if (keep_rows_with_acc_vals$accuracy[zaman] ==1){
          if (keep_rows_with_acc_vals$congruent[zaman] == 0){
            if (keep_rows_with_acc_vals$task_trial_loop.thisTrialN[zaman] == 31){ #Checks if this is the last trial of the block.
              post_correct_faces <- post_correct_faces
            } else {
              if (keep_rows_with_acc_vals$accuracy[next_idx] ==1){ # to have only correct trials in the post_correct
                post_correct_faces <- rbind(post_correct_faces, keep_rows_with_acc_vals[next_idx,])
              }
            }
          }
        }
      }
      pre_error_faces <- c() # will be filled in the loop below.
      for (zaman in 1:nrow(keep_rows_with_acc_vals)){
        prior_idx <- zaman - 1
        if (keep_rows_with_acc_vals$accuracy[zaman] ==0){
          if (keep_rows_with_acc_vals$congruent[zaman] ==0){
            if (keep_rows_with_acc_vals$task_trial_loop.thisTrialN[zaman] == 0){ #Checks if this is the first trial of the block.
              pre_error_faces <- pre_error_faces
            } else {
              if (keep_rows_with_acc_vals$accuracy[prior_idx] ==1){ # to have only correct trials in the pre_error
                pre_error_faces <- rbind(pre_error_faces, keep_rows_with_acc_vals[prior_idx,])
              }
            }
          }
        }
      }
      pre_correct_faces <- c()
      for (zaman in 1:nrow(keep_rows_with_acc_vals)){
        prior_idx <- zaman - 1
        if (keep_rows_with_acc_vals$accuracy[zaman] ==1){
          if (keep_rows_with_acc_vals$congruent[zaman] ==0){
            if (keep_rows_with_acc_vals$task_trial_loop.thisTrialN[zaman] == 0){ #Checks if this is the first trial of the block.
              pre_correct_faces <- pre_correct_faces
            } else {
              if (keep_rows_with_acc_vals$accuracy[prior_idx] ==1){ # to have only correct trials in the pre_correct
                pre_correct_faces <- rbind(pre_correct_faces, keep_rows_with_acc_vals[prior_idx,])
              }
            }
          }
        }
      }
      for (ii in 1:nrow(surpDat)){ #this is a loop that repeats itself for every row of Surprise faces.
        # This loop computes the values that go into columns of the long format data.
        id <- surpDat$id[ii]
        facesName <- surpDat$surpriseFaces[ii]
        is_new <- surpDat$is_new[ii]
        rowDat <- filter(keep_rows_with_acc_vals, straightFace == facesName) # find the face in the keep_rows_with_acc_vals

        is_pre_error_face <- as.numeric(nrow(filter(pre_error_faces, straightFace == facesName))) # 0: no; 1:yes
        is_post_error_face <- as.numeric(nrow(filter(post_error_faces, straightFace == facesName))) # 0: no; 1:yes
        is_pre_correct_face <- as.numeric(nrow(filter(pre_correct_faces, straightFace == facesName))) # 0: no; 1:yes
        is_post_correct_face <- as.numeric(nrow(filter(post_correct_faces, straightFace == facesName))) # 0: no; 1:yes
        if (nrow(rowDat) == 1){ # When the face is old!
          is_congruent <- rowDat$congruent
          is_correct_face <- rowDat$accuracy
        } else if (nrow(rowDat) == 0){ # When the face is new!
          is_congruent <- 'NA'
          is_correct_face <- 'NA'
        }

        if (surpDat$is_new[ii] == 0){ # The displayed face in the surprise is old!
          surprise_accuracy <- ifelse (surpDat$newKey[ii] != surpDat$surprise_key_resp.keys[ii], 1, 0) #returns 1 when participant correctly identifies the face as OLD!
        } else if (surpDat$is_new[ii] == 1){ # The displayed face in the surprise is new!
          surprise_accuracy <- ifelse (surpDat$newKey[ii] == surpDat$surprise_key_resp.keys[ii], 1, 0) ##returns 1 when participant correctly identifies the face as NEW!
        }
        surpriseAcc <- surprise_accuracy
        mainDat[nrow(mainDat) + 1,] <-c(id, facesName, surpriseAcc, is_congruent, is_new, is_pre_error_face, is_correct_face, is_post_error_face, is_post_correct_face, is_pre_correct_face)

      }

    } else {
      outlier_mainDat[nrow(outlier_mainDat) + 1,] <-c(id, congAcc, incongAcc, congCorr_meanRT, incongCorr_meanRT, congCorr_logMeanRT, incongCorr_logMeanRT, flankEff_meanACC, flankEff_meanRT, flankEff_logMeanRT, reported_errors, committed_errors, memoryBias_score, num_incong_errors)
    }
  } else {
    outlier_mainDat[nrow(outlier_mainDat) + 1,] <-c(id, congAcc, incongAcc, congCorr_meanRT, incongCorr_meanRT, congCorr_logMeanRT, incongCorr_logMeanRT, flankEff_meanACC, flankEff_meanRT, flankEff_logMeanRT, reported_errors, committed_errors, memoryBias_score, num_incong_errors)
  }
}
mainDat$is_new <- as.factor(mainDat$is_new)
mainDat$is_congruent <- as.factor(mainDat$is_congruent)
mainDat$is_correct_face <- as.factor(mainDat$is_correct_face)

mainDat$surpriseAcc <- as.numeric(mainDat$surpriseAcc)
mainDat$is_pre_error_face <- as.factor(mainDat$is_pre_error_face)
mainDat$is_post_error_face <- as.factor(mainDat$is_post_error_face)
mainDat$is_pre_correct_face <- as.factor(mainDat$is_pre_correct_face)
mainDat$is_post_correct_face <- as.factor(mainDat$is_post_correct_face)


mainDat$surpriseAcc <- as.factor(mainDat$surpriseAcc)


# Running mixed effects analyses
# glmer ro barrresi kon! In be dalile logistic regression hastesh!
only_old <- subset(mainDat, is_new == 0)
only_old_and_error_trial_faces <- subset(only_old, is_congruent == 0)
fit_model <- lme(surpriseAcc~ is_correct_face, data =only_old_and_error_trial_faces, random = ~1 | id, na.action = na.omit, method = "ML")
anova(fit_model)

fit_model <- lme(surpriseAcc~ is_post_error_face, data =only_old_and_error_trial_faces, random = ~1 | id, na.action = na.omit, method = "ML")
anova(fit_model)