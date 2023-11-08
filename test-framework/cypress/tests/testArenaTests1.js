/// <reference types="cypress" />
import { mainPage } from "../pages/mainPage/mainPage";
import { trainingReservationPage } from "../pages/trainingsReservationPage/trainingsReservationPage"; 

describe('Demo TestArena Tests', function () {
    
	it('Demo login test', function () {
		let testArenaDemoPage = 'http://demo.testarena.pl/zaloguj';
		cy.visit(testArenaDemoPage);
		cy.url().should('include', 'demo.testarena');
		cy.get('#email').type('administrator@testarena.pl');
		cy.get('#password').type('sumXQQ72$L');
		cy.contains('Zaloguj').click();
		cy.url().should('include', 'http://demo.testarena.pl');

		cy.url().then((url) => {
			assert.strictEqual(url, 'http://demo.testarena.pl/');
            
			expect(url).to.equal('http://demo.testarena.pl/');

            return url

            
		})
	});

    it('Demo false login test', function () {

        cy.visit('/')      


        cy.url().should('include', 'demo.testarena');
		cy.get('#email').type('hovhsoi@&*&^^.////');
		cy.get('#password').type('^&^(696896HJKB09()&()$L');
		cy.get('.button-front').click();
		cy.url().should('include', '/logowanie');
    })





    

    it.only('Demo testerzy.pl test', function () {

        cy.visit('/')
        cy.url().should('include', 'https://testerzy.pl/');
		cy.get('[data-test="menu-exams"]').click();
		cy.get('.navbar-nav > li:nth-child(3) > a:nth-child(1)').click()
		cy.url().should('include', '/uslugi');
    })




    it.only('Demo testerzy.pl reservation test', function () {

        mainPage.visitPage()
		mainPage.goToPopularTraining()
		mainPage.reservTraining()

        trainingReservationPage.checkReservationFormElements()

    })

    it('Demo testerzy.pl reservation test', function () {

        cy.visit('/')
        cy.url().should('include', 'https://testerzy.pl/');
		cy.get('body > section.article-section.pt-0.mt-5.mb-0.mb-md-5.pb-5 > div > div > div.col-12.col-xl-9.page_content.page-article.pt-0.pr-3.pr-md-5.order-2.order-lg-1 > div.row.job-offer-section.job-list.pt-2.my-2.order-1.order-md-2 > div.col-12.text-center.mt-0.mt-md-3 > a').click();
        cy.url().should('include', '/oferty-pracy');
        cy.get('body > div.not-fullscreen.background.parallax > div.content-a.container > div > h1').should('have.text', 'Oferty pracy');
        cy.get('.content-b.text-left')
        .find('h1')
        .invoke('text')
        .then((text) => {             
            assert.strictEqual(text, "Oferty pracy")
        })
        cy.get('body > section.article-section.job-offer-section.job-list.py-2.py-md-5.mt-4 > div > div > div > div:nth-child(2)')
        .children()
        .each((element, index, array) => {
            cy.log(element.length)
            cy.wrap(element)
                .should('exist')
                .and('be.visible')
        });
        // cy.get('.widget-price.rounded-top').should('be.visible');
        // cy.get('.thumbnail-article.training-calendar.mb-0').should('be.visible');
    })

});
