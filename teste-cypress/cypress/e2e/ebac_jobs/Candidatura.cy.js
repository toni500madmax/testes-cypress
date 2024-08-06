/// <reference types="cypress" />

describe("testes para Home do Site Ebac_Jobs", () => {
    beforeEach(() => {
        cy.visit("https://ebac-jobs-e2e.vercel.app/")
    })

    it("Deve levar o usuário até o formulário de candidatura.", () => {
        cy.get(".Vaga_vagaLink__DeFkk").first().click()
        cy.get("input").should("have.length", 7)
        cy.screenshot("tela-inscricao")
    })
    it("Deve preencher o formulário de candidatura.", () => {
        cy.get(".Vaga_vagaLink__DeFkk").first().click()
        cy.get("input[name='nome-completo']").type("Antonio")
        cy.get("input[name='email']").type("tomEbac@gmail.com")
        cy.get("input[name='telefone']").type("4196843793")
        cy.get("input[name='endereco']").type("Rua brasilsilsil")
        cy.get("select[name='escolaridade']").select("outros")
        cy.get("#linux").check()
        cy.get("button[type='submit']").click()

        // verificar mensagem de retorno do tipo alert.
        cy.on("window:alert", (conteudo) => {
            expect(conteudo).contain("Obrigado pela candidatura!")
        })

        cy.screenshot("tela-inscricao-preenchido")
    })
})