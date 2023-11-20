/// <reference types="Cypress"/>
import loc from "../support/locatorsBEE";

describe("Realizando fluxo de contas", function () {

  it("Cadastro e Exlcusão de Empresa", function () {
    cy.visit("http://192.168.50.121:8481/login");
    cy.get(loc.LOGIN.USER).type("cy.automacao");
    cy.get(loc.LOGIN.SENHA).type("Cypress01@");
    cy.get(loc.LOGIN.BTN_LOGIN).click();
    cy.get('h4.mb-3').should("contain", "Sua Área de Trabalho");

    cy.contains("a", "Administração").find("span").click();
    cy.contains("span", "Gerais").parent("a").click();
    cy.contains("span", "Empresas").parent("a").click();
    cy.get(loc.BTN_ADD).click();
    cy.get(".page-header").should("contain", "Nova Empresa");
    
    cy.CadEmpresa() // função com o cadastro de empresa mapeado
    cy.get(loc.MESSAGE).should('contain', 'Nova Empresa CY1234 incluída com sucesso!')
    cy.get(loc.DELETE_EMPRESA.BTN_ACOES).click()
    cy.get(loc.DELETE_EMPRESA.BTN_DELETE).click()
    cy.xpath(loc.DELETE_EMPRESA.CAMPO_ALERTA).should('contain.text', 'Você tem certeza?');
    cy.get(loc.DELETE_EMPRESA.BTN_CONFIRMA_DELETE).click()
    cy.get(loc.MESSAGE).should('contain', 'Empresa CY1234 eliminada com sucesso!')
  });
});
