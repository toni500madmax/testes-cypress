/// <reference types="cypress" />

describe("Teste de adicionar um novo contato.", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Verifica se há os campos e o botão adicionar.", () => {
        cy.get("form > input").should("have.length", 3)
        cy.get("form button[type='submit']").should("have.length", 1)
        cy.screenshot("find-fields")
    })

    it("Preenche os campos e clica em adicionar.", () => {
        cy.get("form > input").first().type("Manuel Grabert")
        cy.get("form input[type='email']").type("mannBert@uel.com")
        cy.get("form input[type='tel']").type("11994893491")
        cy.get("form button[type='submit']").click()
        cy.screenshot("add-new-contact")
    })
})