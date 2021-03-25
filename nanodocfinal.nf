nextflow.enable.dsl=2

/*
 * pipeline input parameters
 */

params.fast5s = "/scratch/bhargava/nanopore/20210210-dRNA-G9-IVT-BRM/fast5"
params.reference = "/data/bhargava/reference_files/G9/G9prokka/sc1.1.G9.fa"
params.outdir = "results"




process nanodocpreprocess {

    publishDir params.nanodocpreprocess, mode:'copy'

    input:
    path reference
    path nanodoc_ivt
    path nanodoc_native
    
                                                                                                                                                             
    output:
    path "*.pq"
    path "index.txt"

    script:
    """
    source ~/nanoDoc/src/venv3/bin/activate
    python /home/bhargavam/nanoDoc/src/nanoDoc.py formatfile -i $singlefast5s -o ./ -r $reference -t 50
    python /home/bhargavam/nanoDoc/src/nanoDoc.py analysis -w /home/bhargavam/nanoDoc/weight5mer/ -p /home/bhargavam/nanoDoc/param20.txt -r $reference -rraw $nanodoc_ivt -traw $nanodoc_native -o $textfile -s $start -e $end

    deactivate
    """
}