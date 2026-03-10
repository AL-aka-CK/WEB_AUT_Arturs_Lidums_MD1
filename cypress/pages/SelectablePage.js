export class SelectablePage {
  static visit() {
    cy.visit("https://demoqa.com/selectable");
  }
  static get gridTab() {
    return cy.get("#demo-tab-grid");
  }
  static get one() {
    return cy.contains(".list-group-item", "One");
  }
  static get two() {
    return cy.contains(".list-group-item", "Two");
  }
  static get three() {
    return cy.contains(".list-group-item", "Three");
  }
  static get four() {
    return cy.contains(".list-group-item", "Four");
  }
  static get five() {
    return cy.contains(".list-group-item", "Five");
  }
  static get six() {
    return cy.contains(".list-group-item", "Six");
  }
  static get seven() {
    return cy.contains(".list-group-item", "Seven");
  }
  static get eight() {
    return cy.contains(".list-group-item", "Eight");
  }
  static get nine() {
    return cy.contains(".list-group-item", "Nine");
  }
}