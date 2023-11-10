/// <reference types="cypress" />

export default class BasePage {
	constructor() {
		this.url = '';
	}

	// IF można zastąpić operatorem logicznym / warunkowym: process.env('ENVIRONMENT') === 'demo' ? zwracamy prawdę : zwracamy fałsz
	getAppUrl() {
		if (Cypress.env('ENVIRONMENT') === 'dev') {
			return Cypress.env('todoDev');
		} else if (Cypress.env('ENVIRONMENT') === 'uat') {
			return Cypress.env('todoUat');
		} else if (Cypress.env('ENVIRONMENT') === 'prod') {
			return Cypress.env('todoProd');
		}
	}

	visitPage() {
		try {
			
			cy.visit(this.url = this.getAppUrl()).url().should('include', this.url);
		} catch (ex) {
			console.log('Visit error with url: \n' + this.url + '\n' + ex);
		}

		return this;
	}

	randomString(len = 10, type = 'letters') {
		type = type && type.toLowerCase();
		let str = '',
			i = 0,
			min = type == 'letters' ? 10 : 0,
			max = type == 'number' ? 10 : 62;
		for (; i++ < len; ) {
			let r = (Math.random() * (max - min) + min) << 0;
			str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
		}
		return str;
	}
}
