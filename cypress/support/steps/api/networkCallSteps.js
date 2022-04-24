import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

//Network Call

Given('user sees the Http: Waiting for network calls', () => {
    cy.seeHttpNetworkTitle();
})

When('user clicks the button to trigger an abnormal network call', () => {
    cy.buttonTriggerAbnormalCall();
})

Then('user assert all step problems for this challenge', () => {
    cy.assertStatusNetAnswer();
})