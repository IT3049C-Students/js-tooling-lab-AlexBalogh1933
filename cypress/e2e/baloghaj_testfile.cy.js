const { getByAltText } = require(`@testing-library/dom`)

describe(`empty spec`, () => {
  it(`passes`, () => {
    cy.visit(`https://it3049c-students.github.io/js-tooling-lab-AlexBalogh1933/`)
    cy.get(`#username`)
      .type(`Alex`)
    cy.get(`#start-game-button`)
      .click()
    cy.get(`#user-selection`)
      .select(`Rock`)
    cy.get(`#go-button`)
      .click()
    cy.get(`#game-history`)
      .should(`contain`, `Alex`)

  })
})