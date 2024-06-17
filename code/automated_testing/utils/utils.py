import time
import datetime


def delay_execution(seconds):
    time.sleep(seconds)


def get_current_time():
    current_time = datetime.datetime.now()
    formatted_time = current_time.strftime("%m/%d/%Y")
    return formatted_time


def generate_test_email():
    current_time = datetime.datetime.now()
    formatted_time = current_time.strftime("%m%d%Y%H%M%S%f")[:-3]
    email = f"test_{formatted_time}@email.com"
    return email
