""" Step Definitions for Dashboard Page """

from behave import *
from code.automated_testing.features.pages.page_locators import PageLocators
from code.automated_testing.utils.utils import delay_execution
from code.automated_testing.utils.selenium_utils import wait_for_element, enter_text


@when(u'I enter "{search_text}" in the search bar')
def enter_search_text(context, search_text):
    search_bar = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.SEARCH_BAR)
    delay_execution(5)
    enter_text(search_bar, search_text)


@when(u'I select Class 2 from the class dropdown')
def select_class(context):
    class_dropdown = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.SEARCH_CLASS_DROPDOWN)
    class_dropdown.click()

    class_dropdown_option_2 = wait_for_element(driver=context.driver, wait_time=5,
                                               locator=PageLocators.SEARCH_CLASS_DROPDOWN_OPTION_2)
    class_dropdown_option_2.click()


@when(u'I click the submit button')
def click_submit_button(context):
    # This will be implemented later.
    pass


@then(u'I should see the search results for "{search_text}"')
def verify_search_results(context, search_text):
    # This will be implemented later.
    pass


@then(u'I see the dashboard page with projects')
def i_see_the_dashboard_page_with_projects(context):
    project_1_card = wait_for_element(driver=context.driver, wait_time=5,
                                      locator=PageLocators.PROJECT_1_CARD_DASHBOARD)

    project_2_card = wait_for_element(driver=context.driver, wait_time=5,
                                      locator=PageLocators.PROJECT_2_CARD_DASHBOARD)
    assert project_1_card.is_displayed()
    assert project_2_card.is_displayed()
