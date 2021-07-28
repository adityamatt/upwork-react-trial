describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/')

    cy.get('input[name="name"]').click().type('Some Name').should('have.value', 'Some Name')

    cy.get('input[name="email"]').click().type('some@email.com')

    cy.get('select[name="department"]').select('core').should('have.value', 'core')

    cy.get('select[name="course"]').select('git-it').should('have.value', 'git-it')

    cy.get('input[type="submit"]').click()

    cy.wait(5000).get('li').should('contain', 'Some Name - some@email.com - core - git-it')
    //In Actual there would be a network call which would take some time, so we can us cy.intercept to create an alias for that
    // Network call and add a timeout as well to fail the test case purposefully as ideally a user should not have to wait more than
    // fixed period as that would be a degraded experience
  })
})
