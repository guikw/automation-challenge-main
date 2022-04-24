#language: en
Feature: Access Pages

Background: Access URL Base
    Given I access my base Website

    Scenario: Welcome Page
    # When my website return status "200"
    Then I see the Welcome page