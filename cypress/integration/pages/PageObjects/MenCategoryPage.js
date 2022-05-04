import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class MenCategoryPage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/login`)
	}

    selectMenCategory(){
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
    }
    choosejeans(){
        cy.get("a[href='/category_products/6']").click()
    }

    assertMenJeansProducts(){
        cy.get('h2').contains('Men - Jeans Products').should('be.visible')
    }
}