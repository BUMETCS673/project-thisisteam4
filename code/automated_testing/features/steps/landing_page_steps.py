""" Step Definitions for Landing Page """

from behave import *
from code.automated_testing.features.pages.page_locators import PageLocators
from code.automated_testing.utils.selenium_utils import wait_for_element


@given(u'I am on the landing page')
def i_am_on_the_landing_page(context):
    context.driver.get("http://localhost:5173/")


@when(u'I click on the About button')
def i_click_on_the_about_btn(context):
    about_button = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.ABOUT_BUTTON_LOCATOR)
    about_button.click()


@then(u'I should be redirected to the About page')
def i_should_be_on_about_page(context):
    assert "about" in context.driver.title


@when(u'I click on the Dashboard button')
def i_click_on_the_dashboard_btn(context):
    dashboard_button = wait_for_element(driver=context.driver, wait_time=5,
                                        locator=PageLocators.DASHBOARD_BUTTON_LOCATOR)
    dashboard_button.click()


@then(u'I should be redirected to the Dashboard page')
def i_should_be_on_dashboard_page(context):
    assert "dashboard" in context.driver.title


@when(u'I click on the Login button')
def i_click_on_the_login_btn(context):
    login_button = wait_for_element(driver=context.driver, wait_time=5,
                                    locator=PageLocators.LOGIN_BUTTON_LOCATOR)
    login_button.click()


@then(u'I should be redirected to the Login page')
def i_should_be_on_login_page(context):
    assert "auth" in context.driver.title
