from behave import *
from code.automated_testing.features.pages.page_locators import PageLocators
from code.automated_testing.utils.utils import delay_execution, get_current_time
from code.automated_testing.utils.selenium_utils import wait_for_element, enter_text


@when(u'I click on the first project card for more details')
def i_click_on_the_first_project_card_for_more_details(context):
    project_1_card = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.PROJECT_1_CARD_DASHBOARD)
    project_1_card.click()


@then(u'I see projects details')
def i_see_projects_details(context):
    delay_execution(10)
    project_name = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.PROJECT_NAME_TEXT_LOCATOR)
    project_class = wait_for_element(driver=context.driver, wait_time=5,
                                     locator=PageLocators.PROJECT_CLASS_TEXT_LOCATOR)
    members_txt = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.MEMBERS_TEXT_LOCATOR)

    assert project_name.is_displayed()
    assert project_class.is_displayed()
    assert members_txt.is_displayed()


@when(u'I click on Create button')
def step_impl(context):
    create_btn = wait_for_element(driver=context.driver, wait_time=5, locator=PageLocators.CREATE_BTN_LOCATOR)
    create_btn.click()


@then(u'I see the form for creating a project')
def step_impl(context):
    project_form_add_project_txt = wait_for_element(driver=context.driver, wait_time=5,
                                                    locator=PageLocators.PROJECT_FORM_ADD_A_PROJECT_TXT_LOCATOR)
    project_form_name = wait_for_element(driver=context.driver, wait_time=5,
                                         locator=PageLocators.PROJECT_FORM_NAME_LOCATOR)
    project_form_owner = wait_for_element(driver=context.driver, wait_time=5,
                                          locator=PageLocators.PROJECT_FORM_OWNER_LOCATOR)

    assert project_form_add_project_txt.is_displayed()
    assert project_form_name.is_displayed()
    assert project_form_owner.is_displayed()


@when(u'I create a project with valid inputs')
def step_impl(context):
    project_form_name = wait_for_element(driver=context.driver, wait_time=5,
                                         locator=PageLocators.PROJECT_FORM_NAME_LOCATOR)
    project_form_owner = wait_for_element(driver=context.driver, wait_time=5,
                                          locator=PageLocators.PROJECT_FORM_OWNER_LOCATOR)
    project_form_members = wait_for_element(driver=context.driver, wait_time=5,
                                            locator=PageLocators.PROJECT_FORM_MEMBERS_LOCATOR)
    project_form_creationdate = wait_for_element(driver=context.driver, wait_time=5,
                                                 locator=PageLocators.PROJECT_FORM_CREATION_DATE_LOCATOR)
    project_form_desc = wait_for_element(driver=context.driver, wait_time=5,
                                         locator=PageLocators.PROJECT_FORM_DESC_LOCATOR)
    project_form_type = wait_for_element(driver=context.driver, wait_time=5,
                                         locator=PageLocators.PROJECT_FORM_TYPE_LOCATOR)
    project_form_status = wait_for_element(driver=context.driver, wait_time=5,
                                           locator=PageLocators.PROJECT_FORM_STATUS_LOCATOR)
    project_form_compdate = wait_for_element(driver=context.driver, wait_time=5,
                                             locator=PageLocators.PROJECT_FORM_COMP_DATE_LOCATOR)

    enter_text(project_form_name, "Project Name Test")
    enter_text(project_form_owner, "Project Owner Test")
    enter_text(project_form_members, "Project Member Test")
    enter_text(project_form_creationdate, get_current_time())
    enter_text(project_form_desc, "Project Description Test")
    enter_text(project_form_type, "Project Type Test")
    enter_text(project_form_status, "Project Status Test")
    enter_text(project_form_compdate, get_current_time())

    delay_execution(30)


@then(u'I see project created successfully')
def step_impl(context):
    # This will be implemented later
    #
    # create_project_btn = wait_for_element(driver=context.driver, wait_time=5,
    #                                              locator=PageLocators.CREATE_PROJECT_BTN_LOCATOR)
    # create_project_btn.click()
    pass
