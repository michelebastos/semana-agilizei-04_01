
/// reference types="cypress"
describe('Twitter Clone - Login', () => {

    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            hostname: 'res.cloudinary.com'
        }, {
            statusCode: 200,
            fixture: 'logo'
        }).as('cloudinary');
    });

    it('Ao autenticar com credencias válidas, dever ser direcionando para o feed', () => {

        cy.login()
        cy.visit('/');

        cy.get('nav ul li')
            .should('be.visible')
            .and('have.length', 6);

        cy.wait(2000)

        //cy.get('[role=alert].Toastify__toast-body').should('have.text', 'You are logged in')
    });

    it('Ao autenticar com password inválido, dever ser direcionando toast "The password does not match Try again" ', () => {

        cy.visit('/');
        cy.senhaInvalida()

        cy.get('[role=alert].Toastify__toast-body').should('have.text', 'The password does not match Try again.')
    });

    it('Ao autenticar com email inválido, dever ser direcionando toast "The email is not registered to an account" ', () => {

        cy.visit('/');

        cy.emailInvalido()

        cy.get('[role=alert].Toastify__toast-body').should('have.text', 'The email is not registered to an account')
    });


});