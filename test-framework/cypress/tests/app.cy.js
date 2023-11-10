// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { todoPage } from '../pages/todoPage/todoPage';

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
			cy.fixture('todo').then((testDataObject) => {
				console.log(testDataObject.name_1);
			});

			cy.get('.new-todo').type('learn testing{enter}').type('be cool{enter}');
			cy.get('.todo-list li').should('have.length', 2);
		});
	});
});
