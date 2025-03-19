describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://seubarriga.wcaquino.me/cadastro');
  });

  it('(Complemento) Não preencher os campos do formulário e dar mensagem ao usuario', () => {
    
    cy.get('.btn').click();

    cy.contains('Nome é um campo obrigatório').should('be.visible');
    cy.contains('Email é um campo obrigatório').should('be.visible');
    cy.contains('Senha é um campo obrigatório').should('be.visible');
  });

  it('(Cenário 1) Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    cy.cadastrar('Ana Carolina Teste 5','anateste5@email.com','Senha123');

    cy.contains('Usuário inserido com sucesso').should('be.visible');
  });

});
