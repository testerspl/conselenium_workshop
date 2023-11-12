/// <reference types="cypress" />

describe('breweries list', () => {
	beforeEach(() => {});

	context('breweries list context', () => {
		it('Log breweries list', () => {
			cy.request({
				url: 'https://api.openbrewerydb.org/breweries',
				method: 'GET',
				redirect: true,
				headers: [],
				body: {},
			}).then((res) => {
				if (expect(res.status).to.be.equal(200)) {
					console.log(res.body[0]);
				}
			});
		});
	});
});
