describe('Twitter Clone - Tweet', () => {

    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            hostname: 'res.cloudinary.com'
        }, {
            statusCode: 200,
            fixture: 'logo'
        }).as('cloudinary');
    });

    it('Desafio aula 3', () => {
        
        cy.login()
        cy.visit('/');
        cy.get('nav ul li')
            .should('be.visible')
            .and('have.length', 6);
        
            cy.get('[type=text]').type('Acelerar meu conhecimento em automação de testes')
            cy.get('button[class="sc-fzplWN pDAkO"]').click()

    });
});