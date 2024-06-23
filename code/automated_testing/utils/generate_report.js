/**
 * JS file to generate an HTML report after the test run using cucumber-html-reporter.
 */

const reporter = require('cucumber-html-reporter');
const fs = require('fs');

// Get the JSON file path from the command-line arguments
const jsonFilePath = process.argv[2];

/**
 * Read the JSON file containing the test results.
 */
let rawdata = fs.readFileSync(jsonFilePath);
let reportData = JSON.parse(rawdata);

/**
 * Ensure each feature has a URI and sanitize error messages in the steps.
 */
reportData.forEach(feature => {
    if (!feature.uri) {
        feature.uri = 'undefined';
    }
    feature.elements.forEach(scenario => {
        scenario.steps.forEach(step => {
            if (step.result && step.result.error_message) {
                if (typeof step.result.error_message !== 'string') {
                    step.result.error_message = JSON.stringify(step.result.error_message);
                }
                step.result.error_message = step.result.error_message.replace(/</g, '(').replace(/>/g, ')');
            }
        });
    });
});

/**
 * Configuration options for the cucumber-html-reporter.
 */
fs.writeFileSync(jsonFilePath, JSON.stringify(reportData, null, 2));

const options = {
    theme: 'bootstrap',
    jsonFile: jsonFilePath,
    output: 'code/automated_testing/features/reports/report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "0.0.1",
        "Test Environment": "STAGING",
        "Browser": "Chrome  89.0.4389.82",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

/**
 * Generate the HTML report using the cucumber-html-reporter with the specified options.
 */
reporter.generate(options);