import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { MenCategoryPage } from '../pages/PageObjects/MenCategoryPage'
import * as LoginData from '../../fixtures/loginData.json'

const menCategoryPage = new MenCategoryPage()

//1.
And('I open Men Category so I can see Itemes there', () => {
	menCategoryPage.visit()
    menCategoryPage.selectMenCategory()
	
})
And('I choose Jeans', () => {
	menCategoryPage.choosejeans()
	
})
Then('I verify  I landed on Men Jeans Products page', () => {
    menCategoryPage.assertMenJeansProducts()
})
