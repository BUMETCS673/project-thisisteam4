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

PROJECT_FORM_ADD_A_PROJECT_TXT_LOCATOR = (By.XPATH, "//header//h3[text()='ADD A PROJECT']")
PROJECT_FORM_NAME_LOCATOR = (By.XPATH, "//input[@name='name']")
PROJECT_FORM_OWNER_LOCATOR = (By.XPATH, "//input[@name='owner']")
PROJECT_FORM_MEMBERS_LOCATOR = (By.XPATH, "//input[@name='members']")
PROJECT_FORM_CREATION_DATE_LOCATOR = (By.XPATH, "//input[@name='creationDate']")
PROJECT_FORM_DESC_LOCATOR = (By.XPATH, "//textarea[@name='description']")
PROJECT_FORM_TYPE_LOCATOR = (By.XPATH, "//input[@name='type']")
PROJECT_FORM_STATUS_LOCATOR = (By.XPATH, "//input[@name='status']")
PROJECT_FORM_COMP_DATE_LOCATOR = (By.XPATH, "//input[@name='completionDate']")

CREATE_BTN_LOCATOR = (By.XPATH, "//a[text()='CREATE']")

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


@when(u'I click on Create button')
def step_impl(context):
    create_btn = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(CREATE_BTN_LOCATOR)
    )
    create_btn.click()


@then(u'I see the form for creating a project')
def step_impl(context):
    project_form_add_project_txt = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_ADD_A_PROJECT_TXT_LOCATOR)
    )
    project_form_name = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_NAME_LOCATOR)
    )
    project_form_owner = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_OWNER_LOCATOR)
    )
    assert project_form_add_project_txt.is_displayed()
    assert project_form_name.is_displayed()
    assert project_form_owner.is_displayed()


@when(u'I create a project with valid inputs')
def step_impl(context):
    project_form_name = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_NAME_LOCATOR)
    )
    project_form_owner = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_OWNER_LOCATOR)
    )
    project_form_members = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_MEMBERS_LOCATOR)
    )
    project_form_creationdate = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_CREATION_DATE_LOCATOR)
    )
    project_form_desc = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_DESC_LOCATOR)
    )
    project_form_type = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_TYPE_LOCATOR)
    )
    project_form_status = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_STATUS_LOCATOR)
    )
    project_form_compdate = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PROJECT_FORM_COMP_DATE_LOCATOR)
    )
    project_form_name.send_keys("Project Name Test")
    project_form_owner.send_keys("Project Owner Test")
    project_form_members.send_keys("Project Member Test")
    project_form_creationdate.send_keys("06/18/2024")
    project_form_desc.send_keys("Project Description Test")
    project_form_type.send_keys("Project Type Test")
    project_form_status.send_keys("Project Status Test")
    project_form_compdate.send_keys("08/18/2024")

    delay_execution(30)


@then(u'I see project created successfully')
def step_impl(context):
    # This will be implemented later
    pass
