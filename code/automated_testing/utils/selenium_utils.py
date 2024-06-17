""" Utility functions for selenium related work. """

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions


def wait_for_element(driver, wait_time, locator):
    """
    Wait for an element to be present on the page.

    :param driver: The Selenium WebDriver instance.
    :param wait_time: The maximum amount of time to wait (in seconds).
    :param locator: The locator tuple (By.XPATH, By.ID, etc.) used to find the element.
    :return: WebElement: The found web element.
    """
    return WebDriverWait(driver, wait_time).until(
        expected_conditions.presence_of_element_located(locator)
    )


def enter_text(element, text):
    """
    Sends text to the specified web element.

    :param element: The web element where the text should be entered.
    :param text: The text to be entered into the element.
    """
    element.clear()
    element.send_keys(text)


def get_profile_email_xpath(email):
    """
    Gets the xpath for the specified email for Profile Page email confirmation.

    :param email: The email address to locate on the Profile Page.
    :return str: The XPath string corresponding to the email element.
    """
    return f"//div//h2[text()='{email}']"


def find_element_by_dynamic_xpath(context, email):
    """
    Find an element on the Profile Page using a dynamically constructed XPath based on the email address.

    :param context: The Behave context object that holds the web driver instance.
    :param email: The email address to locate on the Profile Page.
    :return: WebElement: The found web element.
    """
    dynamic_xpath = get_profile_email_xpath(email)
    element = wait_for_element(driver=context.driver, wait_time=5, locator=dynamic_xpath)
    return element
