#language: en
Feature: Access Pages

Background: Access Section 2 Page
    Given I access Section 2 tab

    Scenario: Section 2 - Http: Waiting for network calls ⏳
    Then I see the Section2 page
    Given user sees the Http: Waiting for network calls
    When user clicks the button to trigger an abnormal network call
    Then user assert all step problems for this challenge