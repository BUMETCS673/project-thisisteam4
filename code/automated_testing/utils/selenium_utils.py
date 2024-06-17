""" Utility functions for selenium related work. """

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions


def wait_for_element(driver, wait_time, locator):
    """
    Waiting for an element to be present.
    :param driver: driver
    :param wait_time: wait time
    :param locator: locator (xpath, id, name etc.)
    :return:
    """
    return WebDriverWait(driver, wait_time).until(
        expected_conditions.presence_of_element_located(locator)
    )


def enter_text(element, text):
    """
    Sends text to the specified element.
    :param element: element to send the test
    :param text: Text that we're sending
    """
    element.clear()
    element.send_keys(text)


def get_profile_email_xpath(email):
    """
    Gets the xpath for the specified email for Profile Page email confirmation.
    :param email: email we're confirming on the page.
    :return: returning the xpath of the email element on Profile poge.
    """
    return f"//div//h2[text()='{email}']"
