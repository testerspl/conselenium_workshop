// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import 'cypress-failed-log';
import { todoPage } from '../pages/todoPage/todoPage';

let includUrl = 'localhost:4700';
let appUrl = 'http://localhost:4700/';
describe('TodoMVC - React', function () {
	// setup these constants to match what TodoMVC does
	let TODO_ITEM_ONE = 'buy some cheese';
	let TODO_ITEM_TWO = 'feed the cat';
	let TODO_ITEM_THREE = 'book a doctors appointment';

	beforeEach(function () {
		// By default Cypress will automatically
		// clear the Local Storage prior to each
		// test which ensures no todos carry over
		// between tests.
		//
		// Go out and visit our local web server
		// before each test, which serves us the
		// TodoMVC App we want to test against
		//
		// We've set our baseUrl to be:
		// http://localhost:8887 - env variable: 'appOneUrl'
		// http://localhost:8888 - env variable: 'appTwoUrl'
		// http://localhost:8889 - env variable: 'appThreeUrl'
		// https://on.cypress.io/api/visit
		todoPage.visitPage('/');
	});

	afterEach(() => {
		// In firefox, blur handlers will fire upon navigation if there is an activeElement.
		// Since todos are updated on blur after editing,
		// this is needed to blur activeElement after each test to prevent state leakage between tests.
		cy.window().then((win) => {
			win.document.activeElement.blur();
		});
	});

	// Simple example test presentations
	context('Add todo test presentation', function () {
		it('Should add todos', function () {
			cy.url().should('include', includUrl);

			cy.url().then((url) => {
				assert.strictEqual(url, appUrl);
				expect(url).to.equal(appUrl);
			});
			cy.get('.new-todo')
				.type(`Moje pierwsze zadanie}{enter}`)
				.type('be cool')
				.type('{enter}');

			cy.get('.todo-list li').should('have.length', 2);
		});
	});
});
