""" Page Locator for all the pages we have on Project Portal website"""
from selenium.webdriver.common.by import By


class PageLocators:
    """ A class for holding all the locator tuples for the Project Portal website. """
    # LANDING PAGE LOCATORS
    PROJECT_PORTAL_LOCATOR = (By.XPATH, '//img[@alt="Project Portal"]')
    ABOUT_BUTTON_LOCATOR = (By.XPATH, '//a[contains(text(), "ABOUT")]')
    DASHBOARD_BUTTON_LOCATOR = (By.XPATH, "//a[contains(text(), 'DASHBOARD')]")
    LOGIN_BUTTON_LOCATOR = (By.XPATH, "//a[contains(text(), 'LOGIN')]")
    LEARN_MORE_BUTTON_LOCATOR = (By.XPATH, "//button[contains(text(), 'LEARN MORE')]")

    # ABOUT PAGE LOCATORS
    ABOUT_US_P_LOCATOR = (By.XPATH, "//div[@class='about']//p[1]")
    MISSION_STATEMENT_P_LOCATOR = (By.XPATH, "//div[@class='about']//p[2]")

    # DASHBOARD PAGE LOCATORS
    SEARCH_SUBMIT_BTN = (By.XPATH, "//button[@type='submit']")
    SEARCH_BAR = (By.XPATH, "//input[@class='search-input']")
    SEARCH_CLASS_DROPDOWN = (By.XPATH, "//select[@name='filter-options']")
    SEARCH_CLASS_DROPDOWN_OPTION_1 = (By.XPATH, "//option[@value='class-1']")
    SEARCH_CLASS_DROPDOWN_OPTION_2 = (By.XPATH, "//option[@value='class-2']")
    SEARCH_CLASS_DROPDOWN_OPTION_3 = (By.XPATH, "//option[@value='class-3']")
    PROJECT_1_CARD_DASHBOARD = (By.XPATH, "//section[@class='projectCard']//h3[text()='Project 1']")
    PROJECT_2_CARD_DASHBOARD = (By.XPATH, "//section[@class='projectCard']//h3[text()='Project 1']")

    # LOGIN PAGE LOCATORS
    SIGN_IN_BTN = (By.XPATH, "//p[contains(text(), 'SIGN IN')]")
    SIGN_UP_BTN = (By.XPATH, "//p[contains(text(), 'SIGN UP')]")
    EMAIL_LABEL = (By.XPATH, "//label[@for='username']")
    EMAIL_INPUT = (By.XPATH, "//input[@name='username']")
    PASSWORD_INPUT = (By.XPATH, "//input[@name='password']")
    RE_PASSWORD_INPUT = (By.XPATH, "//input[@id='repassword']")
    LOGIN_BUTTON = (By.XPATH, "//button[text()='Login']")
    REGISTER_BUTTON = (By.XPATH, "//button[text()='Register']")
    CREATE_BTN_LOCATOR = (By.XPATH, "//a[text()='CREATE']")
    PROFILE_BTN_LOCATOR = (By.XPATH, "//a[text()='PROFILE']")
    ERROR_MSG_LOCATOR = (By.XPATH, '//p[@class="error"]')
    INVALID_EMAIL_MSG_LOCATOR = (By.XPATH, "// p[text() = 'Invalid email address']")

    # PROJECT DETAILS PAGE LOCATORS
    MEMBERS_TEXT_LOCATOR = (By.XPATH, "//main//h3[text()='MEMBERS']")
    PROJECT_CLASS_TEXT_LOCATOR = (By.XPATH, "//div//h3[text()='Class A']")
    PROJECT_NAME_TEXT_LOCATOR = (By.XPATH, "//div//h1[text()='Project 1']")
    PROJECT_FORM_ADD_A_PROJECT_TXT_LOCATOR = (By.XPATH, "//header//h3[text()='ADD A PROJECT']")
    PROJECT_FORM_NAME_LOCATOR = (By.XPATH, "//input[@name='name']")
    PROJECT_FORM_OWNER_LOCATOR = (By.XPATH, "//input[@name='owner']")
    PROJECT_FORM_MEMBERS_LOCATOR = (By.XPATH, "//input[@name='members']")
    PROJECT_FORM_CREATION_DATE_LOCATOR = (By.XPATH, "//input[@name='creationDate']")
    PROJECT_FORM_DESC_LOCATOR = (By.XPATH, "//textarea[@name='description']")
    PROJECT_FORM_TYPE_LOCATOR = (By.XPATH, "//input[@name='type']")
    PROJECT_FORM_STATUS_LOCATOR = (By.XPATH, "//input[@name='status']")
    PROJECT_FORM_COMP_DATE_LOCATOR = (By.XPATH, "//input[@name='completionDate']")
    CREATE_PROJECT_BTN_LOCATOR = (By.XPATH, "//button[@class='submit-button']")
