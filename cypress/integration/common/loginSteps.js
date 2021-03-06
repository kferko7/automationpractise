import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoginPage } from '../pages/PageObjects/LoginPage'
import * as LoginData from '../../fixtures/loginData.json'

const loginPage = new LoginPage()

//1.Positive Login: Login with valid credentials into Login form
Given('I login with valid credentials', () => {
	loginPage.visit()
	loginPage.signUploginButton()
	loginPage.fillUsername(LoginData.username)
	loginPage.fillPassword(LoginData.password)
})

When('I click on Login button', loginButton => {
	loginPage.loginButton()
})

Then('I should be able to login successfully to the Website', () => {
	cy.url().should('include', 'com')
})

And ('I logout', ()=>{
	loginPage.logoutButton()
})

//2.Negative Login: Input invalid username and valid password into Login form
When('I login with invalid username and valid password', () => {
	loginPage.fillUsername(LoginData.invalidusername)
	loginPage.fillPassword(LoginData.password)
})

When('I click on Login button', () => {
	loginPage.loginButton()
})

Then('I should see information Your email or password is incorrect!', () => {
	loginPage.expectErrorWrongUsername()
})

//3.Negative Login: Input invalid password and valid username into Login form
When('I login with invalid password and valid username', () => {
	loginPage.fillUsername(LoginData.username)
	loginPage.fillPassword(LoginData.invalidpassword)
})

When('I click on Login button', () => {
	loginPage.loginButton()
})

Then('I should see information Your email or password is incorrect!', () => {
	loginPage.expectedErrorWrongPassword()
})

//4.Negative Login: Login with empty credentials into Login form
When('I click on Login button', submit => {
	loginPage.loginButton()
})

Then('I should see information Your email or password is incorrect!', () => {
	loginPage.expectedErrorEmptyCredentials()
})

//5 Negative Login:Invalid Username and Invalid Password
When('I login with invalid username and invalid password', () => {
	loginPage.fillUsername(LoginData.invalidusername)
	loginPage.fillPassword(LoginData.invalidpassword)
})

And('I click on Login button', () => {
	loginPage.loginButton()
})

Then('I should see information Your email or password is incorrect!', () => {
	loginPage.expectedErrorWrongCredentials()
})

//6.Negative Login: Empty username and valid password
When('I login with empty username and valid password', () => {
	loginPage.fillPassword(LoginData.password)
})

And('I click on Login button', () => {
	loginPage.loginButton()
})

Then('I should see information Your email or password is incorrect!', () => {
	loginPage.expectedFillUsename()
})

//7.Negative Login: Empty password and valid username
When('I login with empty password and valid username', () => {
	loginPage.fillUsername(LoginData.username)
})

And('I click on Login button', () => {
	loginPage.loginButton()
})

Then('I should see information Your email or password is incorrect!', () => {
	loginPage.expectedFillPassword()
})
