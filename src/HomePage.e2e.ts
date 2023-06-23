import { describe } from "mocha";

describe('Home page',()=>{
    it('showd load home page',()=>{
        cy.visit('/');
        // Verifique se a página inicial é carregada corretamente
    });
}) ;