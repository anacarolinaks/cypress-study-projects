Cypress.Commands.add('login', (email, senha) => { 
    cy.get('#email').type(email);
    cy.get('#senha').type(senha);
    cy.get('.btn').click();
});

Cypress.Commands.add('cadastrar', (nome, email, senha) => { 
    cy.get('#nome').type(nome);
    cy.get('#email').type(email);
    cy.get('#senha').type(senha);
    cy.get('.btn').click();
});

Cypress.Commands.add('verificarContaCadastrada', (novaConta) => {
    cy.get('#conta').find('option').should('have.length', 0).then(() => {
            cy.contains('a', 'Contas').click(); 
            cy.contains('a', 'Adicionar').click(); 
            cy.get('#nome').type(novaConta || 'Conta para teste'); 
            cy.get('.btn').click(); 
            cy.contains('a', 'Movimentação').click(); 
    });
});

Cypress.Commands.add('cadastrar_movimentacao', (dados) => { 
    cy.get('#tipo').select(dados.tipo);
    cy.get('#data_transacao').type(dados.data_transacao);
    cy.get('#data_pagamento').type(dados.data_pagamento);
    cy.get('#descricao').type(dados.descricao);
    cy.get('#interessado').type(dados.interessado);
    cy.get('#valor').type(dados.valor);
    cy.get('#conta').type(dados.conta);
    cy.get(`input[name="status"][value="${dados.situacao}"]`).check();
    cy.get('.btn').click();
});


// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })