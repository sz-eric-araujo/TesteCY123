/// <reference types="Cypress"/>
import loc from "../support/locatorsBEE";

describe("Cadastro, edição e exclusão de filiais", function () {
it('Cadastro de Filiais', function(){
    cy.visit("http://192.168.50.121:8481/login");
    cy.get(loc.LOGIN.USER).type("cy.automacao");
    cy.get(loc.LOGIN.SENHA).type("Cypress01@");
    cy.get(loc.LOGIN.BTN_LOGIN).click();
    cy.get("h1.mb-3").should("contain", "Olá, Eric Araujo!");

    cy.contains("a", "Administração").find("span").click();
    cy.contains("span", "Gerais").parent("a").click();
    cy.contains("span", "Filiais").parent("a").click();

    cy.get(loc.BTN_ADD).click()
    cy.CadFilial() 
})
})