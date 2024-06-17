""" Utility functions for general work. """

import time
import datetime


def delay_execution(seconds: int):
    """
    Delay the execution of the program for a specified number of seconds.

    :param seconds: The number of seconds to delay execution.
    """
    time.sleep(seconds)


def get_current_time():
    """
    Get the current time formatted as MM/DD/YYYY.

    :return: str: The current time formatted as "MM/DD/YYYY".
    """
    current_time = datetime.datetime.now()
    formatted_time = current_time.strftime("%m/%d/%Y")
    return formatted_time


def generate_test_email():
    """
    Generate a test email address based on the current time.

    :return: str: The generated test email address.
    """
    current_time = datetime.datetime.now()
    formatted_time = current_time.strftime("%m%d%Y%H%M%S%f")[:-3]
    email = f"test_{formatted_time}@email.com"
    return email
