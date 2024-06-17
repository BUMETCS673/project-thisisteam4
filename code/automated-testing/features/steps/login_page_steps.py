from behave import *
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
import time

SIGN_IN_BTN = (By.XPATH, "//p[contains(text(), 'SIGN IN')]")
SIGN_UP_BTN = (By.XPATH, "//p[contains(text(), 'SIGN UP')]")
EMAIL_LABEL = (By.XPATH, "//label[@for='username']")
EMAIL_INPUT = (By.XPATH, "//input[@name='username']")
PASSWORD_INPUT = (By.XPATH, "//input[@name='password']")
LOGIN_BUTTON = (By.XPATH, "//button[text()='Login']")

WAIT_TIME = 5  # seconds


def delay_execution(seconds):
    time.sleep(seconds)


@then(u'I should see the Sign In button')
def i_should_see_the_sign_in_button(context):
    sign_in_btn = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(SIGN_IN_BTN)
    )
    assert sign_in_btn.is_displayed()


@then(u'I should see the Sign Up button')
def i_should_see_the_sign_up_button(context):
    sign_up_btn = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(SIGN_UP_BTN)
    )
    assert sign_up_btn.is_displayed()


@when(u'I signin with valid email "{email}" and valid password "{password}"')
def i_signin_with_valid_email_and_valid_pwd(context, email, password):
    email_input = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(EMAIL_INPUT)
    )
    email_input.clear()
    delay_execution(5)
    email_input.send_keys(email)

    password_input = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PASSWORD_INPUT)
    )
    password_input.clear()
    delay_execution(5)
    password_input.send_keys(password)

    login_button = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.element_to_be_clickable(LOGIN_BUTTON)
    )
    delay_execution(5)
    login_button.click()


@then(u'I should be logged in')
def i_should_be_logged_in(context):
    # This will be implemented later.
    pass
