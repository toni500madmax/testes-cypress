/// <reference types="cypress" />

describe("teste de edição de contato.", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Verifica se há o botão de edição.", () => {
        cy.get("button.edit").should("have.length", 3)
        cy.screenshot("find-edit-button")
    })

    it("Edita os campo 'nome' do 2º contato.", () => {
        cy.get("button.edit").eq(1).click()
        cy.get("input[type='text']").clear()
        cy.get("input[type='text']").type("Bruna Costa e Silva")
        cy.get("button[type='submit']").click()
        cy.screenshot("edit-nome-secondItem")
    })

    it("Edita o campo 'telefone' do último contato.", () => {
        cy.get("button.edit").last().click()
        cy.get("input[type='tel']").clear()
        cy.get("input[type='tel']").type("11999999999")
        cy.get("button[type='submit']").click()
        cy.screenshot("edit-tel-lastItem")
    })

    it("Edita o campo 'email' do primeiro contato.", () => {
        cy.get("button.edit").first().click()
        cy.get("input[type='email']").clear()
        cy.get("input[type='email']").type("souzaOGian@ebac.edu.com")
        cy.get("button[type='submit']").click()
        cy.screenshot("edit-email-firstItem")
    })
})