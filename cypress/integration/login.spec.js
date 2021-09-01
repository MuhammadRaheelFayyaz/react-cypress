describe('Cypress', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it("Left nav text should be 'Sing in please'", () => {
        cy.get(".navbar > .logo > h3").should('have.text', 'Sing in please')
    })
    it("Is Username field exist", () => {
        cy.get("[data-cy=username-input]").should('be.visible')
    })
    it("Is Password field exist", () => {
        cy.get("[data-cy=password-input]").should('be.visible')
    })
    it("Is Login button exist", () => {
        cy.get("[data-cy=login-btn]").should('be.visible')
    })
    it("Is Cancel button exist", () => {
        cy.get("[data-cy=cancel-btn]").should('be.visible')
    })
    it('Is Error messaage show on wrong username or password ', () => {
        cy.get("[data-cy=username-input]").type('asdf')
        cy.get("[data-cy=password-input]").type('asdf')
        cy.get("[data-cy=login-btn]").click()
    })
    it('Is form clear on cancel button click ', () => {
        cy.get("[data-cy=username-input]").type('asdf')
        cy.get("[data-cy=password-input]").type('asdf')
        cy.get("[data-cy=cancel-btn]").click()
    })
    it("Is url exist /home after login ", () => {
        cy.get("[data-cy=username-input]").type('admin')
        cy.get("[data-cy=password-input]").type('admin')
        cy.get("[data-cy=login-btn]").click().then(() => {
            cy.url().should('include', "/home")
        })
    })
})