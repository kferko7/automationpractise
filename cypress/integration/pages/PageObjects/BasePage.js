export class BasePage {
	/*acceptCookies() {
		cy.get('body').then($body => {
			cy.wait(3000)
			if (
				$body
					.text()
					.includes(
						'We use some essential cookies to make this website work. We’d also like to set additional cookies to understand how you use the service and to remember your settings.'
					)
			) {
				// yup found it
				cy.get('#ccc-notify-accept').click()
			} else {
				// nope not here
				cy.get('.ds_button')
			}
		})
	}*/

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
