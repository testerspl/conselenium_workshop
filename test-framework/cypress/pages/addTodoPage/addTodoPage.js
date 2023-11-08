import BasePage from '../basePage';

class AddTodo extends BasePage {
	constructor() {
		super();
	}

	addTodo(todoName, selector = '.new-todo') {
		cy.get(selector).type(`${todoName}{enter}`);
	}
}

export const addTodo = new AddTodo();
