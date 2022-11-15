% This script goes through all the folders and sub-folders of the chicago
% face database and move neutral faces to the destination folder. 
% This script is written by: Kianoosh Hosseini @NDClab @FIU (May 2022).

clear % clear matlab workspace
clc % clear matlab command window

main_dir = '/Users/khoss005/Library/CloudStorage/OneDrive-FloridaInternationalUniversity/from_Google/Takeout/Drive/PhD/Memory_for_Error/Chicago_face_database/CFD Version 3.0/Images';
destination_dir = '/Users/khoss005/Library/CloudStorage/OneDrive-FloridaInternationalUniversity/from_Google/Takeout/Drive/PhD/Memory_for_Error/Chicago_face_database/CFD Version 3.0/Images/chicagoFaces/neutral'; 
cfd_data_location = [main_dir filesep 'CFD']; % Location of stored CFD faces 
cfd_mr_data_location = [main_dir filesep 'CFD-MR']; % Location of stored faces
cfd_india_Data_location = [main_dir filesep 'CFD-INDIA']; % Location of stored faces

% Note: all neutral faces from all the three collections will be moved to a
% similar destination, i.e., neutral folder.

cd(cfd_data_location)
cfd_data_file_lists = dir; 
cfd_data_file_lists = cfd_data_file_lists(~ismember({cfd_data_file_lists.name},{'.', '..', '.DS_Store'}));
cfd_data_file_lists = {cfd_data_file_lists.name};
cfd_data_file_lists = string(cfd_data_file_lists);
%% Work on the CFD faces data and move neutral ones to the corresponding destination!
for lisar = 1:length(cfd_data_file_lists) 
    sub_dir = cfd_data_file_lists(lisar);
    sub_dir = convertStringsToChars(append(cfd_data_location,'/', sub_dir));
    cd(sub_dir)
    temp_face_list = dir;
    temp_face_list = temp_face_list(~ismember({temp_face_list.name},{'.', '..', '.DS_Store'}));
    temp_face_list = {temp_face_list.name};
    temp_face_list = string(temp_face_list);
    temp_face_pattern = '-N'; % specifies neutral faces.
    temp_face = contains(temp_face_list, temp_face_pattern, 'IgnoreCase',true);
    temp_face = temp_face_list(temp_face);
    for lisar2 =1:length(temp_face)
        the_face_to_be_moved = convertStringsToChars(temp_face(lisar2));
        the_face_to_be_moved = append(sub_dir,'/', the_face_to_be_moved);
        movefile(the_face_to_be_moved, destination_dir);
    end
end
%% Work on the CFD_MR faces data and move neutral ones to the corresponding destination!
cd(cfd_mr_data_location)
cfd_mr_data_file_lists = dir; 
cfd_mr_data_file_lists = cfd_mr_data_file_lists(~ismember({cfd_mr_data_file_lists.name},{'.', '..', '.DS_Store'}));
cfd_mr_data_file_lists = {cfd_mr_data_file_lists.name};
cfd_mr_data_file_lists = string(cfd_mr_data_file_lists);
temp_face_pattern = '-N'; % specifies neutral faces.
temp_face = contains(cfd_mr_data_file_lists, temp_face_pattern, 'IgnoreCase',true);
temp_face = cfd_mr_data_file_lists(temp_face);

for lisar3 =1:length(temp_face)
        the_face_to_be_moved = convertStringsToChars(temp_face(lisar3));
        the_face_to_be_moved = append(cfd_mr_data_location,'/', the_face_to_be_moved);
        movefile(the_face_to_be_moved, destination_dir);
end




%% Work on the CFD_INDIA faces data and move neutral ones to the corresponding destination!
cd(cfd_india_Data_location)
cfd_in_data_file_lists = dir; 
cfd_in_data_file_lists = cfd_in_data_file_lists(~ismember({cfd_in_data_file_lists.name},{'.', '..', '.DS_Store'}));
cfd_in_data_file_lists = {cfd_in_data_file_lists.name};
cfd_in_data_file_lists = string(cfd_in_data_file_lists);
temp_face_pattern = '-N'; % specifies neutral faces.
temp_face = contains(cfd_in_data_file_lists, temp_face_pattern, 'IgnoreCase',true);
temp_face = cfd_in_data_file_lists(temp_face);

for lisar4 =1:length(temp_face)
        the_face_to_be_moved = convertStringsToChars(temp_face(lisar4));
        the_face_to_be_moved = append(cfd_india_Data_location,'/', the_face_to_be_moved);
        movefile(the_face_to_be_moved, destination_dir);
end





