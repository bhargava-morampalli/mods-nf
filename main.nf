nextflow.enable.dsl=2

/*
 * pipeline input parameters
 */

params.reads = "$baseDir/data/*.fastq"
params.fast5s = "/scratch/bhargava/nanopore/20210210-dRNA-G9-IVT-BRM/fast5"
params.reference = "/data/bhargava/reference_files/G9/G9prokka/sc1.1.G9.fa"
params.outdir = "results"
params.fasta = "results/fastafiles"
params.textfiles = "results/textfiles"
params.individualfast5s = "results/individualfast5s/"
params.guppy = "results/guppy/"
params.single_fast5s = "results/single_fast5s/"
params.nanodocpreprocess = "results/nanodocpreprocess"

Channel
    .fromPath(params.fast5s)
    .set {fast5inputpath}

Channel
    .fromPath(params.individualfast5s)
    .set {guppyinputpath}
Channel
    .fromPath(params.guppy)
    .set {multitosingleinputpath}

Channel
    .fromPath(params.reference)
    .set {reference}

Channel
    .fromPath(params.single_fast5s)
    .set {singlefast5s}


process fastqtofasta {

    publishDir params.fasta, mode:'copy', pattern: '*.fasta'

    input:
    path reads

    output:
    path "${reads.baseName}.fasta", emit: fasta

    script:

    """
    seqkit fq2fa $reads -o ${reads.baseName}.fasta
    """
}

process fastatotxt {

    publishDir params.textfiles, mode:'copy'

    input:
    path fasta

    output:
    path "${fasta.baseName}.txt", emit: idtextfile
    val true, emit: textdone_ch


    script:

    """
    seqkit seq $fasta -n -i > ${fasta.baseName}.txt
    """
}


process fast5subset {

    publishDir params.individualfast5s, mode:'copy'

    input:
    path fast5inputpath
    path idtextfile
    val flag

    output:
    path "*.fast5", emit: subsetfast5s
    path "filename_mapping.txt"
    val true, emit: subsetdone_ch

    script:

    """
    fast5_subset -i $fast5inputpath -s ./ -l $idtextfile -f ${idtextfile.baseName}- --recursive
    """
}

process basecalling {

    publishDir params.guppy, mode:'copy'

    input:
    path guppyinputpath
    val flag

    output:

    path "*.txt"
    path "workspace/*.fast5", emit: basecalledfast5s
    path "*.js"
    path "*.log"
    path "v_guppy.txt"
    val true, emit: done_ch

    script:

    """
    guppy_basecaller --input_path $guppyinputpath --save_path ./ --recursive --flowcell FLO-MIN106 --kit SQK-RNA002 --reverse_sequence true --u_substitution true --fast5_out -x "cuda:0"
    guppy_basecaller --version &> v_guppy.txt
    """
}

process multitosingle {

    publishDir params.single_fast5s, mode:'copy'

    input:
    path multitosingleinputpath
    val flag

    output:
    path "*"
    path "filename_mapping.txt"
    val true, emit: multidone_ch

    script:

    """
    multi_to_single_fast5 --input_path $multitosingleinputpath --save_path ./ --recursive
    """
}

process tomboresquiggle {

    publishDir params.single_fast5s, mode:'copy'

    input:
    path singlefast5s
    path reference
    val flag
                                                                                                                                                             
    output:
    path "*", optional: true
    val true, emit: tombodone_ch

    script:
    """
    tombo resquiggle $singlefast5s $reference --rna --processes 50 --overwrite --num-most-common-errors 5
    """
}

process nanodocpreprocess {

    publishDir params.nanodocpreprocess, mode:'copy'

    input:
    path singlefast5s
    path reference
    val flag
                                                                                                                                                             
    output:
    path "*.pq"
    path "index.txt"

    script:
    """
    source ~/nanoDoc/src/venv3/bin/activate
    python /home/bhargavam/nanoDoc/src/nanoDoc.py formatfile -i $singlefast5s -o ./ -r $reference -t 50
    deactivate
    """
}


workflow {

    Channel
    .fromPath(params.reads, checkIfExists: true)
    .set { reads }

    fastqtofasta (reads)

    fastatotxt (fastqtofasta.out)
    
    fast5subset (fast5inputpath, fastatotxt.out.idtextfile, fastatotxt.out.textdone_ch)
    
    basecalling (guppyinputpath, fast5subset.out.subsetdone_ch)
    
    multitosingle (multitosingleinputpath, basecalling.out.done_ch)
    
    tomboresquiggle (singlefast5s, reference, multitosingle.out.multidone_ch)

    nanodocpreprocess (singlefast5s, reference, tomboresquiggle.out.tombodone_ch)

}

workflow.onComplete {
        log.info ( workflow.success ? "\nDone! Workflow complete\n" : "Oops .. something went wrong" )
}
