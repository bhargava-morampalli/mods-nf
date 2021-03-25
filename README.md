# mods-nf
Nextflow pipeline for RNA modifcation identification using Tombo and nanoDoc


### Steps in this Nextflow pipeline

1. Convert fastq file to fasta file using *seqkit*
2. Convert fasta file to a text file containing all the read IDs using *seqkit*
3. Extract the corresponding fast5 files using read IDs in the text file with software *ont-fast5-api* (fast5_subset option)
4. Basecall these separated fast5 files using the *Guppy basecaller* from Oxford Nanopore Technologies with *--fast5_out* option
5. Convert these multi-fast5 files (from basecalling) into single-fast5 files uing *ont-fast5-api* (multi_to_single_fast5 option)
6. Resquiggle these single fast5 files against the reference assembly using *Tombo* software from Oxford Nanopore Technologies
7. Finally use *nanoDoc* to pre-process the tombo-resquiggled fast5s to produce parquet files - required for the final step with *nanoDoc*

