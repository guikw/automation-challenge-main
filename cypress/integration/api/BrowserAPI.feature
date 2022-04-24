#language: en
Feature: Section 2

Background: Access Section 2 Page
    Given I access Section 2 tab

    Scenario: Section 2 - Browser API: Opening a new tab 🗂
    Then I see the Section2 page
    Given user sees the Browser API: New tab Title
    When user clicks the button to trigger a new tab opening
    Then user asserts that button is for New tab opening

    Scenario: Section 2 - Browser API: Downloading a file 📂
    Then I see the Section2 page
    Given user sees the Browser API: Downloading Title
    When user clicks the button to trigger a file download
    Then user asserts that button is for a file download