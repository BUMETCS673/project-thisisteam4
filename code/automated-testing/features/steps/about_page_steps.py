from behave import *
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# ABOUT PAGE LOCATORS
ABOUT_US_P_LOCATOR = (By.XPATH, "//div[@class='about']//p[1]")
MISSION_STATEMENT_P_LOCATOR = (By.XPATH, "//div[@class='about']//p[2]")


@then(u'I should see the About Us section')
def i_should_see_the_about_us_section(context):
    about_us_p = WebDriverWait(context.driver, 5).until(
        EC.presence_of_element_located(ABOUT_US_P_LOCATOR)
    )
    assert about_us_p.is_displayed()


@then(u'I should see the Mission Statement section')
def i_should_see_the_mission_statement_section(context):
    mission_statement_p = WebDriverWait(context.driver, 5).until(
        EC.presence_of_element_located(MISSION_STATEMENT_P_LOCATOR)
    )
    assert mission_statement_p.is_displayed()
