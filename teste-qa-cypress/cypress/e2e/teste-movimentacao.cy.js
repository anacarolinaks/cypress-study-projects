describe('Página de Movimentação', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/');
        cy.login('anateste5@email.com', 'Senha123');
});

    it('Acessar o menu Criar Movimentação e realizar a criação de duas movimentações', () => {
        const movimentacao1 = {
            tipo: 'REC', 
            data_transacao: '08/02/2025', 
            data_pagamento:  '07/02/2025', 
            descricao: 'Recebimento 1', 
            interessado: 'Ana', 
            valor: '250', 
            conta: '2378808', 
            situacao: '1'
        };

        const movimentacao2 = {
            tipo: 'DESP', 
            data_transacao: '08/02/2025', 
            data_pagamento:  '07/02/2025', 
            descricao: 'Pagamento 1', 
            interessado: 'Ana', 
            valor: '200', 
            conta: '2378808', 
            situacao: '0'
        };

        cy.contains('a', 'Movimentação').click();
        cy.verificarContaCadastrada();
        cy.cadastrar_movimentacao(movimentacao1);
        cy.contains('Movimentação adicionada com sucesso!').should('be.visible');
        cy.cadastrar_movimentacao(movimentacao2);
        cy.contains('Movimentação adicionada com sucesso!').should('be.visible');
    });

    it ('Acessar o menu resumo mensal para verificar movimentações', () => {
        cy.contains('a', 'Resumo Mensal').click();
        cy.contains('Recebimento 1').should('be.visible');
        cy.contains('Pagamento 1').should('be.visible');

    });

});