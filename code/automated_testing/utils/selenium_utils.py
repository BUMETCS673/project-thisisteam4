from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions


def wait_for_element(driver, wait_time, locator):
    return WebDriverWait(driver, wait_time).until(
        expected_conditions.presence_of_element_located(locator)
    )


def enter_text(element, text):
    element.clear()
    element.send_keys(text)


def get_profile_email_xpath(email):
    return f"//div//h2[text()='{email}']"
