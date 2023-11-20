import BasePage from '../basePage';
// let name = (params) => {

//  }
// function name(params) {

// }

class TodoPage extends BasePage {
	constructor() {
		super();
	}

	getSelectors(elementPosition) {
		return {
			'new-Todo': '.new-todo',
			todoList: '.todo-list li',
			footerTab: `.filters > li:nth-child(${elementPosition})>a`,
		};
	}

	addTodo(todoname = 'Moje pierwsze zadanie') {
		cy.get(this.getSelectors()['new-Todo']).type(todoname).type(`{enter}`);

		return this;
	}

	checkTodoList(todoListLength = 2) {
		cy.get('.todo-list li').should('have.length', todoListLength);

		return this;
	}

	/**
	 *
	 * @param {*} tabSelector - Number tab position
	 * @param {*} tabClass - element class / String
	 */
	checkTabSelected(tabSelector = 1, tabClass = 'selected') {
		cy.get(this.getSelectors(tabSelector).footerTab)
			// cy.get(todoPageSelectors.footerTabs + `:nth-child(${elementPosition})>a`)
			.click()
			.should('be.visible')
			.and('have.class', tabClass);

		return this;
	}

	markAsCompleted(checkPosition = 0, todoListLength = 1) {
		cy.get(this.getSelectors().todoList)
		// Zamiast funkcji eq możemy wykorzystać funkcję contains i regex
			.eq(checkPosition)
			.find('.toggle')
			.check()
			.should('be.checked');
		return this;
	}

	checkTodoCompleted(
		tabSelector = 5,
		checkPosition = 0,
		tabClass = 'selected',
		todoListLength = 1,
		completedClass = 'completed'
	) {
		this.checkTabSelected(tabSelector, tabClass);
		this.checkTodoList(todoListLength);
		cy.get(this.getSelectors().todoList)
			.eq(checkPosition)
			.should('have.class', completedClass)
			.and('have.css', 'text-decoration-line');
		return this;
	}
}

export const todoPage = new TodoPage();
