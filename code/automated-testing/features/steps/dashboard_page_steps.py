from behave import *
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# DASHBOARD PAGE LOCATORS
SEARCH_SUBMIT_BTN = (By.XPATH, "//button[@type='submit']")
SEARCH_BAR = (By.XPATH, "//input[@class='search-input']")
SEARCH_CLASS_DROPDOWN = (By.XPATH, "//select[@id='class-filter']")

WAIT_TIME = 5  # seconds


@given(u'I am on the dashboard page')
def i_am_on_the_dashboard_page(context):
    context.driver.get("http://localhost:5173/dashboard")
    time.sleep(WAIT_TIME)


@when(u'I enter "{search_text}" in the search bar')
def enter_search_text(context, search_text):
    search_bar = WebDriverWait(context.driver, WAIT_TIME).until(
        EC.presence_of_element_located(DashboardPageLocators.SEARCH_BAR)
    )
    search_bar.clear()
    search_bar.send_keys(search_text)


@when(u'I select "{class_name}" from the class dropdown')
def select_class(context, class_name):
    class_dropdown = WebDriverWait(context.driver, WAIT_TIME).until(
        EC.presence_of_element_located(DashboardPageLocators.SEARCH_CLASS_DROPDOWN)
    )
    for option in class_dropdown.find_elements_by_tag_name('option'):
        if option.text == class_name:
            option.click()
            break


@when(u'I click the submit button')
def click_submit_button(context):
    submit_button = WebDriverWait(context.driver, WAIT_TIME).until(
        EC.element_to_be_clickable(DashboardPageLocators.SEARCH_SUBMIT_BTN)
    )
    submit_button.click()


@then(u'I should see the search results for "{search_text}"')
def verify_search_results(context, search_text):
    # Add your logic to verify the search results
    # For example, you might check the presence of certain elements that contain the search text
    pass  # Replace this with actual verification logic
