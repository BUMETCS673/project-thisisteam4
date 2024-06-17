""" Utility functions for general work. """

import time
import datetime


def delay_execution(seconds):
    """
    Delays execution for specified seconds long.
    :param seconds: Seconds that we'd like to delay the execution
    """
    time.sleep(seconds)


def get_current_time():
    """
    Gets the current time in 06/17/2024 format.
    :return: Formatted time as str returned.
    """
    current_time = datetime.datetime.now()
    formatted_time = current_time.strftime("%m/%d/%Y")
    return formatted_time


def generate_test_email():
    """
    Generates an email we're using while testing. (test_06172024153350167@email.com)
    :return: Generated email as str.
    """
    current_time = datetime.datetime.now()
    formatted_time = current_time.strftime("%m%d%Y%H%M%S%f")[:-3]
    email = f"test_{formatted_time}@email.com"
    return email
