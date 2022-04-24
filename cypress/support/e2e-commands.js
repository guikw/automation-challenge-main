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


// Access Pages ||

Cypress.Screenshot.defaults({
    capture: "runner",
});

Cypress.Commands.add("accessBaseWebsite", () => {
    cy.visit(Cypress.env("baseUrl"));
});

// cy.intercept({
//     method: 'GET',
//     url: '/',
//     hostname: 'localhost',
//   })
// })

Cypress.Commands.add("accessSection1", () => {
    cy.visit(Cypress.env("UrlSection1"));
});

Cypress.Commands.add("accessSection2", () => {
    cy.visit(Cypress.env("UrlSection2"));
});

//

const welcomeText = "Start here!";

Cypress.Commands.add("seeWelcomePage", () => {
    cy.get(".active").contains("welcomeText").should("not.be.empty");
});

Cypress.Commands.add("seeSection1", () => {
    cy.get(".active").contains("Section 1").should("not.be.empty");
});

Cypress.Commands.add("seeSection2", () => {
    cy.get(".active").contains("Section 2").should("not.be.empty");
});

// DOM Interactions ||
// Tables           ||

const ELEMENTSTABLE = {
    table: "#alaya-table",
    tableShowBtn: "#table-toggle-button",
};

Cypress.Commands.add("seeTableTitle", () => {
    cy.get("h4").contains("DOM: Tables 🗓").should("be.visible");
});

//<table id="alaya-table" data-test="user-table" style="display: table;
Cypress.Commands.add("localTableNotVisible", () => {
    cy.get(ELEMENTSTABLE.table).should("not.be.visible");
});

//<button id="table-toggle-button" data-test="table-toggle-button" class="table-toggle-button">
Cypress.Commands.add("buttonShowTable", () => {
    cy.get(ELEMENTSTABLE.tableShowBtn).contains("Show table").click();
});

Cypress.Commands.add("localTableIsVisible", () => {
    cy.get(ELEMENTSTABLE.table).should("be.visible");
});

Cypress.Commands.add("tableColumnsWide", () => {
    cy.get("table")
        .find(".table-header > th")
        .should(($th) => {
            expect($th).to.have.length(5);
        });
    // const itemCount = Cypress.length;
    //     cy.log(itemCount)
});

Cypress.Commands.add("tableRowsLong", () => {
    cy.get("table")
        .find("tr")
        .not(".table-header")
        .should(($tr) => {
            expect($tr).to.have.length(10);
        });
});

Cypress.Commands.add("tableEntriesRole", (totalRoles, role) => {
    cy.get(ELEMENTSTABLE.table)
        .find("tr")
        .not(".table-header")
        .should((tr) => {
            // console.log($tr)
            let counterRoles = 0;

            for (let i = 0; i <= tr.length - 1; i++) {
                if (tr[i].cells[4].innerText === role) {
                    counterRoles++;
                    console.log(tr[i].cells[4].innerText);
                }
            }
            console.log(counterRoles);
            expect(counterRoles).to.be.at.least(totalRoles);
        });
});

Cypress.Commands.add("getBiggestDate", (peopleTable) => {
    cy.get("table")
        .find("tr")
        .not(".table-header")
        .should((tr) => {
            let contador = 0;
            let today = new Date();
            let sixthYears = today.setFullYear(today.getFullYear() - 60);
            for (let i = 0; i <= tr.length - 1; i++) {
                if (Date.parse(tr[i].cells[3].innerText) <= sixthYears) {
                    contador++;
                    console.log(tr[i].cells[3].innerText);
                }
            }
            expect(contador).eq(peopleTable);
        });
});

// DOM Interactions ||
// Forms            ||

const ELEMENTSFORM = {
    form: `#alaya-form`,
    formShowBtn: `#form-toggle-button`,
    name: `#fullName`,
    age: `[data-test="age-input"]`,
    gender: '[data-test="gender-select"]',
    nurseCheckbox: `[data-test="nurse-input"]`,
    submitButton: `[data-test="submit-btn"]`,
};

Cypress.Commands.add("seeFormsTitle", () => {
    cy.get("#arch").contains("DOM: Forms 📝").should("be.visible");
});

Cypress.Commands.add("localFormNotVisible", () => {
    cy.get(ELEMENTSFORM.form).should("not.be.visible");
});

Cypress.Commands.add("buttonShowForm", () => {
    cy.get(ELEMENTSFORM.formShowBtn).contains("Show Form").click();
});

Cypress.Commands.add("localFormIsVisible", () => {
    cy.get(ELEMENTSFORM.form).should("be.visible");
});

//assert that both inputs are filled
Cypress.Commands.add("formNameAndAge", (formName, formAge) => {
    cy.get("form")
        .find(ELEMENTSFORM.name)
        .clear()
        .type(formName)
        .get(ELEMENTSFORM.age)
        .type(formAge);
    cy.get(ELEMENTSFORM.name).invoke("val").should("not.be.empty");
    cy.get(ELEMENTSFORM.age).invoke("val").should("not.be.empty");
});

//assert that the value is "female"
Cypress.Commands.add("formSelectGender", (formGender) => {
    cy.get("form").find(`#gender`).select(formGender);
    cy.get(ELEMENTSFORM.gender).should("have.value", "female");
});

//assert that the value "nurse" is true
Cypress.Commands.add("formTickSelect", (formCheckbox) => {
    cy.get("form").find(ELEMENTSFORM.nurseCheckbox).check(formCheckbox);
    cy.get(ELEMENTSFORM.nurseCheckbox).should("be.checked");
    cy.on(ELEMENTSFORM.nurseCheckbox, (formCheckbox) => {
        expect(formCheckbox).to.be.true;
    });
});

//assert that there is an alert window showing with the text "Form submitted!"
Cypress.Commands.add("formSubmitClick", (formSubmButton) => {
    cy.get("form")
        .find(ELEMENTSFORM.submitButton)
        .contains(formSubmButton)
        .click();
    cy.on("window:alert", (t) => {
        expect(t).to.contains("Form submitted!");
    });
});
