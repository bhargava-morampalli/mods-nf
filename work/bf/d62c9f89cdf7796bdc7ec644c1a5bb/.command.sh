#!/bin/bash -ue
source ~/nanoDoc/src/venv3/bin/activate
python /home/bhargavam/nanoDoc/src/nanoDoc.py formatfile -i single_fast5s -o ./ -r sc1.1.G9.fa -t 50
deactivate
