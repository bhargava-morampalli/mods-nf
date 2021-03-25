[
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 10
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 10,
                "mean": 9.8964147567749,
                "sum": 98.9641494750977
            },
            "read_len_events_sum_temp": 53163,
            "seq_len_bases_dist_temp": [
                {
                    "count": 10,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 10,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 3,
                    "length": 2000.0
                },
                {
                    "count": 2,
                    "length": 3000.0
                },
                {
                    "count": 1,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 7000.0
                },
                {
                    "count": 1,
                    "length": 9000.0
                },
                {
                    "count": 1,
                    "length": 16000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 10,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 10,
                "mean": 92.8336563110352,
                "sum": 928.336547851562
            },
            "strand_sd_pa": {
                "count": 10,
                "mean": 13.0189256668091,
                "sum": 130.189254760742
            }
        },
        "channel_count": 10,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 3219.15161132812,
        "levels_sums": {
            "count": 10,
            "mean": 229.282836914062,
            "open_pore_level_sum": 2292.82836914062
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 10,
        "reads_per_channel_dist": [
            {
                "channel": 9,
                "count": 1
            },
            {
                "channel": 14,
                "count": 1
            },
            {
                "channel": 16,
                "count": 1
            },
            {
                "channel": 95,
                "count": 1
            },
            {
                "channel": 132,
                "count": 1
            },
            {
                "channel": 220,
                "count": 1
            },
            {
                "channel": 252,
                "count": 1
            },
            {
                "channel": 286,
                "count": 1
            },
            {
                "channel": 334,
                "count": 1
            },
            {
                "channel": 436,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "27b0594e-0ada-4e5c-ab20-ac19163e2b79",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2,
                "pass": 7
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                },
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                },
                {
                    "count": 1,
                    "mean_qscore": 13.5
                }
            ],
            "qscore_sum_temp": {
                "count": 9,
                "mean": 10.1645812988281,
                "sum": 91.4812316894531
            },
            "read_len_events_sum_temp": 66757,
            "seq_len_bases_dist_temp": [
                {
                    "count": 9,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 9,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 3000.0
                },
                {
                    "count": 1,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 5000.0
                },
                {
                    "count": 2,
                    "length": 7000.0
                },
                {
                    "count": 1,
                    "length": 8000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 14000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 9,
                "mean": 94.2442855834961,
                "sum": 848.198547363281
            },
            "strand_sd_pa": {
                "count": 9,
                "mean": 13.6375370025635,
                "sum": 122.737831115723
            }
        },
        "channel_count": 9,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 7010.4716796875,
        "levels_sums": {
            "count": 9,
            "mean": 186.727981567383,
            "open_pore_level_sum": 1680.55187988281
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 9,
        "reads_per_channel_dist": [
            {
                "channel": 15,
                "count": 1
            },
            {
                "channel": 27,
                "count": 1
            },
            {
                "channel": 191,
                "count": 1
            },
            {
                "channel": 206,
                "count": 1
            },
            {
                "channel": 245,
                "count": 1
            },
            {
                "channel": 261,
                "count": 1
            },
            {
                "channel": 372,
                "count": 1
            },
            {
                "channel": 454,
                "count": 1
            },
            {
                "channel": 475,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 2,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "8469d310-8d98-48b6-9264-9e55452d6bd4",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2,
                "pass": 8
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 6.5
                },
                {
                    "count": 1,
                    "mean_qscore": 7.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 3,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 10,
                "mean": 9.19491386413574,
                "sum": 91.9491348266602
            },
            "read_len_events_sum_temp": 53121,
            "seq_len_bases_dist_temp": [
                {
                    "count": 10,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 10,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 3,
                    "length": 2000.0
                },
                {
                    "count": 2,
                    "length": 3000.0
                },
                {
                    "count": 1,
                    "length": 5000.0
                },
                {
                    "count": 2,
                    "length": 8000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 10,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 10,
                "mean": 93.9865264892578,
                "sum": 939.865295410156
            },
            "strand_sd_pa": {
                "count": 10,
                "mean": 12.9345703125,
                "sum": 129.345703125
            }
        },
        "channel_count": 10,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 10145.462890625,
        "levels_sums": {
            "count": 10,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 10,
        "reads_per_channel_dist": [
            {
                "channel": 27,
                "count": 1
            },
            {
                "channel": 222,
                "count": 1
            },
            {
                "channel": 229,
                "count": 1
            },
            {
                "channel": 251,
                "count": 1
            },
            {
                "channel": 281,
                "count": 1
            },
            {
                "channel": 312,
                "count": 1
            },
            {
                "channel": 423,
                "count": 1
            },
            {
                "channel": 438,
                "count": 1
            },
            {
                "channel": 488,
                "count": 1
            },
            {
                "channel": 499,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 3,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "f81bb0ab-c7c7-4aed-9af0-9b02d678ab07",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 14
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.0
                },
                {
                    "count": 2,
                    "mean_qscore": 7.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                },
                {
                    "count": 1,
                    "mean_qscore": 12.0
                },
                {
                    "count": 1,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 14,
                "mean": 10.2058038711548,
                "sum": 142.881256103516
            },
            "read_len_events_sum_temp": 82800,
            "seq_len_bases_dist_temp": [
                {
                    "count": 14,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 14,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 3,
                    "length": 2000.0
                },
                {
                    "count": 4,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 5000.0
                },
                {
                    "count": 1,
                    "length": 6000.0
                },
                {
                    "count": 2,
                    "length": 8000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 14,
                "mean": 95.312126159668,
                "sum": 1334.36975097656
            },
            "strand_sd_pa": {
                "count": 14,
                "mean": 13.0048666000366,
                "sum": 182.068130493164
            }
        },
        "channel_count": 14,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 14193.5234375,
        "levels_sums": {
            "count": 14,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 14,
        "reads_per_channel_dist": [
            {
                "channel": 24,
                "count": 1
            },
            {
                "channel": 27,
                "count": 1
            },
            {
                "channel": 36,
                "count": 1
            },
            {
                "channel": 37,
                "count": 1
            },
            {
                "channel": 164,
                "count": 1
            },
            {
                "channel": 174,
                "count": 1
            },
            {
                "channel": 333,
                "count": 1
            },
            {
                "channel": 363,
                "count": 1
            },
            {
                "channel": 400,
                "count": 1
            },
            {
                "channel": 404,
                "count": 1
            },
            {
                "channel": 421,
                "count": 1
            },
            {
                "channel": 438,
                "count": 1
            },
            {
                "channel": 506,
                "count": 1
            },
            {
                "channel": 509,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 4,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "45337a99-4ac4-42eb-87b5-7e4570ddd588",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 8
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 2,
                    "mean_qscore": 7.0
                },
                {
                    "count": 2,
                    "mean_qscore": 8.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 9,
                "mean": 8.89271926879883,
                "sum": 80.0344772338867
            },
            "read_len_events_sum_temp": 40117,
            "seq_len_bases_dist_temp": [
                {
                    "count": 9,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 9,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 2,
                    "length": 2000.0
                },
                {
                    "count": 3,
                    "length": 3000.0
                },
                {
                    "count": 1,
                    "length": 5000.0
                },
                {
                    "count": 1,
                    "length": 7000.0
                },
                {
                    "count": 1,
                    "length": 9000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 9,
                "mean": 97.6809997558594,
                "sum": 879.128967285156
            },
            "strand_sd_pa": {
                "count": 9,
                "mean": 12.7471132278442,
                "sum": 114.724021911621
            }
        },
        "channel_count": 9,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 17912.3671875,
        "levels_sums": {
            "count": 9,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 9,
        "reads_per_channel_dist": [
            {
                "channel": 33,
                "count": 1
            },
            {
                "channel": 43,
                "count": 1
            },
            {
                "channel": 97,
                "count": 1
            },
            {
                "channel": 100,
                "count": 1
            },
            {
                "channel": 166,
                "count": 1
            },
            {
                "channel": 190,
                "count": 1
            },
            {
                "channel": 191,
                "count": 1
            },
            {
                "channel": 380,
                "count": 1
            },
            {
                "channel": 444,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 5,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "2534951b-f113-40bc-b723-ea8cdeb9382a",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 6
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 6,
                "mean": 10.4138269424438,
                "sum": 62.4829635620117
            },
            "read_len_events_sum_temp": 39338,
            "seq_len_bases_dist_temp": [
                {
                    "count": 6,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 6,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 1,
                    "length": 2000.0
                },
                {
                    "count": 2,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 6,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 6,
                "mean": 98.087158203125,
                "sum": 588.52294921875
            },
            "strand_sd_pa": {
                "count": 6,
                "mean": 14.1764764785767,
                "sum": 85.0588607788086
            }
        },
        "channel_count": 6,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 20010.03515625,
        "levels_sums": {
            "count": 6,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 6,
        "reads_per_channel_dist": [
            {
                "channel": 82,
                "count": 1
            },
            {
                "channel": 204,
                "count": 1
            },
            {
                "channel": 205,
                "count": 1
            },
            {
                "channel": 276,
                "count": 1
            },
            {
                "channel": 284,
                "count": 1
            },
            {
                "channel": 312,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 6,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "9fb115f3-b8fb-4980-952f-ce252d021583",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2,
                "pass": 5
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                },
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 7,
                "mean": 9.07226467132568,
                "sum": 63.5058555603027
            },
            "read_len_events_sum_temp": 53118,
            "seq_len_bases_dist_temp": [
                {
                    "count": 7,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 7,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 1,
                    "length": 2000.0
                },
                {
                    "count": 1,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 5000.0
                },
                {
                    "count": 1,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 14000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 7,
                "mean": 98.0135116577148,
                "sum": 686.094604492188
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 13.0751647949219,
                "sum": 91.5261535644531
            }
        },
        "channel_count": 7,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 25116.578125,
        "levels_sums": {
            "count": 7,
            "mean": 234.952026367188,
            "open_pore_level_sum": 1644.66418457031
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 7,
        "reads_per_channel_dist": [
            {
                "channel": 30,
                "count": 1
            },
            {
                "channel": 194,
                "count": 1
            },
            {
                "channel": 240,
                "count": 1
            },
            {
                "channel": 334,
                "count": 1
            },
            {
                "channel": 428,
                "count": 1
            },
            {
                "channel": 443,
                "count": 1
            },
            {
                "channel": 500,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 7,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "b7696f00-6953-41cc-9bd4-69f32d427387",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 4
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.5
                },
                {
                    "count": 1,
                    "mean_qscore": 7.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                },
                {
                    "count": 1,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 5,
                "mean": 9.1069278717041,
                "sum": 45.5346412658691
            },
            "read_len_events_sum_temp": 29406,
            "seq_len_bases_dist_temp": [
                {
                    "count": 5,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 5,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 3000.0
                },
                {
                    "count": 2,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 5,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 5,
                "mean": 93.8318786621094,
                "sum": 469.159393310547
            },
            "strand_sd_pa": {
                "count": 5,
                "mean": 12.8783340454102,
                "sum": 64.3916702270508
            }
        },
        "channel_count": 5,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 28607.62890625,
        "levels_sums": {
            "count": 5,
            "mean": 237.451126098633,
            "open_pore_level_sum": 1187.25561523438
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 5,
        "reads_per_channel_dist": [
            {
                "channel": 61,
                "count": 1
            },
            {
                "channel": 86,
                "count": 1
            },
            {
                "channel": 152,
                "count": 1
            },
            {
                "channel": 357,
                "count": 1
            },
            {
                "channel": 381,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 8,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "f7c726b3-1c54-4a0d-a642-8da8d8042d4e",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.5
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 7.24576282501221,
                "sum": 14.4915256500244
            },
            "read_len_events_sum_temp": 10873,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 6000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 98.7666931152344,
                "sum": 197.533386230469
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 12.2316045761108,
                "sum": 24.4632091522217
            }
        },
        "channel_count": 2,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 29810.794921875,
        "levels_sums": {
            "count": 2,
            "mean": 184.324493408203,
            "open_pore_level_sum": 368.648986816406
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 182,
                "count": 1
            },
            {
                "channel": 449,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 9,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "b53e8cf5-ade5-44cc-9bbb-c6472fc20335",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 3
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 2,
                    "mean_qscore": 11.5
                },
                {
                    "count": 1,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 4,
                "mean": 10.7417497634888,
                "sum": 42.9669990539551
            },
            "read_len_events_sum_temp": 14032,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 1000.0
                },
                {
                    "count": 1,
                    "length": 3000.0
                },
                {
                    "count": 1,
                    "length": 6000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 4,
                "mean": 97.7825393676758,
                "sum": 391.130157470703
            },
            "strand_sd_pa": {
                "count": 4,
                "mean": 14.6568365097046,
                "sum": 58.6273460388184
            }
        },
        "channel_count": 4,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 34989.59765625,
        "levels_sums": {
            "count": 4,
            "mean": 230.697891235352,
            "open_pore_level_sum": 922.791564941406
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 4,
        "reads_per_channel_dist": [
            {
                "channel": 1,
                "count": 1
            },
            {
                "channel": 10,
                "count": 1
            },
            {
                "channel": 496,
                "count": 1
            },
            {
                "channel": 503,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 10,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "e913ebd1-e7c3-4f6f-9353-9e400cbb7f4a",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 8
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 2,
                    "mean_qscore": 7.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 3,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 9,
                "mean": 9.98317432403564,
                "sum": 89.8485717773438
            },
            "read_len_events_sum_temp": 46356,
            "seq_len_bases_dist_temp": [
                {
                    "count": 9,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 9,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 2000.0
                },
                {
                    "count": 3,
                    "length": 3000.0
                },
                {
                    "count": 1,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 5000.0
                },
                {
                    "count": 1,
                    "length": 6000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 9,
                "mean": 102.07063293457,
                "sum": 918.635681152344
            },
            "strand_sd_pa": {
                "count": 9,
                "mean": 13.2313785552979,
                "sum": 119.082405090332
            }
        },
        "channel_count": 9,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 39359.20703125,
        "levels_sums": {
            "count": 9,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 9,
        "reads_per_channel_dist": [
            {
                "channel": 64,
                "count": 1
            },
            {
                "channel": 265,
                "count": 1
            },
            {
                "channel": 305,
                "count": 1
            },
            {
                "channel": 331,
                "count": 1
            },
            {
                "channel": 337,
                "count": 1
            },
            {
                "channel": 361,
                "count": 1
            },
            {
                "channel": 367,
                "count": 1
            },
            {
                "channel": 379,
                "count": 1
            },
            {
                "channel": 438,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 11,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "f3081461-0eb2-4998-8408-e8eb866ba38c",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2,
                "pass": 5
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.5
                },
                {
                    "count": 1,
                    "mean_qscore": 6.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.0
                },
                {
                    "count": 2,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 7,
                "mean": 9.32941341400146,
                "sum": 65.3058929443359
            },
            "read_len_events_sum_temp": 68738,
            "seq_len_bases_dist_temp": [
                {
                    "count": 7,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 7,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 1,
                    "length": 3000.0
                },
                {
                    "count": 1,
                    "length": 5000.0
                },
                {
                    "count": 2,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 1,
                    "length": 17000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 7,
                "mean": 100.785209655762,
                "sum": 705.496459960938
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 14.4409265518188,
                "sum": 101.086486816406
            }
        },
        "channel_count": 7,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 42153.15625,
        "levels_sums": {
            "count": 7,
            "mean": 236.960601806641,
            "open_pore_level_sum": 1658.72424316406
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 7,
        "reads_per_channel_dist": [
            {
                "channel": 89,
                "count": 1
            },
            {
                "channel": 129,
                "count": 1
            },
            {
                "channel": 178,
                "count": 1
            },
            {
                "channel": 210,
                "count": 1
            },
            {
                "channel": 242,
                "count": 1
            },
            {
                "channel": 366,
                "count": 1
            },
            {
                "channel": 384,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 12,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "b8d71531-1d2f-4456-9b2a-bc5f19e84f45",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 12.0
                }
            ],
            "qscore_sum_temp": {
                "count": 3,
                "mean": 9.89807987213135,
                "sum": 29.6942405700684
            },
            "read_len_events_sum_temp": 24674,
            "seq_len_bases_dist_temp": [
                {
                    "count": 3,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 3,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 3000.0
                },
                {
                    "count": 1,
                    "length": 8000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 3,
                "mean": 95.1815567016602,
                "sum": 285.544677734375
            },
            "strand_sd_pa": {
                "count": 3,
                "mean": 13.5438070297241,
                "sum": 40.631420135498
            }
        },
        "channel_count": 3,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 46543.75390625,
        "levels_sums": {
            "count": 3,
            "mean": 174.581436157227,
            "open_pore_level_sum": 523.744323730469
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 3,
        "reads_per_channel_dist": [
            {
                "channel": 178,
                "count": 1
            },
            {
                "channel": 420,
                "count": 1
            },
            {
                "channel": 484,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 13,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "d44c8791-669a-462d-a027-9ff87dc6ef0c",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2,
                "pass": 5
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 5.5
                },
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 12.5
                }
            ],
            "qscore_sum_temp": {
                "count": 7,
                "mean": 9.01554107666016,
                "sum": 63.1087875366211
            },
            "read_len_events_sum_temp": 32634,
            "seq_len_bases_dist_temp": [
                {
                    "count": 7,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 7,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 1000.0
                },
                {
                    "count": 2,
                    "length": 2000.0
                },
                {
                    "count": 1,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 5000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 7,
                "mean": 98.7566528320312,
                "sum": 691.296569824219
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 12.4525365829468,
                "sum": 87.1677551269531
            }
        },
        "channel_count": 7,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 49916.3671875,
        "levels_sums": {
            "count": 7,
            "mean": 254.630325317383,
            "open_pore_level_sum": 1782.41223144531
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 7,
        "reads_per_channel_dist": [
            {
                "channel": 6,
                "count": 1
            },
            {
                "channel": 7,
                "count": 1
            },
            {
                "channel": 234,
                "count": 1
            },
            {
                "channel": 334,
                "count": 1
            },
            {
                "channel": 346,
                "count": 1
            },
            {
                "channel": 355,
                "count": 1
            },
            {
                "channel": 358,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 14,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "986dce1a-205b-4048-8877-474062efb364",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 7
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 7.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 7,
                "mean": 9.7660436630249,
                "sum": 68.3623046875
            },
            "read_len_events_sum_temp": 45029,
            "seq_len_bases_dist_temp": [
                {
                    "count": 7,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 7,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 1000.0
                },
                {
                    "count": 1,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 6000.0
                },
                {
                    "count": 1,
                    "length": 8000.0
                },
                {
                    "count": 1,
                    "length": 10000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 7,
                "mean": 96.6477508544922,
                "sum": 676.534240722656
            },
            "strand_sd_pa": {
                "count": 7,
                "mean": 13.9388074874878,
                "sum": 97.5716552734375
            }
        },
        "channel_count": 7,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 52937.265625,
        "levels_sums": {
            "count": 7,
            "mean": 191.042343139648,
            "open_pore_level_sum": 1337.29638671875
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 7,
        "reads_per_channel_dist": [
            {
                "channel": 245,
                "count": 1
            },
            {
                "channel": 345,
                "count": 1
            },
            {
                "channel": 358,
                "count": 1
            },
            {
                "channel": 426,
                "count": 1
            },
            {
                "channel": 460,
                "count": 1
            },
            {
                "channel": 467,
                "count": 1
            },
            {
                "channel": 500,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 15,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "dffdeb06-569a-4a2a-80fe-d0ec7c1cb478",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 6.29705667495728,
                "sum": 6.29705667495728
            },
            "read_len_events_sum_temp": 4617,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 4000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 103.757751464844,
                "sum": 103.757751464844
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 8.99796199798584,
                "sum": 8.99796199798584
            }
        },
        "channel_count": 1,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 54872.203125,
        "levels_sums": {
            "count": 1,
            "mean": 208.471527099609,
            "open_pore_level_sum": 208.471527099609
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 501,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 16,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "0483fe31-67ab-497b-a6a5-71ce4a327c7b",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 11.3340339660645,
                "sum": 22.6680679321289
            },
            "read_len_events_sum_temp": 9222,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 2000.0
                },
                {
                    "count": 1,
                    "length": 6000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 98.3449096679688,
                "sum": 196.689819335938
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 13.4969425201416,
                "sum": 26.9938850402832
            }
        },
        "channel_count": 2,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 58484.984375,
        "levels_sums": {
            "count": 2,
            "mean": 250.036636352539,
            "open_pore_level_sum": 500.073272705078
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 83,
                "count": 1
            },
            {
                "channel": 229,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 17,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "29c52ab2-96be-48fb-8244-97aa08a26242",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 3,
                "mean": 9.53959941864014,
                "sum": 28.6187973022461
            },
            "read_len_events_sum_temp": 4192,
            "seq_len_bases_dist_temp": [
                {
                    "count": 3,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 3,
            "seq_len_events_dist_temp": [
                {
                    "count": 3,
                    "length": 1000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 3,
                "mean": 102.539276123047,
                "sum": 307.617828369141
            },
            "strand_sd_pa": {
                "count": 3,
                "mean": 13.7781295776367,
                "sum": 41.3343887329102
            }
        },
        "channel_count": 3,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 63410.4453125,
        "levels_sums": {
            "count": 3,
            "mean": 187.767044067383,
            "open_pore_level_sum": 563.301147460938
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 3,
        "reads_per_channel_dist": [
            {
                "channel": 359,
                "count": 1
            },
            {
                "channel": 429,
                "count": 1
            },
            {
                "channel": 492,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 18,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "10176953-0ce3-4941-a6aa-88406231a939",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 7.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 4,
                "mean": 10.0541534423828,
                "sum": 40.2166137695312
            },
            "read_len_events_sum_temp": 31987,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 1,
                    "length": 4000.0
                },
                {
                    "count": 1,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 14000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 4,
                "mean": 103.863189697266,
                "sum": 415.452758789062
            },
            "strand_sd_pa": {
                "count": 4,
                "mean": 13.8835735321045,
                "sum": 55.534294128418
            }
        },
        "channel_count": 4,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 67530.0625,
        "levels_sums": {
            "count": 4,
            "mean": 239.717864990234,
            "open_pore_level_sum": 958.871459960938
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 4,
        "reads_per_channel_dist": [
            {
                "channel": 55,
                "count": 1
            },
            {
                "channel": 172,
                "count": 1
            },
            {
                "channel": 289,
                "count": 1
            },
            {
                "channel": 474,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 19,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "d2924f09-25b3-4aba-89eb-2b153a9ab0c3",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 10.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 9.01920413970947,
                "sum": 18.0384082794189
            },
            "read_len_events_sum_temp": 3142,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                },
                {
                    "count": 1,
                    "length": 2000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 105.304275512695,
                "sum": 210.608551025391
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 15.7464332580566,
                "sum": 31.4928665161133
            }
        },
        "channel_count": 2,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 71593.7109375,
        "levels_sums": {
            "count": 2,
            "mean": 250.757934570312,
            "open_pore_level_sum": 501.515869140625
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 49,
                "count": 1
            },
            {
                "channel": 369,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 20,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "0049c7b5-4e73-4abd-92b9-af48e1830ea5",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 10.0785388946533,
                "sum": 20.1570777893066
            },
            "read_len_events_sum_temp": 7009,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 1,
                    "length": 5000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 103.828048706055,
                "sum": 207.656097412109
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 15.6761360168457,
                "sum": 31.3522720336914
            }
        },
        "channel_count": 2,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 78556.4140625,
        "levels_sums": {
            "count": 2,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 39,
                "count": 1
            },
            {
                "channel": 402,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 22,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "b024ac9b-b52d-4d67-b6c9-4d138cd457fc",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 10.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 11.048059463501,
                "sum": 22.096118927002
            },
            "read_len_events_sum_temp": 17506,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 2000.0
                },
                {
                    "count": 1,
                    "length": 14000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 98.3449096679688,
                "sum": 196.689819335938
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 13.1454601287842,
                "sum": 26.2909202575684
            }
        },
        "channel_count": 2,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 80663.375,
        "levels_sums": {
            "count": 2,
            "mean": 246.227813720703,
            "open_pore_level_sum": 492.455627441406
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 90,
                "count": 1
            },
            {
                "channel": 483,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 23,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "4de3140c-1137-4bf0-9ca1-13d8c0ba4b30",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1,
                "pass": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 6.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 8.3401050567627,
                "sum": 16.6802101135254
            },
            "read_len_events_sum_temp": 12410,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 2000.0
                },
                {
                    "count": 1,
                    "length": 9000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 88.2221984863281,
                "sum": 176.444396972656
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 13.5672397613525,
                "sum": 27.1344795227051
            }
        },
        "channel_count": 2,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 85970.9609375,
        "levels_sums": {
            "count": 2,
            "mean": 224.704803466797,
            "open_pore_level_sum": 449.409606933594
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 19,
                "count": 1
            },
            {
                "channel": 493,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 24,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "4dbc57c2-6dfa-48d9-aa90-aa3473df9e1d",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 10.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 10.1407356262207,
                "sum": 20.2814712524414
            },
            "read_len_events_sum_temp": 17154,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 1000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 101.086479187012,
                "sum": 202.172958374023
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 11.5989351272583,
                "sum": 23.1978702545166
            }
        },
        "channel_count": 2,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 89761.2890625,
        "levels_sums": {
            "count": 2,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 164,
                "count": 1
            },
            {
                "channel": 353,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 25,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "34d2a471-d7bf-4096-8508-eaa7b3de6eb2",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 4,
                "mean": 9.61404609680176,
                "sum": 38.456184387207
            },
            "read_len_events_sum_temp": 26666,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4,
            "seq_len_events_dist_temp": [
                {
                    "count": 2,
                    "length": 2000.0
                },
                {
                    "count": 1,
                    "length": 6000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 4,
                "mean": 96.0602798461914,
                "sum": 384.241119384766
            },
            "strand_sd_pa": {
                "count": 4,
                "mean": 13.8132781982422,
                "sum": 55.2531127929688
            }
        },
        "channel_count": 4,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 92813.1875,
        "levels_sums": {
            "count": 4,
            "mean": 174.503601074219,
            "open_pore_level_sum": 698.014404296875
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 4,
        "reads_per_channel_dist": [
            {
                "channel": 2,
                "count": 1
            },
            {
                "channel": 34,
                "count": 1
            },
            {
                "channel": 60,
                "count": 1
            },
            {
                "channel": 121,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 26,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "a3136899-120d-4880-a140-4a0b73a96eba",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.0
                },
                {
                    "count": 1,
                    "mean_qscore": 11.5
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 10.5845727920532,
                "sum": 21.1691455841064
            },
            "read_len_events_sum_temp": 10295,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 2000.0
                },
                {
                    "count": 1,
                    "length": 7000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 107.7646484375,
                "sum": 215.529296875
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 16.5899925231934,
                "sum": 33.1799850463867
            }
        },
        "channel_count": 2,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 99992.390625,
        "levels_sums": {
            "count": 2,
            "mean": 112.461135864258,
            "open_pore_level_sum": 224.922271728516
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 211,
                "count": 1
            },
            {
                "channel": 367,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 28,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "4ac0b167-eab4-47e4-a18b-c31f9b930ca9",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 9.5
                },
                {
                    "count": 1,
                    "mean_qscore": 11.0
                }
            ],
            "qscore_sum_temp": {
                "count": 2,
                "mean": 10.4026966094971,
                "sum": 20.8053932189941
            },
            "read_len_events_sum_temp": 6932,
            "seq_len_bases_dist_temp": [
                {
                    "count": 2,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 2,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 2000.0
                },
                {
                    "count": 1,
                    "length": 4000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 2,
                "mean": 109.803253173828,
                "sum": 219.606506347656
            },
            "strand_sd_pa": {
                "count": 2,
                "mean": 15.0434684753418,
                "sum": 30.0869369506836
            }
        },
        "channel_count": 2,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 101903.546875,
        "levels_sums": {
            "count": 2,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 2,
        "reads_per_channel_dist": [
            {
                "channel": 7,
                "count": 1
            },
            {
                "channel": 45,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 29,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "36eff11d-7915-4cbb-a6cd-5357b2ffba8c",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.0
                }
            ],
            "qscore_sum_temp": {
                "count": 1,
                "mean": 5.22799015045166,
                "sum": 5.22799015045166
            },
            "read_len_events_sum_temp": 2955,
            "seq_len_bases_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 1,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 2000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 1,
                "mean": 110.928001403809,
                "sum": 110.928001403809
            },
            "strand_sd_pa": {
                "count": 1,
                "mean": 8.57618236541748,
                "sum": 8.57618236541748
            }
        },
        "channel_count": 1,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 108905.7734375,
        "levels_sums": {
            "count": 1,
            "mean": 245.944290161133,
            "open_pore_level_sum": 245.944290161133
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 1,
        "reads_per_channel_dist": [
            {
                "channel": 108,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 60,
        "segment_number": 31,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "acee7898-5961-4815-b3c9-fdbc0b99d567",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "13f804de-8351-4928-8c24-6bdafe0716d6",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 19,
                "pass": 119
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 5.0
                },
                {
                    "count": 5,
                    "mean_qscore": 5.5
                },
                {
                    "count": 5,
                    "mean_qscore": 6.0
                },
                {
                    "count": 8,
                    "mean_qscore": 6.5
                },
                {
                    "count": 6,
                    "mean_qscore": 7.0
                },
                {
                    "count": 6,
                    "mean_qscore": 7.5
                },
                {
                    "count": 10,
                    "mean_qscore": 8.0
                },
                {
                    "count": 5,
                    "mean_qscore": 8.5
                },
                {
                    "count": 6,
                    "mean_qscore": 9.0
                },
                {
                    "count": 13,
                    "mean_qscore": 9.5
                },
                {
                    "count": 15,
                    "mean_qscore": 10.0
                },
                {
                    "count": 21,
                    "mean_qscore": 10.5
                },
                {
                    "count": 16,
                    "mean_qscore": 11.0
                },
                {
                    "count": 13,
                    "mean_qscore": 11.5
                },
                {
                    "count": 4,
                    "mean_qscore": 12.0
                },
                {
                    "count": 3,
                    "mean_qscore": 12.5
                },
                {
                    "count": 1,
                    "mean_qscore": 13.5
                }
            ],
            "qscore_sum_temp": {
                "count": 138,
                "mean": 9.64728355407715,
                "sum": 1331.32507324219
            },
            "read_len_events_sum_temp": 814243,
            "seq_len_bases_dist_temp": [
                {
                    "count": 138,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 138,
            "seq_len_events_dist_temp": [
                {
                    "count": 1,
                    "length": 0.0
                },
                {
                    "count": 19,
                    "length": 1000.0
                },
                {
                    "count": 26,
                    "length": 2000.0
                },
                {
                    "count": 17,
                    "length": 3000.0
                },
                {
                    "count": 18,
                    "length": 4000.0
                },
                {
                    "count": 9,
                    "length": 5000.0
                },
                {
                    "count": 7,
                    "length": 6000.0
                },
                {
                    "count": 5,
                    "length": 7000.0
                },
                {
                    "count": 7,
                    "length": 8000.0
                },
                {
                    "count": 3,
                    "length": 9000.0
                },
                {
                    "count": 1,
                    "length": 10000.0
                },
                {
                    "count": 2,
                    "length": 11000.0
                },
                {
                    "count": 7,
                    "length": 12000.0
                },
                {
                    "count": 6,
                    "length": 13000.0
                },
                {
                    "count": 4,
                    "length": 14000.0
                },
                {
                    "count": 4,
                    "length": 15000.0
                },
                {
                    "count": 1,
                    "length": 16000.0
                },
                {
                    "count": 1,
                    "length": 17000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 138,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 138,
                "mean": 97.7336273193359,
                "sum": 13487.240234375
            },
            "strand_sd_pa": {
                "count": 138,
                "mean": 13.3920030593872,
                "sum": 1848.09643554688
            }
        },
        "channel_count": 122,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "4320",
            "experiment_type": "rna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "6.1.4",
            "sample_frequency": "3012",
            "sequencing_kit": "sqk-rna002"
        },
        "latest_run_time": 108905.7734375,
        "levels_sums": {
            "count": 138,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "additional_context_bases": "2",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "bam_methylation_threshold": "5.000000",
            "bam_out": "0",
            "barcode_kits": "",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "1550",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "1100",
            "calib_reference": "YHR174W.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "512",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "4",
            "detect_mid_strand_barcodes": "0",
            "device": "cuda:0",
            "disable_pings": "0",
            "dmean_threshold": "10.000000",
            "dmean_win_size": "400",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "1",
            "flowcell": "FLO-MIN106",
            "front_window_size": "150",
            "gpu_runners_per_device": "4",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "2.000000",
            "kernel_path": "",
            "kit": "SQK-RNA002",
            "lamp_arrangements_files": "barcode_arrs_lamp8.cfg barcode_arrs_lamp96.cfg",
            "lamp_kit": "",
            "log_speed_frequency": "0",
            "max_queued_reads": "2000",
            "max_search_len": "15000",
            "medium_priority_threshold": "4",
            "min_length_lamp_context": "40.000000",
            "min_length_lamp_target": "80.000000",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_lamp": "80.000000",
            "min_score_lamp_mask": "50.000000",
            "min_score_lamp_target": "75.000000",
            "min_score_mask": "-1.000000",
            "min_score_mid_barcodes": "40.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "4",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "0.420000",
            "qscore_scale": "0.880000",
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "1",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "5x5_mismatch_matrix.txt",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "100",
            "trim_strategy": "rna",
            "trim_threshold": "5.000000",
            "u_substitution": "1",
            "verbose_logs": "0"
        },
        "read_count": 138,
        "reads_per_channel_dist": [
            {
                "channel": 1,
                "count": 1
            },
            {
                "channel": 2,
                "count": 1
            },
            {
                "channel": 6,
                "count": 1
            },
            {
                "channel": 7,
                "count": 2
            },
            {
                "channel": 9,
                "count": 1
            },
            {
                "channel": 10,
                "count": 1
            },
            {
                "channel": 14,
                "count": 1
            },
            {
                "channel": 15,
                "count": 1
            },
            {
                "channel": 16,
                "count": 1
            },
            {
                "channel": 19,
                "count": 1
            },
            {
                "channel": 24,
                "count": 1
            },
            {
                "channel": 27,
                "count": 3
            },
            {
                "channel": 30,
                "count": 1
            },
            {
                "channel": 33,
                "count": 1
            },
            {
                "channel": 34,
                "count": 1
            },
            {
                "channel": 36,
                "count": 1
            },
            {
                "channel": 37,
                "count": 1
            },
            {
                "channel": 39,
                "count": 1
            },
            {
                "channel": 43,
                "count": 1
            },
            {
                "channel": 45,
                "count": 1
            },
            {
                "channel": 49,
                "count": 1
            },
            {
                "channel": 55,
                "count": 1
            },
            {
                "channel": 60,
                "count": 1
            },
            {
                "channel": 61,
                "count": 1
            },
            {
                "channel": 64,
                "count": 1
            },
            {
                "channel": 82,
                "count": 1
            },
            {
                "channel": 83,
                "count": 1
            },
            {
                "channel": 86,
                "count": 1
            },
            {
                "channel": 89,
                "count": 1
            },
            {
                "channel": 90,
                "count": 1
            },
            {
                "channel": 95,
                "count": 1
            },
            {
                "channel": 97,
                "count": 1
            },
            {
                "channel": 100,
                "count": 1
            },
            {
                "channel": 108,
                "count": 1
            },
            {
                "channel": 121,
                "count": 1
            },
            {
                "channel": 129,
                "count": 1
            },
            {
                "channel": 132,
                "count": 1
            },
            {
                "channel": 152,
                "count": 1
            },
            {
                "channel": 164,
                "count": 2
            },
            {
                "channel": 166,
                "count": 1
            },
            {
                "channel": 172,
                "count": 1
            },
            {
                "channel": 174,
                "count": 1
            },
            {
                "channel": 178,
                "count": 2
            },
            {
                "channel": 182,
                "count": 1
            },
            {
                "channel": 190,
                "count": 1
            },
            {
                "channel": 191,
                "count": 2
            },
            {
                "channel": 194,
                "count": 1
            },
            {
                "channel": 204,
                "count": 1
            },
            {
                "channel": 205,
                "count": 1
            },
            {
                "channel": 206,
                "count": 1
            },
            {
                "channel": 210,
                "count": 1
            },
            {
                "channel": 211,
                "count": 1
            },
            {
                "channel": 220,
                "count": 1
            },
            {
                "channel": 222,
                "count": 1
            },
            {
                "channel": 229,
                "count": 2
            },
            {
                "channel": 234,
                "count": 1
            },
            {
                "channel": 240,
                "count": 1
            },
            {
                "channel": 242,
                "count": 1
            },
            {
                "channel": 245,
                "count": 2
            },
            {
                "channel": 251,
                "count": 1
            },
            {
                "channel": 252,
                "count": 1
            },
            {
                "channel": 261,
                "count": 1
            },
            {
                "channel": 265,
                "count": 1
            },
            {
                "channel": 276,
                "count": 1
            },
            {
                "channel": 281,
                "count": 1
            },
            {
                "channel": 284,
                "count": 1
            },
            {
                "channel": 286,
                "count": 1
            },
            {
                "channel": 289,
                "count": 1
            },
            {
                "channel": 305,
                "count": 1
            },
            {
                "channel": 312,
                "count": 2
            },
            {
                "channel": 331,
                "count": 1
            },
            {
                "channel": 333,
                "count": 1
            },
            {
                "channel": 334,
                "count": 3
            },
            {
                "channel": 337,
                "count": 1
            },
            {
                "channel": 345,
                "count": 1
            },
            {
                "channel": 346,
                "count": 1
            },
            {
                "channel": 353,
                "count": 1
            },
            {
                "channel": 355,
                "count": 1
            },
            {
                "channel": 357,
                "count": 1
            },
            {
                "channel": 358,
                "count": 2
            },
            {
                "channel": 359,
                "count": 1
            },
            {
                "channel": 361,
                "count": 1
            },
            {
                "channel": 363,
                "count": 1
            },
            {
                "channel": 366,
                "count": 1
            },
            {
                "channel": 367,
                "count": 2
            },
            {
                "channel": 369,
                "count": 1
            },
            {
                "channel": 372,
                "count": 1
            },
            {
                "channel": 379,
                "count": 1
            },
            {
                "channel": 380,
                "count": 1
            },
            {
                "channel": 381,
                "count": 1
            },
            {
                "channel": 384,
                "count": 1
            },
            {
                "channel": 400,
                "count": 1
            },
            {
                "channel": 402,
                "count": 1
            },
            {
                "channel": 404,
                "count": 1
            },
            {
                "channel": 420,
                "count": 1
            },
            {
                "channel": 421,
                "count": 1
            },
            {
                "channel": 423,
                "count": 1
            },
            {
                "channel": 426,
                "count": 1
            },
            {
                "channel": 428,
                "count": 1
            },
            {
                "channel": 429,
                "count": 1
            },
            {
                "channel": 436,
                "count": 1
            },
            {
                "channel": 438,
                "count": 3
            },
            {
                "channel": 443,
                "count": 1
            },
            {
                "channel": 444,
                "count": 1
            },
            {
                "channel": 449,
                "count": 1
            },
            {
                "channel": 454,
                "count": 1
            },
            {
                "channel": 460,
                "count": 1
            },
            {
                "channel": 467,
                "count": 1
            },
            {
                "channel": 474,
                "count": 1
            },
            {
                "channel": 475,
                "count": 1
            },
            {
                "channel": 483,
                "count": 1
            },
            {
                "channel": 484,
                "count": 1
            },
            {
                "channel": 488,
                "count": 1
            },
            {
                "channel": 492,
                "count": 1
            },
            {
                "channel": 493,
                "count": 1
            },
            {
                "channel": 496,
                "count": 1
            },
            {
                "channel": 499,
                "count": 1
            },
            {
                "channel": 500,
                "count": 2
            },
            {
                "channel": 501,
                "count": 1
            },
            {
                "channel": 503,
                "count": 1
            },
            {
                "channel": 506,
                "count": 1
            },
            {
                "channel": 509,
                "count": 1
            }
        ],
        "run_id": "01c601ade41551939fc3d763b24f095a94439087",
        "segment_duration": 1860,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.2.2+effbaf8"
        },
        "tracking_id": {
            "asic_id": "482258257",
            "asic_id_eeprom": "5682298",
            "asic_temp": "22.993553",
            "asic_version": "IA02D",
            "auto_update": "1",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "4.1.15",
            "device_id": "MN23427",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "20.10.3",
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2021-02-10T06:23:05Z",
            "flow_cell_id": "FAO15280",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "4.2.2+effbaf849",
            "heatsink_temp": "32.671875",
            "hostname": "it090560",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "3213ba27-1d40-4973-ad52-b4be9512342b",
            "operating_system": "Darwin 18.7.0",
            "protocol_group_id": "20210210-dRNA-G9-IVT-BRM",
            "protocol_run_id": "81161e7f-92ac-4faf-b6fd-010ce3cd1599",
            "protocols_version": "6.1.4",
            "run_id": "01c601ade41551939fc3d763b24f095a94439087",
            "sample_id": "20210210-dRNA-G9-IVT-BRM",
            "time_stamp": "2021-03-22T02:06:44Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "4.1.2"
        }
    }
]