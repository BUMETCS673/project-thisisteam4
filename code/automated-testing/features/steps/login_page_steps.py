from behave import *
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
import time
import datetime

SIGN_IN_BTN = (By.XPATH, "//p[contains(text(), 'SIGN IN')]")
SIGN_UP_BTN = (By.XPATH, "//p[contains(text(), 'SIGN UP')]")
EMAIL_LABEL = (By.XPATH, "//label[@for='username']")
EMAIL_INPUT = (By.XPATH, "//input[@name='username']")
PASSWORD_INPUT = (By.XPATH, "//input[@name='password']")
RE_PASSWORD_INPUT = (By.XPATH, "//input[@id='repassword']")
LOGIN_BUTTON = (By.XPATH, "//button[text()='Login']")
REGISTER_BUTTON = (By.XPATH, "//button[text()='Register']")
CREATE_BTN_LOCATOR = (By.XPATH, "//a[text()='CREATE']")
PROFILE_BTN_LOCATOR = (By.XPATH, "//a[text()='PROFILE']")

WAIT_TIME = 5  # seconds


def get_profile_email_xpath(email):
    return f"//div//h2[text()='{email}']"


def delay_execution(seconds):
    time.sleep(seconds)


def find_element_by_dynamic_xpath(context, email):
    dynamic_xpath = get_profile_email_xpath(email)
    element = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located((By.XPATH, dynamic_xpath))
    )
    return element


def generate_test_email():
    current_time = datetime.datetime.now()
    formatted_time = current_time.strftime("%m%d%Y_%H%M%S_%f")[:-3]
    email = f"testemail_{formatted_time}@email.com"
    return email


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


@when(u'I click on the Sign Up button')
def step_impl(context):
    sign_up_btn = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.element_to_be_clickable(SIGN_UP_BTN)
    )
    sign_up_btn.click()


@then(u'I see the Sign Up Form')
def step_impl(context):
    email_input = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(EMAIL_INPUT)
    )
    password_input = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PASSWORD_INPUT)
    )
    re_pwd_inpput = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(RE_PASSWORD_INPUT)
    )
    assert email_input.is_displayed()
    assert password_input.is_displayed()
    assert re_pwd_inpput.is_displayed()


@when(u'I sign up with valid email and valid password "{password}"')
def step_impl(context, password):
    email_input = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(EMAIL_INPUT)
    )
    email_input.clear()
    delay_execution(1)
    context.test_email = generate_test_email()
    email_input.send_keys(context.test_email)

    password_input = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(PASSWORD_INPUT)
    )
    password_input.clear()
    delay_execution(1)
    password_input.send_keys(password)

    re_pwd_inpput = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(RE_PASSWORD_INPUT)
    )
    delay_execution(1)
    re_pwd_inpput.send_keys(password)

    register_button = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.element_to_be_clickable(REGISTER_BUTTON)
    )
    delay_execution(1)
    register_button.click()


@then(u'I should see the sign in page')
def step_impl(context):
    delay_execution(10)
    email_input = WebDriverWait(context.driver, 5).until(
        ec.presence_of_element_located(EMAIL_INPUT)
    )
    password_input = WebDriverWait(context.driver, 5).until(
        ec.presence_of_element_located(PASSWORD_INPUT)
    )

    assert email_input.is_displayed()
    assert password_input.is_displayed()


@when(u'I sign in with valid email and valid password "{password}"')
def step_impl(context, password):
    email_input = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.presence_of_element_located(EMAIL_INPUT)
    )
    print(f"context.test_email --> {context.test_email}")
    email_input.clear()
    delay_execution(5)
    email_input.send_keys(context.test_email)

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


@then(u'I should be signed in successfully')
def step_impl(context):
    delay_execution(5)
    profile_btn = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.element_to_be_clickable(PROFILE_BTN_LOCATOR)
    )
    create_btn = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.element_to_be_clickable(CREATE_BTN_LOCATOR)
    )
    assert profile_btn.is_displayed()
    assert create_btn.is_displayed()


@when(u'I click on the Profile button')
def step_impl(context):
    profile_btn = WebDriverWait(context.driver, WAIT_TIME).until(
        ec.element_to_be_clickable(PROFILE_BTN_LOCATOR)
    )
    profile_btn.click()


@then(u'I see my email address displayed in Profile page')
def step_impl(context):
    delay_execution(10)
    email_element = find_element_by_dynamic_xpath(context, context.test_email)
    assert email_element.is_displayed()
