from behave import *
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as ec
import time

# DASHBOARD PAGE LOCATORS
SEARCH_SUBMIT_BTN = (By.XPATH, "//button[@type='submit']")
SEARCH_BAR = (By.XPATH, "//input[@class='search-input']")
SEARCH_CLASS_DROPDOWN = (By.XPATH, "//select[@name='filter-options']")
SEARCH_CLASS_DROPDOWN_OPTION_1 = (By.XPATH, "//option[@value='class-1']")
SEARCH_CLASS_DROPDOWN_OPTION_2 = (By.XPATH, "//option[@value='class-2']")
SEARCH_CLASS_DROPDOWN_OPTION_3 = (By.XPATH, "//option[@value='class-3']")

WAIT_TIME = 5  # seconds


def delay_execution(seconds):
    time.sleep(seconds)


@when(u'I enter "{search_text}" in the search bar')
def enter_search_text(context, search_text):
    search_bar = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(SEARCH_BAR)
    )
    delay_execution(5)
    search_bar.clear()
    search_bar.send_keys(search_text)


@when(u'I select Class 2 from the class dropdown')
def select_class(context):
    class_dropdown = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(SEARCH_CLASS_DROPDOWN)
    )
    delay_execution(5)
    class_dropdown.click()
    class_dropdown_option_2 = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(SEARCH_CLASS_DROPDOWN_OPTION_2)
    )
    class_dropdown_option_2.click()


@when(u'I click the submit button')
def click_submit_button(context):
    # This will be implemented later.
    pass


@then(u'I should see the search results for "{search_text}"')
def verify_search_results(context, search_text):
    # This will be implemented later.
    pass
