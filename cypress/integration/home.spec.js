describe('Cypress', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/home')
        cy.wait(1000)
    })
    it("Left nav text should be 'Home'", () => {
        cy.get(".navbar > .logo > h3").should('have.text', 'Home')
    })
    it("Right nav should contain logout button", () => {
        cy.get(".navbar > .logout > [data-cy=logout-btn]").should('be.visible')
    })
    it("After logout navigate to signin page", () => {
        cy.get('[data-cy=logout-btn]').click().then(() => {
            cy.url().should('eq', 'http://localhost:3000/')
        })
    })
})