#!/bin/bash
# A script to generate a job and submit for some R script

# USAGE: sh /home/data/NDClab/tools/lab-devOps/scripts/rrun.sh <file_name>.R
usage() { echo "Usage: sh rmat.sh [--parallel] <file_name>" 1>&2; exit 1; }

file_name=$1

if [[ ! -f "${file_name}.m" ]]; then
    echo "File $file_name does not exist or is not a matlab file." 
    exit 9999 
fi

# Generate sub file
sub_file="${file_name}.sub"

if [[ $* == *--parallel* ]]; then
    exec_line="matlab -nodisplay -nosplash -r ${file_name}"
    cpus="4"
else
    exec_line="matlab -singleCompThread -nodisplay -nosplash -r ${file_name}"
    cpus="1"
fi

echo -e  "#!/bin/bash
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=01:00:00
#SBATCH --cpus-per-task=${cpus} \\n
module load matlab-2018b
${exec_line}" >| $sub_file

# Submit sub file
echo "Submitting $sub_file as job"
sbatch $sub_file

# Give confirmation message and instructions
echo -e "Job submitted. To rerun again, execute \\'sbatch $sub_file \\'"
