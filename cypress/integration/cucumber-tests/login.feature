Feature: LoginPage

    Background: Positive Login: Login with valid credentials into Login form
        Given I login with valid credentials
        When I click on Login button
        Then I should be able to login successfully to the Website
        And I logout 
         
    Scenario: Negative Login: Input invalid username and valid password
        When I login with invalid username and valid password
        And I click on Login button
        Then I should see information Your email or password is incorrect!

    Scenario: Negative Login: Input invalid password and valid username into Login form
        When I login with invalid password and valid username
        And I click on Login button
        Then I should see information Your email or password is incorrect!
    #Todo
    Scenario: Negative Login: Login with empty credentials into Login form
        When I click on Login button
        Then I should be asked to enter credentials

    Scenario: Negative Login: Login with invalid username and invalid password
        When I login with invalid username and invalid password
        And I click on Login button
        Then I should not be able to login and see information Your email or password is incorrect!

    Scenario: Negative Login: empty username and valid password
        When I login with empty username and valid password
        And I click on Login button
        Then I should not be able to login and see information Your email or password is incorrect!

    Scenario: Negative Login: empty password and valid username
        When I login with empty password and valid username
        And I click on Login button
        Then I should not be able to login and see information Your email or password is incorrect!
