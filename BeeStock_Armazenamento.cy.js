/// <reference types="Cypress"/>
import loc from "../support/locatorsBEE";

/*  */

describe("Fluxo de Armazenamento", function () {
    beforeEach(function(){  
        cy.visit("http://192.168.50.121:8481/login");
        cy.get(loc.LOGIN.USER).type("cy.automacao");
        cy.get(loc.LOGIN.SENHA).type("Cypress01@");
        cy.get(loc.LOGIN.BTN_LOGIN).click();
        cy.get('h4.mb-3').should("contain", "Sua Área de Trabalho");
        }) 

    it('Armazenando produto', function(){
       
    // 5656565435 111202327 111202303 
        cy.contains("a", "Movimentação").find("span").click();
        cy.contains("span", "Recebimento").parent("a").click();
        cy.contains("span", "Monitor de Recebimento").parent("a").click(); 
        cy.get(':nth-child(7) > select').select('Conferência Física Finalizada')
        
        cy.contains("span", "Armazenamento").parent("a").click(); 
        cy.get('.input-group > .form-control').type('111202307')
        cy.get('.btn-primary > .fa').click()
        cy.get('.page-header').should('contain', 'Armazenamento')
        cy.get('.input-group #0').click().type('100').wait(500).type('{enter}')
        cy.get('.input-group-append > .btn-primary').click()
        cy.get('.rt-tbody > :nth-child(3)').click()
        //cy.get('.col > .btn-primary').click()
    })

    it.only('Tentando armazenar produto que já foi armazenado', function(){
        cy.contains("a", "Movimentação").find("span").click();
        cy.contains("span", "Recebimento").parent("a").click();
        cy.contains("span", "Monitor de Recebimento").parent("a").click(); 
        cy.get(':nth-child(7) > select').select('Conferência Física Finalizada')
        
        cy.contains("span", "Armazenamento").parent("a").click(); 
        cy.get('.input-group > .form-control').type('111202307')
        cy.get('.btn-primary > .fa').click()
        cy.get('.page-header').should('contain', 'Armazenamento')
        cy.get('.input-group #0').click().type('100').wait(500).type('{enter}')
        cy.get(loc.MESSAGE).should('contain', 'O produto com o Código de Barras 100 não foi encontrado, não esta totalmente conferido ou já se encontra armazenado!')
    })

 
})