import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

//New tab

Given('user sees the Browser API: New tab Title', () => {
    cy.seeBrowserNewTabTitle();
})

When('user clicks the button to trigger a new tab opening', () => {
    cy.buttonTriggerNewTab();
})

Then('user asserts that button is for New tab opening', () => {
    cy.assertBtnNewTab();
})

//Download

Given('user sees the Browser API: Downloading Title', () => {
    cy.seeBrowserDownloadTitle();
})

When('user clicks the button to trigger a file download', () => {
    cy.buttonTriggerDownload();
})

Then('user asserts that button is for a file download', () => {
    cy.assertBtnDownload();
})
