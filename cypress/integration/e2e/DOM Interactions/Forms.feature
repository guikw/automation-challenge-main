#language: en
Feature: Section 1

Background: Access Section 1 Page
    Given I access Section 1 tab

    Scenario: Section 1 - DOM: Forms
    Then I see the Section1 page
    Given user sees the DOM Forms Title
    And local Form is not visible
    When user clicks on the button to shows the local Form
    And local Form is visible
    Then fill in the name "Test" and age 20 inputs
    And select "Female" from the select option
    And tick the Nurse checkbox
    And click on the "Submit" button