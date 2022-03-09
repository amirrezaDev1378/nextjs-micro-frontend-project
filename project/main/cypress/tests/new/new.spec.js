describe('correct rendering', () => {
  it('should render the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('h1').contains('Welcome to')
  })
})