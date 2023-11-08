/// <reference types="cypress" />

import { loginPage } from '../pages/loginPage/loginPage';
import { mainPage } from '../pages/mainPage/mainPage';
import { testBasePage } from '../pages/testBasePage/testBasePage';

describe('Example tests for Testarena APP', function () {
	it('Example login test', function () {
		cy.visit('http://demo.testarena.pl/zaloguj');
		loginPage.login();
		loginPage.checkLoginToApp();
	});

	it('Example log out test', function () {
		loginPage.visitPage(Cypress.env('testarenaUrl'));
		loginPage.login();
		mainPage.logOut();
		
		// metoda sprawdzająca elementy na stronie logowania
	});

	context('Example test base tests', function () {
		it.only('Example test add test to test base', function () {
			cy.visit('http://demo.testarena.pl/zaloguj');
			loginPage.login();
			mainPage.goToTestBase();
			testBasePage.addTestToTestBase(1,'Przypadek testowy', testBasePage.randomString(200), testBasePage.randomString(4500), testBasePage.randomString(300))
			testBasePage.checkAddedTest()
		});
	});
});
