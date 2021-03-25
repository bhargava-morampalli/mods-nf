#!/bin/bash -ue
guppy_basecaller --input_path individualfast5s --save_path ./ --recursive --flowcell FLO-MIN106 --kit SQK-RNA002 --reverse_sequence true --u_substitution true --fast5_out -x "cuda:0"
guppy_basecaller --version &> v_guppy.txt
