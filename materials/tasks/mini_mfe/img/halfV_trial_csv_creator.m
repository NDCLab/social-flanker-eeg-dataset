%% This script is written by Kianoosh Hosseini at NDClab (See https://Kianoosh.info and https://ndclab.com) in May. 2022.
%%% For Chicago faces ...
% This code was originally written for loading the rendered images we have,
% not the natural face images from the Chicago database. 

%This script reads the faces' files in the neutralC (neutral faces from the Chicago face database) folder and then loads all
%faces in a single column. 

clear % clear matlab workspace
clc % clear matlab command window

%% Loading all the neutral Chicago faces. 
%main_dir = '/Users/khoss005/Documents/memory-for-error-dataset/materials/experiments/arrowFlanker_with_chicago_background_half/img';
main_dir = '/Users/kihossei/Documents/GitHub/memory-for-error-dataset/materials/experiments/larger_arrows_triggers/img';
faceData_location = [main_dir filesep 'neutralC']; %Location of stored faces (i.e., renders folder)
cd(faceData_location)
data_file_lists = dir; 
data_file_lists = data_file_lists(~ismember({data_file_lists.name},{'.', '..', '.DS_Store'}));
data_file_lists = {data_file_lists.name};
data_file_lists = string(data_file_lists); 
allFaces_filename_pattern = '-N'; % The face file that has this pattern in its name will be loaded.
allFaces = contains(data_file_lists, allFaces_filename_pattern, 'IgnoreCase',true);
allFaces = data_file_lists(allFaces);
allFaces = allFaces';
for lisar1=1:length(allFaces)
    allFaces(lisar1) = append('img/neutralC/',allFaces(lisar1)); 
end

%% After creating a list of all faces, randomly sample 160 faces. 160 is the number of trials. We also select additional 20 faces as practice trials.
% So, we load 180 faces in total.
faces = randsample(allFaces, 180);
trialFaces_for_surprise = faces; % This stores the list of faces that are going to be shown in practicae and main trials. 
surpriseFaces = ~contains(allFaces, faces, 'IgnoreCase',true);
surpriseFaces = allFaces(surpriseFaces); % these are the faces in the neutralC folder that are not selected to be shown during practice and main trials. We need 
% these as foil faces in the surprise memory task.
% As we will show 50% foils, we will need to randomly select 192/2 faces
% from this surpriseFaces.
surpriseFaces = randsample(surpriseFaces, 160/2);
foilFaces = surpriseFaces;
for abrak1=1:length(foilFaces) % adding a second column that mentions if this is a new face (i.e., foil). For new faces, we have "1" as true.
    foilFaces(abrak1,2) = '1'; % new?
end

%% A loop that creates 12 CSV files for the blocks.
arrowSize = '[.035, .035]';
first_rightFlanker_location = '[0.0385,0]';
second_rightFlanker_location = '[-0.0385,0]';
%first_leftFlanker_location = '[.066,0]'; change this in Psychopy
%second_leftFlanker_location = '[-.066,0]'; change this in Psychopy

rightArrow = 'img/rightArrow.png';
leftArrow = 'img/leftArrow.png';
for jaguar=1:6 % 5 of these files will be for the main blocks. The last one with 20 trials will be the practice block.
    if jaguar==6
        firstDat = randsample(faces, 20); % this practice block will have 20 trials.
        pracFaces_intact = firstDat; % we need this for the 2nd csv file.
        % we need to randomly select half of the faces to be right directed and the
        % remaining half will be left-directed.
        rightDir_faces = randsample(firstDat, 20/2); % right-directed faces
        leftDir_faces = ~contains(firstDat, rightDir_faces, 'IgnoreCase',true);
        leftDir_faces = firstDat(leftDir_faces); % contains the remaining faces that will be left-directed.
        
        % Randomly selecting half of the right-directed and left-directed faces to be congruent and the remaining half be incongruent.
        %there is going to be the table that has 6 columns; the 1st column is the target; the 2nd and 3rd are distractor faces; 4th column is stimNum; 5th column is congrunet?; 6th is the target.
        rightCong = randsample(rightDir_faces, 20/4); % Congruent faces.
        rightCong_intact = rightCong; % We need this for the next step.
        nav_temp1 = rightCong;
        % Let's create right-directed congruent rows.
        for zebra=1:length(rightCong)
            rightCong(zebra,1)= rightArrow;
            rightCong(zebra,2)= rightArrow;
            rightCong(zebra,3)= rightArrow;
            rightCong(zebra,4)= 5; % stimNum
            rightCong(zebra,5)= 1; %congruent?
            rightCong(zebra,6)= 'right'; %target
            rightCong(zebra,7)= '[0,0]'; % Center image Location on the screen for the Psychopy
            rightCong(zebra,8)= first_rightFlanker_location; % Right image Location on the screen for the Psychopy
            rightCong(zebra,9)= second_rightFlanker_location; % Left image Location on the screen for the Psychopy
            
            nav_temp = nav_temp1(zebra);
            rightCong(zebra,10)= nav_temp; % Straight_face
            rightCong(zebra,11)= arrowSize; % Size for the image
        end
        rightIncong = ~contains(rightDir_faces, rightCong_intact, 'IgnoreCase',true);
        rightIncong = rightDir_faces(rightIncong); % the target faces that will be incongruent.
        nav_temp2 = rightIncong; 
        % Let's create right-directed incongruent rows.
        for zebra2=1:length(rightIncong)
            rightIncong(zebra2,1)= rightArrow;
            rightIncong(zebra2,2)= leftArrow;
            rightIncong(zebra2,3)= leftArrow;
            rightIncong(zebra2,4)= 7; % stimNum
            rightIncong(zebra2,5)= 0; % congruent?
            rightIncong(zebra2,6)= 'right'; %target
            rightIncong(zebra2,7)= '[0,0]'; % Center image Location on the screen for the Psychopy
            rightIncong(zebra2,8)= first_rightFlanker_location; % Right image Location on the screen for the Psychopy
            rightIncong(zebra2,9)= second_rightFlanker_location; % Left image Location on the screen for the Psychopy
            nav_temp = nav_temp2(zebra2);
            rightIncong(zebra2,10)= nav_temp; % Straight_face
            rightIncong(zebra2,11)= arrowSize; % Size for the image
        end

        leftCong = randsample(leftDir_faces, 20/4); % Congruent faces.
        leftCong_intact = leftCong; % We need this for the next step.
        nav_temp3 = leftCong;
        % Let's create left-directed congruent rows.
        for zebra3=1:length(leftCong)
            leftCong(zebra3,1)= leftArrow;
            leftCong(zebra3,2)= leftArrow;
            leftCong(zebra3,3)= leftArrow;
            leftCong(zebra3,4)= 6; % stimNum
            leftCong(zebra3,5)= 1; % congruent?
            leftCong(zebra3,6)= 'left'; %target
            leftCong(zebra3,7)= '[0,0]'; % Center image Location on the screen for the Psychopy
            leftCong(zebra3,8)= first_rightFlanker_location; % Right image Location on the screen for the Psychopy
            leftCong(zebra3,9)= second_rightFlanker_location; % Left image Location on the screen for the Psychopy
            nav_temp = nav_temp3(zebra3);
            leftCong(zebra3,10)= nav_temp; % Straight_face
            leftCong(zebra3,11)= arrowSize; % Size for the image
        end
        leftIncong = ~contains(leftDir_faces, leftCong_intact, 'IgnoreCase',true);
        leftIncong = leftDir_faces(leftIncong); % the target faces that will be incongruent.
        nav_temp4 = leftIncong;
        % Let's create left-directed incongruent rows.
        for zebra4=1:length(leftIncong)
            leftIncong(zebra4,1)= leftArrow;
            leftIncong(zebra4,2)= rightArrow;
            leftIncong(zebra4,3)= rightArrow;
            leftIncong(zebra4,4)= 8; % stimNum
            leftIncong(zebra4,5)= 0; % congruent?
            leftIncong(zebra4,6)= 'left'; %target
            leftIncong(zebra4,7)= '[0,0]'; % Center image Location on the screen for the Psychopy
            leftIncong(zebra4,8)= first_rightFlanker_location; % Right image Location on the screen for the Psychopy
            leftIncong(zebra4,9)= second_rightFlanker_location; % Left image Location on the screen for the Psychopy
            nav_temp = nav_temp4(zebra4);
            leftIncong(zebra4,10)= nav_temp; % Straight_face
            leftIncong(zebra4,11)= arrowSize; % Size for the image
        end
        % Creating the main table that contains all we have created above for the 1st CSV file.
        mainTable = table([rightCong(:,1);rightIncong(:,1);leftCong(:,1);leftIncong(:,1)],[rightCong(:,2);rightIncong(:,2);leftCong(:,2);leftIncong(:,2)],[rightCong(:,3);rightIncong(:,3);leftCong(:,3);leftIncong(:,3)],[rightCong(:,4);rightIncong(:,4);leftCong(:,4);leftIncong(:,4)],[rightCong(:,5);rightIncong(:,5);leftCong(:,5);leftIncong(:,5)],[rightCong(:,6);rightIncong(:,6);leftCong(:,6);leftIncong(:,6)],[rightCong(:,7);rightIncong(:,7);leftCong(:,7);leftIncong(:,7)],[rightCong(:,8);rightIncong(:,8);leftCong(:,8);leftIncong(:,8)],[rightCong(:,9);rightIncong(:,9);leftCong(:,9);leftIncong(:,9)],[rightCong(:,10);rightIncong(:,10);leftCong(:,10);leftIncong(:,10)],[rightCong(:,11);rightIncong(:,11);leftCong(:,11);leftIncong(:,11)]);
        mainTable = table2array(mainTable);
        mainTable = mainTable(randperm(size(mainTable, 1)), : ); % Shuffle the data randomly by rows.
        mainTable = array2table(mainTable);
        mainTable.Properties.VariableNames = {'middleStim','leftStim','rightStim', 'stimNum','congruent','target','locationC','locationR','locationL', 'straightFace','imageSize'};
        fileName = append("a_halfV_trialTable_practice",".csv");
        writetable(mainTable, fileName)
        % let's update faces for the next round of this loop. So, it will not
        % have the 20 faces used in this loop.
        facesTemp = ~contains(faces, pracFaces_intact, 'IgnoreCase',true);
        faces = faces(facesTemp);
    else
        % The first 5 csv files will be used for the arrow flanker task in the alternative task.
        % We need to change the location of center and distractor arrows.
        % We need to rename faces to have those arrows.
        firstDat = randsample(faces, 32); % each block will have 32 trials.
        firstDat_intact = firstDat; % we need this for the 2nd csv file.
        % we need to randomly select half of the faces to be right directed and the
        % remaining half will be left-directed.
        rightDir_faces = randsample(firstDat, 32/2); % right-directed faces
        leftDir_faces = ~contains(firstDat, rightDir_faces, 'IgnoreCase',true);
        leftDir_faces = firstDat(leftDir_faces); % contains the remaining 192 faces that will be left-directed.
        
        % Randomly selecting half of the right-directed and left-directed faces to be congruent and the remaining half be incongruent.
        %there is going to be the table that has 6 columns; the 1st column is the target; the 2nd and 3rd are distractor faces; 4th column is stimNum; 5th column is congrunet?; 6th is the target.
        rightCong = randsample(rightDir_faces, 32/4); % Congruent faces.
        rightCong_intact = rightCong; % We need this for the next step.
        nav_temp1 = rightCong;
        % Let's create right-directed congruent rows.
        for zebra=1:length(rightCong)
            rightCong(zebra,1)= rightArrow;
            rightCong(zebra,2)= rightArrow;
            rightCong(zebra,3)= rightArrow;
            rightCong(zebra,4)= 5; % stimNum
            rightCong(zebra,5)= 1; %congruent?
            rightCong(zebra,6)= 'right'; %target
            rightCong(zebra,7)= '[0,0]'; % Center image Location on the screen for the Psychopy
            rightCong(zebra,8)= first_rightFlanker_location; % Right image Location on the screen for the Psychopy
            rightCong(zebra,9)= second_rightFlanker_location; % Left image Location on the screen for the Psychopy
            % in the lines below, I am creating a column consisting the
            % straight looking faces for the background.
            nav_temp = nav_temp1(zebra);
            rightCong(zebra,10)= nav_temp; % Straight_face
            rightCong(zebra,11)= arrowSize; % Size for the image

        end
        rightIncong = ~contains(rightDir_faces, rightCong_intact, 'IgnoreCase',true);
        rightIncong = rightDir_faces(rightIncong); % the target faces that will be incongruent.
        nav_temp2 = rightIncong; 
        % Let's create right-directed incongruent rows.
        for zebra2=1:length(rightIncong)
            rightIncong(zebra2,1)= rightArrow;
            rightIncong(zebra2,2)= leftArrow;
            rightIncong(zebra2,3)= leftArrow;
            rightIncong(zebra2,4)= 7; % stimNum
            rightIncong(zebra2,5)= 0; % congruent?
            rightIncong(zebra2,6)= 'right'; %target
            rightIncong(zebra2,7)= '[0,0]'; % Center image Location on the screen for the Psychopy
            rightIncong(zebra2,8)= first_rightFlanker_location; % Right image Location on the screen for the Psychopy
            rightIncong(zebra2,9)= second_rightFlanker_location; % Left image Location on the screen for the Psychopy
            nav_temp = nav_temp2(zebra2);
            rightIncong(zebra2,10)= nav_temp; % Straight_face
            rightIncong(zebra2,11)= arrowSize; % Size for the image
        end

        leftCong = randsample(leftDir_faces, 32/4); % Congruent faces.
        leftCong_intact = leftCong; % We need this for the next step.
        nav_temp3 = leftCong;
        % Let's create left-directed congruent rows.
        for zebra3=1:length(leftCong)
            leftCong(zebra3,1)= leftArrow;
            leftCong(zebra3,2)= leftArrow;
            leftCong(zebra3,3)= leftArrow;
            leftCong(zebra3,4)= 6; % stimNum
            leftCong(zebra3,5)= 1; % congruent?
            leftCong(zebra3,6)= 'left'; %target
            leftCong(zebra3,7)= '[0,0]'; % Center image Location on the screen for the Psychopy
            leftCong(zebra3,8)= first_rightFlanker_location; % Right image Location on the screen for the Psychopy
            leftCong(zebra3,9)= second_rightFlanker_location; % Left image Location on the screen for the Psychopy
            nav_temp = nav_temp3(zebra3);
            leftCong(zebra3,10)= nav_temp; % Straight_face
            leftCong(zebra3,11)= arrowSize; % Size for the image
        end
        leftIncong = ~contains(leftDir_faces, leftCong_intact, 'IgnoreCase',true);
        leftIncong = leftDir_faces(leftIncong); % the target faces that will be incongruent.
        nav_temp4 = leftIncong;
        % Let's create left-directed incongruent rows.
        for zebra4=1:length(leftIncong)
            leftIncong(zebra4,1)= leftArrow;
            leftIncong(zebra4,2)= rightArrow;
            leftIncong(zebra4,3)= rightArrow;
            leftIncong(zebra4,4)= 8; % stimNum
            leftIncong(zebra4,5)= 0; % congruent?
            leftIncong(zebra4,6)= 'left'; %target
            leftIncong(zebra4,7)= '[0,0]'; % Center image Location on the screen for the Psychopy
            leftIncong(zebra4,8)= first_rightFlanker_location; % Right image Location on the screen for the Psychopy
            leftIncong(zebra4,9)= second_rightFlanker_location; % Left image Location on the screen for the Psychopy
            nav_temp = nav_temp4(zebra4);
            leftIncong(zebra4,10)= nav_temp; % Straight_face
            leftIncong(zebra4,11)= arrowSize; % Size for the image
        end
        % Creating the main table that contains all we have created above for the 1st CSV file.
        mainTable = table([rightCong(:,1);rightIncong(:,1);leftCong(:,1);leftIncong(:,1)],[rightCong(:,2);rightIncong(:,2);leftCong(:,2);leftIncong(:,2)],[rightCong(:,3);rightIncong(:,3);leftCong(:,3);leftIncong(:,3)],[rightCong(:,4);rightIncong(:,4);leftCong(:,4);leftIncong(:,4)],[rightCong(:,5);rightIncong(:,5);leftCong(:,5);leftIncong(:,5)],[rightCong(:,6);rightIncong(:,6);leftCong(:,6);leftIncong(:,6)],[rightCong(:,7);rightIncong(:,7);leftCong(:,7);leftIncong(:,7)],[rightCong(:,8);rightIncong(:,8);leftCong(:,8);leftIncong(:,8)],[rightCong(:,9);rightIncong(:,9);leftCong(:,9);leftIncong(:,9)],[rightCong(:,10);rightIncong(:,10);leftCong(:,10);leftIncong(:,10)],[rightCong(:,11);rightIncong(:,11);leftCong(:,11);leftIncong(:,11)]);
        mainTable = table2array(mainTable);
        mainTable = mainTable(randperm(size(mainTable, 1)), : ); % Shuffle the data randomly by rows.
        mainTable = array2table(mainTable);
        mainTable.Properties.VariableNames = {'middleStim','leftStim','rightStim', 'stimNum','congruent','target','locationC','locationR','locationL', 'straightFace','imageSize'};
        fileName = append("a_halfV_trialTable_",string(jaguar),".csv");
        writetable(mainTable, fileName)
        % let's update faces for the next round of this loop. So, it will not
        % have the 32 faces used in this loop.
        facesTemp = ~contains(faces, firstDat_intact, 'IgnoreCase',true);
        faces = faces(facesTemp);
    end
end
includeFaces_for_surprise = ~contains(trialFaces_for_surprise, pracFaces_intact, 'IgnoreCase',true); % Exclude the trials shown in the practice block.
trialFaces_for_surprise = trialFaces_for_surprise(includeFaces_for_surprise); % Includes the list of faces that are shown in the main 12 blocks.
% We need to show faces that are looking straight forward during the
% surprise memory task. So, we change these trialFaces to be looking
% straight forward.
for Soubatan2=1:length(trialFaces_for_surprise)
            trialFaces_for_surprise(Soubatan2) = strrep(trialFaces_for_surprise(Soubatan2),'_45','_0'); % renaming to have looking straight forward faces.
end
for abrak2=1:length(trialFaces_for_surprise) % adding a second column that mentions  if this is a new face (i.e., foil). For old faces, we have "0" as true.
    trialFaces_for_surprise(abrak2,2) = '0'; % new?
end
surpriseTable = table([foilFaces(:,1);trialFaces_for_surprise(:,1)],[foilFaces(:,2);trialFaces_for_surprise(:,2)]);
surpriseTable = table2array(surpriseTable);
surpriseTable = surpriseTable(randperm(size(surpriseTable, 1)), : ); % Shuffle the data randomly by rows.
surpriseTable = array2table(surpriseTable);
surpriseTable.Properties.VariableNames = {'surpriseFaces', 'new'};
writetable(surpriseTable(1:height(surpriseTable)/2,:), "a_halfV_surpriseTable1.csv")
writetable(surpriseTable((height(surpriseTable)/2)+1:end,:), "a_halfV_surpriseTable2.csv")

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
friendlyTable = table([trialFaces_for_surprise(:,1)],[trialFaces_for_surprise(:,2)]);
friendlyTable = table2array(friendlyTable);
friendlyTable = friendlyTable(randperm(size(friendlyTable, 1)), : ); % Shuffle the data randomly by rows.
friendlyTable = array2table(friendlyTable);
friendlyTable.Properties.VariableNames = {'surpriseFaces', 'new'};
writetable(friendlyTable(1:height(friendlyTable)/2,:), "a_halfV_friendlyTable1.csv")
writetable(friendlyTable((height(friendlyTable)/2)+1:end,:), "a_halfV_friendlyTable2.csv")
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


