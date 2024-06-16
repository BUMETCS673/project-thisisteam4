from behave import *
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from time import sleep

# WELCOME PAGE XPATH LOCATORS
project_portal_xpath = '//img[@alt="Project Portal"]'
about_button_xpath = '//a[contains(text(), "ABOUT")]'
dashboard_button_xpath = "//a[contains(text(), 'DASHBOARD')]"
login_button_xpath = "//a[contains(text(), 'LOGIN')]"
learn_more_button_xpath = "//button[contains(text(), 'LEARN MORE')]"

# ABOUT PAGE XPATH LOCATORS
about_us_p_xpath = "//div[@class='about']//p[1]"
mission_statement_p_xpath = "//div[@class='about']//p[2]"

# DASHBOARD PAGE XPATH LOCATORS
search_submit_btn_xpath = "//button[@type='submit']"
search_bar_xpath = "//input[@class='search-input']"
search_class_dropdown_locator = "//select[@id='class-filter']"

# LOGIN PAGE XPATH LOCATORS
sign_in_btn_locator = "//p[contains(text(), 'SIGN IN')]"
sign_up_btn_locator = "//p[contains(text(), 'SIGN UP')]"
email_label_locator = "//label[@for='username']"
pwd_label_locator = "//label[@for='password']"
email_input_locator = "//input[@type='email']"
pwd_input_locator = "//input[@type='password']"
login_btn_locator = "//button[text() = 'Login']"
project_text_locator = "//p[contains(text(), 'PROJECT')]"
portal_text_locator = "//p[contains(text(), 'PORTAL')]"


@given(u'launch chrome browser')
def launch_browser(context):
    chrome_options = webdriver.ChromeOptions()
    chrome_options.binary_location = 'C:/Program Files/Google/Chrome/Application/chrome.exe'  # Update this with the path to your Chrome installation
    service = Service(
        "C:/Users/balta/OneDrive/Desktop/BUMETCS673/project-thisisteam4/code/automated-testing/drivers/chromedriver.exe")
    context.driver = webdriver.Chrome(service=service, options=chrome_options)
    context.driver.maximize_window()


@when('open orange hrml homepage')
def open_homepage(context):
    context.driver.get("http://localhost:5173/")


@then(u'keep the browser open for manual inspection')
def keep_browser_open(context):
    print("Keeping the browser open for manual inspection...")
    sleep(60 * 10)  # Keep the browser open for 10 minutes
    # context.driver.quit()
