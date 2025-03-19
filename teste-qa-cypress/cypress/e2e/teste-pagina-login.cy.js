describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login');
});

    it('(Complemento) Não preencher os campos do formulário para apresentar erro', () => {
        cy.get('.btn').click();
        cy.contains('Email é um campo obrigatório').should('be.visible');
        cy.contains('Senha é um campo obrigatório').should('be.visible');
    })

    it('(Cenário 2) Preencher os campos do formulário incorretamente para apresentar erro', () => {
        cy.login('anateste5@email.com', 'Senha1234');
        cy.contains('Problemas com o login do usuário').should('be.visible');
    })

    it('(Cenário 3) Preencher os campos do formulário corretamente, acessar o sistema e apresen tar mensagem de boas vindas', () => {
        cy.login('anateste5@email.com', 'Senha123');
        cy.contains('Bem vindo, Ana Carolina Teste 5!').should('be.visible');
    })
})