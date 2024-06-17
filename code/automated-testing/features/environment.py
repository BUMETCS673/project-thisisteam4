from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import os


def before_all(context):
    chrome_driver_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'drivers', 'chromedriver.exe')
    chrome_options = webdriver.ChromeOptions()
    chrome_options.binary_location = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
    service = Service(chrome_driver_path)
    context.driver = webdriver.Chrome(service=service, options=chrome_options)
    context.driver.maximize_window()


def after_all(context):
    if hasattr(context, 'browser'):
        context.browser.quit()
