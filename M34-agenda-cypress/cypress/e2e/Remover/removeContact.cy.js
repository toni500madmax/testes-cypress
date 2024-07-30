/// <reference types="cypress" />

describe("Teste de remoção de contatos.", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Verifica se há o botão de remoção.", () => {
        cy.get("button.delete").should("have.length", 3)
        cy.screenshot("find-delete-button")
    })

    it("Adicionando um novo contato para depois excluí-lo.", () => {
        cy.get("form > input").first().type("Leroy Chavez")
        cy.get("form input[type='email']").type("leroVez@imeiul.com")
        cy.get("form input[type='tel']").type("30987426356")
        cy.get("form button[type='submit']").click()
        cy.screenshot("add-new-contact-for-delete")

        cy.get("button.delete").last().click()
        cy.screenshot("after-delete-contact")
    })

    it("Exclui o primeiro contato.", () => {
        cy.get("button.delete").first().click()
        cy.screenshot("after-delete-first-contact")
    })
})