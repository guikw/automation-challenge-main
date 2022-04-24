#language: en
Feature: Section 1

Background: Access Section 1 Page
    Given I access Section 1 tab

    Scenario: Section 1 - DOM: Tables
    Then I see the Section1 page
    Given user sees the DOM Tables Title
    And local Table is not visible
    When user clicks on the button to shows the local Table
    And local Table is visible
    Then table is 5 columns wide
    And table is 10 rows long without header
    And table at least 5 entries have the role "user"
    And table has exactly 3 people older than 60 years old
    