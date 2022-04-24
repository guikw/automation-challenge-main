#language: en
Feature: Access Pages

Background: Access Section 1 Page
    Given I access Section 1 tab

    Scenario: Section-1 Page
    # When my website return status "200"
    Then I see the Section1 page


