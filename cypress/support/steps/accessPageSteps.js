import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";


Given('I access my base Website', () => {
    cy.accessBaseWebsite();
})

Given('I access Section 1 tab', () => {
    cy.accessSection1();
})

Given('I access Section 2 tab', () => {
    cy.accessSection2();
})

// When('my website return status {string}', (status) => {
//     expect(response.status).to.eq(+status);
//   })

Then('I see the Welcome page', () => {
    cy.seeWelcomePage();
})

Then('I see the Section1 page', () => {
    cy.seeSection1();
})

Then('I see the Section2 page', () => {
    cy.seeSection2();
})