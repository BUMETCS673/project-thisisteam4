# UI Test Framework for Project Portal Project

This project is designed to automate testing for a web application using Behave, Selenium, and other tools.

## Prerequisites

- Python 3.x
- Node.js
- npm (Node Package Manager)
- Google Chrome browser

## Setup

1. **Clone the repository:**

```sh
git clone https://github.com/BUMETCS673/project-thisisteam4.git
cd project-thisisteam4/code/automated_testing
```

2. **Install Python dependencies:**

```sh
pip install -r requirements.txt
```

3. **Navigate to the `code` directory and initialize npm:**

```sh
cd ..
npm init -y
npm install cucumber-html-reporter
```

4. **Ensure the ChromeDriver is in the correct path:**

Make sure the `chromedriver.exe` file is located in the `code/automated_testing/drivers/` directory. We can download the
current version of the chromedriver from https://googlechromelabs.github.io/chrome-for-testing/. We're currently using
version chrome versio 126, so the version of the chrome that developer/tester using in their computer should match the
version in the project.

And please note that the chrome should be installed in your computer in this
path `C:/Program Files/Google/Chrome/Application`, named like this:`chrome.exe`

## Running Tests

To run specific feature files:

```sh
python code/automated_testing/features/runner.py landing_page.feature
```

To run scenarios with specific tags:

```sh
python code/automated_testing/features/runner.py --tags=@smoke_suite
```

## Reports

Reports are generated automatically after running the tests. They are saved in
the `code/automated_testing/features/reports/` directory.

## Logs

Logs are created in the `code/automated_testing/features/logs/` directory. The logging configuration is set up
in `utils/logging_config.ini`.

## Authors

- **FEHMI BALTACI** - *QA Lead*
- **Brenna Mahn** - *Team Leader*
- **Savien (Brooke)Love** - *Design & Implementation Leader*
- **Pinwen Mu** - *Configuration Leader*
- **Natanim Eibrahim** - *Security Leader*

---

### Dependencies

Below is the list of dependencies specified in `requirements.txt`:

```plaintext
attrs==23.2.0
behave==1.2.6
behave-html-formatter==0.9.10
bitsets==0.8.4
certifi==2024.6.2
cffi==1.16.0
concepts==0.9.2
config==0.5.1
features==0.5.12
fileconfig==0.6.1
graphviz==0.20.3
h11==0.14.0
idna==3.7
outcome==1.3.0.post0
parse==1.20.2
parse-type==0.6.2
pycparser==2.22
PySocks==1.7.1
PyYAML==6.0.1
selenium==4.21.0
six==1.16.0
sniffio==1.3.1
sortedcontainers==2.4.0
trio==0.25.1
trio-websocket==0.11.1
typing_extensions==4.12.2
urllib3==2.2.1
wsproto==1.2.0
```