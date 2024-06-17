from behave import *
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

SIGN_IN_BTN = (By.XPATH, "//p[contains(text(), 'SIGN IN')]")
SIGN_UP_BTN = (By.XPATH, "//p[contains(text(), 'SIGN UP')]")
EMAIL_LABEL = (By.XPATH, "//label[@for='username']")
EMAIL_INPUT = (By.XPATH, "//input[@name='username']")
PASSWORD_INPUT = (By.XPATH, "//input[@name='password']")
LOGIN_BUTTON = (By.XPATH, "//button[text()='Login']")

WAIT_TIME = 5  # seconds


@then(u'I should see the Sign In button')
def i_should_see_the_sign_in_button(context):
    sign_in_btn = WebDriverWait(context.driver, WAIT_TIME).until(
        EC.presence_of_element_located(SIGN_IN_BTN)
    )
    assert sign_in_btn.is_displayed()


@then(u'I should see the Sign Up button')
def i_should_see_the_sign_up_button(context):
    sign_up_btn = WebDriverWait(context.driver, WAIT_TIME).until(
        EC.presence_of_element_located(SIGN_UP_BTN)
    )
    assert sign_up_btn.is_displayed()


@then(u'I should see the email label')
def i_should_see_the_email_label(context):
    email_label = WebDriverWait(context.driver, WAIT_TIME).until(
        EC.presence_of_element_located(EMAIL_LABEL)
    )
    assert email_label.is_displayed()


@when(u'I enter "{email}" in the email field')
def enter_email(context, email):
    email_input = WebDriverWait(context.driver, WAIT_TIME).until(
        EC.presence_of_element_located(EMAIL_INPUT)
    )
    email_input.clear()
    email_input.send_keys(email)


@when(u'I enter "{password}" in the password field')
def enter_password(context, password):
    password_input = WebDriverWait(context.driver, WAIT_TIME).until(
        EC.presence_of_element_located(PASSWORD_INPUT)
    )
    password_input.clear()
    password_input.send_keys(password)


@then(u'I should be logged in')
def i_should_be_logged_in(context):
    # Add your logic to verify successful login, for example:
    # WebDriverWait(context.driver, WAIT_TIME).until(
    #     EC.presence_of_element_located((By.XPATH, "//element-unique-to-logged-in-page"))
    # )
    pass  # Replace this with actual verification logic
