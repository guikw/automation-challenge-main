// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-real-events';

// API Interactions ||

Cypress.Screenshot.defaults({
    capture: "runner",
});

// Browser API      ||
// NEW TAB          ||
//                  ||

const ELEMENTSNEWTAB = {
    btnNewTab: `(//a[@target='_blank'])`,
};

Cypress.Commands.add("seeBrowserNewTabTitle", () => {
    cy.get("h4")
        .contains("Browser API: Opening a new tab 🗂")
        .should("be.visible");
});

Cypress.Commands.add("buttonTriggerNewTab", () => {
    cy.xpath(ELEMENTSNEWTAB.btnNewTab).parent().invoke('removeAttr', 'target')
    cy.xpath(ELEMENTSNEWTAB.btnNewTab).then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
    });
});

Cypress.Commands.add("assertBtnNewTab", () => {
    cy.xpath(ELEMENTSNEWTAB.btnNewTab)
        .should("have.attr", "href", "/")
        .should("have.attr", "target", "_blank")
        .should("have.attr", "rel", "noopener noreferrer");
});

// Browser API      ||
// DOWNLOAD         ||
//                  ||

const ELEMENTSDLOAD = {
    btnDownload: `(//a[@download='true'])`,
};

Cypress.Commands.add("seeBrowserDownloadTitle", () => {
    cy.get("h4")
        .contains("Browser API: Downloading a file 📂")
        .should("be.visible");
});

Cypress.Commands.add('buttonTriggerDownload', () => {
    let path = 'cypress/downloads/';
    cy.task('removeFiles', '././cypress/downloads/').then(() => {
        cy.xpath(ELEMENTSDLOAD.btnDownload)
            .should("be.visible")
            .click();
        cy.wait(500)
    })
})

Cypress.Commands.add('assertBtnDownload', () => {
    cy.xpath(ELEMENTSDLOAD.btnDownload)
        .should('have.attr', 'download', 'true')
})

//                   ||
// Network Call      ||
//                   ||

const ELEMENTSHTTP = {
    btnNetworkCall: `#network-call-button`,
};

Cypress.Commands.add("seeHttpNetworkTitle", () => {
    cy.get("h4")
        .contains("Http: Waiting for network calls ⏳")
        .should("be.visible");
});

Cypress.Commands.add('buttonTriggerAbnormalCall', () => {
    cy.intercept("GET", "/todos/1").as("getNet");
    cy.get(ELEMENTSHTTP.btnNetworkCall).click()
})

Cypress.Commands.add("assertStatusNetAnswer", () => {
    cy.wait('@getNet', { timeout: 20000 })
        .then((netIntercept) => {
            expect(netIntercept.response.statusCode).to.eq(200);
            expect(netIntercept.response.body.id).to.eq(1)
            expect(netIntercept.response.body.title).to.eq("Abnormally long network call!");
        })
});