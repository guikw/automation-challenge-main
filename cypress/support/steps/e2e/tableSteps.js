import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user sees the DOM Tables Title', () => {
    cy.seeTableTitle();
})

Given('I access Section 1 tab', () => {
    cy.accessSection1();
})

And('local Table is not visible', () => {
    cy.localTableNotVisible();
})

When('user clicks on the button to shows the local Table', () => {
    cy.buttonShowTable();
})

And('local Table is visible', () => {
    cy.localTableIsVisible();
})

Then('table is 5 columns wide', () => {
    cy.tableColumnsWide();
})

And('table is 10 rows long without header', () => {
    cy.tableRowsLong();
})

And('table at least {int} entries have the role {string}', (totalRoles, role) => {
    cy.tableEntriesRole(totalRoles, role);
})

And('table has exactly {int} people older than 60 years old', (peopleTable) => {
    cy.getBiggestDate(peopleTable);
})
