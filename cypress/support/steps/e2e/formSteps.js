import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user sees the DOM Forms Title', () => {
    cy.seeFormsTitle();
})

Given('I access Section 1 tab', () => {
    cy.accessSection1();
})

And('local Form is not visible', () => {
    cy.localFormNotVisible();
})

When('user clicks on the button to shows the local Form', () => {
    cy.buttonShowForm();
})

And('local Form is visible', () => {
    cy.localFormIsVisible();
})

Then('fill in the name {string} and age {int} inputs', (formName, formAge) => {
    cy.formNameAndAge(formName, formAge);
})

And('select {string} from the select option', (formGender) => {
    cy.formSelectGender(formGender);
})

And('tick the Nurse checkbox', (formCheckbox) => {
    cy.formTickSelect(formCheckbox);
})

And('click on the {string} button', (formSubmButton) => {
    cy.formSubmitClick(formSubmButton);
})

