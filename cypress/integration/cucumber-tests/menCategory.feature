Feature: LoginPage

    Background: Positive Login: Login with valid credentials into Login form
        Given I login with valid credentials
        When I click on Login button
        Then I should be able to login successfully to the Website

    Scenario: Choose Item from men Category 
    And I open Men Category so I can see Itemes there
    And I choose Jeans
    Then I verify  I landed on Men Jeans Products page