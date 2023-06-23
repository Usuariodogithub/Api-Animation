describe('Anime page',()=>{
    it('deve carregar a página do anime com os dados da API',()=>{
        cy.inteercept('/api/anime/*',{fixture:'anime.json'}).as('getAnime');
        cy.visit('/anime/1');
         // Verifique se a página de anime é carregada corretamente com dados da API

         cy.wait('@getAnime');
    });
});