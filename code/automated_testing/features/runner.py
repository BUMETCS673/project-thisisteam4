""" Runner class to run suite(s) or feature file(s) """

import os
import sys
import subprocess
from datetime import datetime


def find_feature_files(directory):
    feature_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".feature"):
                feature_files.append(os.path.join(root, file))
    return feature_files


def run_behave(feature_files, tags):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    report_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'reports')
    if not os.path.exists(report_dir):
        os.makedirs(report_dir)

    report_file = f'report_{timestamp}.json'
    report_path = os.path.join(report_dir, report_file)
    print(f"Report will be created at: {report_path}")

    # Create the Behave command with the specified feature files and tags
    feature_paths = " ".join(feature_files)
    tag_option = f"--tags={tags}" if tags else ""
    command = f'behave {feature_paths} {tag_option} --format json --outfile={report_path}'
    print(f"Running command: {command}")
    subprocess.run(command, shell=True)

    return report_path


def generate_html_report(report_path):
    # Get the path to the generate_report.js script
    script_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    generate_report_script = os.path.join(script_dir, 'utils', 'generate_report.js')
    print(f"Running report generation script: {generate_report_script}")

    # Run the generate_report.js script with the report_path argument
    command = f'node {generate_report_script} {report_path}'
    subprocess.run(command, shell=True)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python runner.py <feature_file_1> <feature_file_2> ... [--tags=<tag>]")
        sys.exit(1)

    # Extract tags if provided
    tags = None
    feature_files = []
    for arg in sys.argv[1:]:
        if arg.startswith('--tags='):
            tags = arg.split('=')[1]
        else:
            feature_files.append(arg)

    if not feature_files and not tags:
        print("Error: No feature files or tags specified.")
        sys.exit(1)

    if not feature_files:
        # If no feature files specified, search for all feature files in the current directory
        feature_dir = os.path.dirname(os.path.abspath(__file__))
        feature_files = find_feature_files(feature_dir)
    else:
        # Ensure feature files are relative to the features directory
        feature_dir = os.path.dirname(os.path.abspath(__file__))
        feature_files = [os.path.join(feature_dir, file) for file in feature_files]

    report_path = run_behave(feature_files, tags)
    generate_html_report(report_path)
