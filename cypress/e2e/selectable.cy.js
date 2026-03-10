import { SelectablePage } from "../pages/SelectablePage";

describe("Selectable scenarios", () => {
  context("Grid selection", () => {
    beforeEach(() => {
      SelectablePage.visit();
      SelectablePage.gridTab.click();
    });

    it("Selects numbers and validates", () => {
      // Click numbers 2,4,6,8
      SelectablePage.two.click();
      SelectablePage.four.click();
      SelectablePage.six.click();
      SelectablePage.eight.click();

      // Validate selected numbers are highlighted
      SelectablePage.two.should("have.class", "active");
      SelectablePage.four.should("have.class", "active");
      SelectablePage.six.should("have.class", "active");
      SelectablePage.eight.should("have.class", "active");

      // Validate other numbers are NOT highlighted
      SelectablePage.one.should("not.have.class", "active");
      SelectablePage.three.should("not.have.class", "active");
      SelectablePage.five.should("not.have.class", "active");
      SelectablePage.seven.should("not.have.class", "active");
      SelectablePage.nine.should("not.have.class", "active");
    });
  });
});