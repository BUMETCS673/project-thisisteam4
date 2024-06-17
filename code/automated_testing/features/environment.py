from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import os
import logging
from datetime import datetime


def before_all(context):
    # Ensure the logs directory exists
    logs_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'logs')
    if not os.path.exists(logs_path):
        os.makedirs(logs_path)

    # Configure logging
    log_filename = os.path.join(logs_path, f'behave_{datetime.now().strftime("%Y%m%d_%H%M%S")}.log')
    print(f"Log file will be created at: {log_filename}")

    logger = logging.getLogger('behave')
    logger.setLevel(logging.DEBUG)

    fh = logging.FileHandler(log_filename)
    fh.setLevel(logging.DEBUG)

    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    fh.setFormatter(formatter)

    logger.addHandler(fh)
    context.logger = logger
    context.logger.info('Logger is configured and logging is started')

    chrome_driver_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'drivers', 'chromedriver.exe')
    chrome_options = webdriver.ChromeOptions()
    chrome_options.binary_location = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
    service = Service(chrome_driver_path)
    context.driver = webdriver.Chrome(service=service, options=chrome_options)
    context.driver.maximize_window()
    context.logger.info('Chrome browser launched and maximized')


def after_all(context):
    if hasattr(context, 'driver'):
        context.driver.quit()
        context.logger.info('Chrome browser closed')


def before_scenario(context, scenario):
    context.logger.info(f'Starting scenario: {scenario.name}')


def after_scenario(context, scenario):
    if scenario.status == "failed":
        context.logger.error(f'Scenario failed: {scenario.name}')
    else:
        context.logger.info(f'Scenario passed: {scenario.name}')


def before_step(context, step):
    context.logger.info(f'Starting step: {step.name}')


def after_step(context, step):
    if step.status == "failed":
        context.logger.error(f'Step failed: {step.name}')
    else:
        context.logger.info(f'Step passed: {step.name}')
