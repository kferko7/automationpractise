import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/login`)
	}

	assertPage() {
		cy.title().should('eq', 'Automation Exercise - Signup / Login')
		cy.url().should('include', 'login')
	}

	signUploginButton() {
		//cy.get("//a[contains(.,'Signup / Login')]").click()
		cy.get("a[href='/login']").click()
	}

	//Method created and Inside located elements
	fillUsername(value) {
		const field = cy.get("input[data-qa='login-email']")
		field.clear()
		field.type(value)
		return this
	}

	fillPassword(value) {
		const field = cy.get("input[placeholder='Password']")
		field.clear()
		field.type(value)
		return this
	}

	loginButton() {
		cy.get("button[data-qa='login-button']")
			.should('be.visible', {
				timeout: 10000,
			})
			.click()
	}

	logoutButton(){
		cy.get("a[href='/logout']").click()
	}

	expectErrorWrongUsername() {
		cy.get(".login-form > form[method='post'] > p").should('be.visible', {
			timeout: 10000,
		})
	}

	expectedErrorWrongPassword() {
		cy.get(".login-form > form[method='post'] > p").should('be.visible', {
			timeout: 10000,
		})
	}

	expectedErrorEmptyCredentials() {
		cy.get(".login-form > form[method='post'] > p").should('be.visible', {
			timeout: 10000,
		})
	}

	expectedErrorWrongCredentials() {
		cy.get(".login-form > form[method='post'] > p").should('be.visible', {
			timeout: 10000,
		})
	}

	expectedFillUsename() {
		cy.get(".login-form > form[method='post'] > p").should('be.visible', {
			timeout: 10000,
		})
	}
	
	expectedFillPassword() {
		cy.get(".login-form > form[method='post'] > p").should('be.visible', {
			timeout: 10000,
		})
	}
	
}
