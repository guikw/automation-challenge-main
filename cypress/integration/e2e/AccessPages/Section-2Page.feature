#language: en
Feature: Access Pages

Background: Access Section 2 Page
    Given I access Section 2 tab

    Scenario: Section-2 Page
    # When my website return status "200"
    Then I see the Section2 page