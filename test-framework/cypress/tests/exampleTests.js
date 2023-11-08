// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import { addTodo } from '../pages/addTodoPage/addTodoPage';

describe.only('Example app todo tests', function () {
	beforeEach(function () {
		cy.visit(Cypress.env('appUrl'));
	});

	afterEach(() => {
		cy.window().then((win) => {
			win.document.activeElement.blur();
		});
	});

	context('Check add todo example', function () {
		// Wykorzystanie Page Object
		it('Add todo with random proper name', function () {
			addTodo.addTodo(`${addTodo.randomString(15)}{enter}`);
		});

		// Wykorzystanie komendy Cypress
		it('Add todo with random proper name', function () {
			cy.todoWithRandomCharacters(150);
		});
	});
});

// describe('Example tests for Testerzy.pl APP', function () {
// 	// setup these constants to match what TodoMVC does
// 	let TODO_ITEM_ONE = 'buy some cheese';
// 	let TODO_ITEM_TWO = 'feed the cat';
// 	let TODO_ITEM_THREE = 'book a doctors appointment';

// 	beforeEach(function () {
// 		// By default Cypress will automatically
// 		// clear the Local Storage prior to each
// 		// test which ensures no todos carry over
// 		// between tests.
// 		//
// 		// Go out and visit our local web server
// 		// before each test, which serves us the
// 		// TodoMVC App we want to test against
// 		//
// 		// We've set our baseUrl to be:
// 		// http://localhost:8887 - env variable: 'appOneUrl'
// 		// http://localhost:8888 - env variable: 'appTwoUrl'
// 		// http://localhost:8889 - env variable: 'appThreeUrl'
// 		// https://on.cypress.io/api/visit
// 		cy.visit(Cypress.env('appUrl'));
// 	});

// 	afterEach(() => {
// 		// In firefox, blur handlers will fire upon navigation if there is an activeElement.
// 		// Since todos are updated on blur after editing,
// 		// this is needed to blur activeElement after each test to prevent state leakage between tests.
// 		cy.window().then((win) => {
// 			win.document.activeElement.blur();
// 		});
// 	});

// 	// Simple example test presentations
// 	context('Check trainings elements on main site', function () {
// 		let checkTrainingsElements = (mainContenerSelector, freeSeatsSelector) => {
// 			cy.get(mainContenerSelector).should('be.visible');
// 			cy.get(freeSeatsSelector).should('be.visible');
// 		};

// 		it('Popular training should be visible', function () {
// 			checkTrainingsElements('.col-12.p-3', '.col-auto.training-free-seats');
// 		});

// 		it('Popular training should be visible', function () {
// 			checkTrainingsElements(
// 				'div.position-relative:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)',
// 				'.col-auto.training-free-seats',
// 				'div.position-relative:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1) > img:nth-child(1)'
// 			);
// 		});
// 	});
// });
