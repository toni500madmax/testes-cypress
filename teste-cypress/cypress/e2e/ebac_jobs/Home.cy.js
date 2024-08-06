/// <reference types="cypress" />

describe("testes para Home do Site Ebac_Jobs", () => {
    beforeEach(() => {
        cy.visit("https://ebac-jobs-e2e.vercel.app/")
    })
    it("Deve renderizar 4 vagas", () => {
        cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 4)
    })

    // Digitar e pressionar enter.
    it("Deve filtrar por FullStack", () => {
        cy.get(".FormVagas_campo__E1ppF").type('fullstack {enter}')
    })

    // Digitar e clicar em um botão
    it("Deve filtrar por FullStack", () => {
        cy.get(".FormVagas_campo__E1ppF").type('fullstack')
        cy.get("button[type='submit']").click()
        cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 1)
    })
})