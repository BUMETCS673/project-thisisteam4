""" Step Definitions for Login Page """

from behave import *
from code.automated_testing.features.pages.page_locators import PageLocators
from code.automated_testing.utils.utils import delay_execution, generate_test_email
from code.automated_testing.utils.selenium_utils import wait_for_element, enter_text, get_profile_email_xpath


def find_element_by_dynamic_xpath(context, email):
    dynamic_xpath = get_profile_email_xpath(email)
    element = wait_for_element(driver=context.driver, wait_time=5, locator=dynamic_xpath)
    return element


@then(u'I should see the Sign In button')
def i_should_see_the_sign_in_button(context):
    sign_in_btn = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.SIGN_IN_BTN)
    assert sign_in_btn.is_displayed()


@then(u'I should see the Sign Up button')
def i_should_see_the_sign_up_button(context):
    sign_up_btn = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.SIGN_UP_BTN)
    assert sign_up_btn.is_displayed()


@when(u'I click on the Sign Up button')
def i_click_on_the_sign_up_btn(context):
    sign_up_btn = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.SIGN_UP_BTN)
    sign_up_btn.click()


@then(u'I see the Sign Up Form')
def i_see_the_sign_up_form(context):
    email_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.EMAIL_INPUT)
    password_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.PASSWORD_INPUT)
    re_pwd_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.RE_PASSWORD_INPUT)

    assert email_input.is_displayed()
    assert password_input.is_displayed()
    assert re_pwd_input.is_displayed()


@when(u'I sign up with valid email and valid password "{password}"')
def i_sign_up_with_valid_email_and_valid_pwd(context, password):
    email_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.EMAIL_INPUT)
    delay_execution(1)
    context.email = generate_test_email()
    enter_text(email_input, context.email)

    password_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.PASSWORD_INPUT)
    delay_execution(1)
    enter_text(password_input, password)

    re_pwd_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.RE_PASSWORD_INPUT)
    delay_execution(1)
    enter_text(re_pwd_input, password)

    register_button = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.REGISTER_BUTTON)
    delay_execution(1)
    register_button.click()


@then(u'I should see the sign in page')
def i_should_see_the_sign_in_page(context):
    delay_execution(10)
    email_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.EMAIL_INPUT)
    password_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.PASSWORD_INPUT)

    assert email_input.is_displayed()
    assert password_input.is_displayed()


@when(u'I sign in with valid email and valid password "{password}"')
def i_sign_in_with_valid_email_and_valid_pwd(context, password):
    sign_in_btn = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.SIGN_IN_BTN)
    sign_in_btn.click()

    email_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.EMAIL_INPUT)
    delay_execution(5)
    enter_text(email_input, context.email)

    password_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.PASSWORD_INPUT)
    delay_execution(5)
    enter_text(password_input, password)

    login_button = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.LOGIN_BUTTON)
    delay_execution(5)
    login_button.click()


@then(u'I should be signed in successfully')
def i_should_be_signed_in_successfully(context):
    delay_execution(5)
    profile_btn = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.PROFILE_BTN_LOCATOR)
    create_btn = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.CREATE_BTN_LOCATOR)

    assert profile_btn.is_displayed()
    assert create_btn.is_displayed()


@when(u'I click on the Profile button')
def i_click_on_the_profile_btn(context):
    profile_btn = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.PROFILE_BTN_LOCATOR)
    profile_btn.click()


@then(u'I see my email address displayed in Profile page')
def i_see_my_email_address_displayed_in_profile_page(context):
    delay_execution(10)
    email_element = find_element_by_dynamic_xpath(context, context.test_email)
    assert email_element.is_displayed()


@when(u'I sign up with invalid email "{email}" and invalid password "{password}"')
def i_signup_with_invalid_email_and_invalid_pwd(context, email, password):
    email_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.EMAIL_INPUT)
    delay_execution(5)
    enter_text(email_input, email)

    password_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.PASSWORD_INPUT)
    delay_execution(5)
    enter_text(password_input, password)

    re_pwd_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.RE_PASSWORD_INPUT)
    delay_execution(5)
    enter_text(re_pwd_input, password)
    delay_execution(1)

    register_button = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.REGISTER_BUTTON)
    delay_execution(5)
    register_button.click()


@then(u'I see that sign up is not successful')
def i_see_that_signup_is_not_successful(context):
    delay_execution(10)
    re_pwd_input = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.RE_PASSWORD_INPUT)
    invalid_email_error_msg = wait_for_element(driver=context.driver, wait_time=5,
                                               locator=PageLocators.INVALID_EMAIL_MSG_LOCATOR)
    error_msg = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.ERROR_MSG_LOCATOR)

    assert re_pwd_input.is_displayed()
    assert invalid_email_error_msg.is_displayed()
    assert error_msg.is_displayed()
