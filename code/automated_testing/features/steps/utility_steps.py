from behave import *
from code.automated_testing.utils.utils import delay_execution


@then(u'I wait for "{seconds}" seconds')
def i_should_see_the_about_us_section(context, seconds):
    context.logger.info(f'I wait for "{seconds}" seconds')
    delay_execution(int(seconds))
