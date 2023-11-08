/// <reference types="cypress" />

import loginPageSelectors from './loginPageSelectors';

class LoginPage {
   

	login(email = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
		cy.get(loginPageSelectors.login).type(email);
		cy.get(loginPageSelectors.pass).type(pass);
		cy.get(loginPageSelectors.loginBtn).click();
	}

	checkLoginToApp() {
		cy.url().should('contains', 'http://demo.testarena.pl/');
		cy.get('.col50').eq(0).should('be.visible');
		cy.get('.col50').eq(1).should('be.visible');
	}
}

export const loginPage = new LoginPage();
