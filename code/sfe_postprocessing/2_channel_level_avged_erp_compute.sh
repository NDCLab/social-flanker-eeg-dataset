#!/bin/bash



#SBATCH --job-name=Yanbin_sfe_step22         # create a short name for your job
#SBATCH --nodes=1                # node count
#SBATCH --ntasks=1               # total number of tasks across all nodes
#SBATCH --cpus-per-task=8
#SBATCH --time=1000:00:00          # total run time limit (HH:MM:SS)
#SBATCH --mail-type=end          # send email when job ends
#SBATCH --mail-user=yniu@fiu.edu

module load matlab-2021b
pwd; hostname; date


matlab -nodisplay < 2_channel_level_avged_erp_compute.m