""" Step Definitions for About Page """

from behave import *
from code.automated_testing.features.pages.page_locators import PageLocators
from code.automated_testing.utils.selenium_utils import wait_for_element


@then(u'I should see the About Us section')
def i_should_see_the_about_us_section(context):
    about_us_p = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.ABOUT_US_P_LOCATOR)
    assert about_us_p.is_displayed()


@then(u'I should see the Mission Statement section')
def i_should_see_the_mission_statement_section(context):
    mission_statement_p = wait_for_element(driver=context.driver, wait_time=5,
                                           locator=PageLocators.MISSION_STATEMENT_P_LOCATOR)
    assert mission_statement_p.is_displayed()
