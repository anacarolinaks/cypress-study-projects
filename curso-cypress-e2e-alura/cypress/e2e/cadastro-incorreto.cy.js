describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode:400, }).as('stubPost')
        });

        it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
            cy.get('[data-test="submit-button"]').click();
            cy.contains('É necessário informar um endereço de email').should('be.visible');
            cy.contains('Crie uma senha').should('be.visible');
            cy.contains('Repita a senha criada acima').should('be.visible');  
        
        })

        it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {
            cy.login('ana@email.com', 'Senha123')
            cy.wait('@stubPost')
            cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
        }) 
})