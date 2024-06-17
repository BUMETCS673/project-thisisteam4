from behave import *
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
import time

PROJECT_1_CARD_DASHBOARD = (By.XPATH, "//section[@class='projectCard']//h3[text()='Project 1']")
PROJECT_2_CARD_DASHBOARD = (By.XPATH, "//section[@class='projectCard']//h3[text()='Project 1']")
MEMBERS_TEXT_LOCATOR = (By.XPATH, "//main//h3[text()='MEMBERS']")
PROJECT_CLASS_TEXT_LOCATOR = (By.XPATH, "//div//h3[text()='Class A']")
PROJECT_NAME_TEXT_LOCATOR = (By.XPATH, "//div//h1[text()='Project 1']")

WAIT_TIME = 5  # seconds


def delay_execution(seconds):
    time.sleep(seconds)


@when(u'I click on the first project card for more details')
def i_click_on_the_first_project_card_for_more_details(context):
    project_1_card = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_1_CARD_DASHBOARD)
    )
    delay_execution(10)
    project_1_card.click()


@then(u'I see projects details')
def i_see_projects_details(context):
    delay_execution(10)
    project_name = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_NAME_TEXT_LOCATOR)
    )
    project_class = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_CLASS_TEXT_LOCATOR)
    )
    members_txt = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(MEMBERS_TEXT_LOCATOR)
    )
    assert project_name.is_displayed()
    assert project_class.is_displayed()
    assert members_txt.is_displayed()
