describe("Check for index.html on localhost:5500", () => {
  it("Visits localhost", () => {
    cy.visit("localhost:5500");
    cy.document().its("contentType").should("equal", "text/html");
    cy.get(".logo").should("have.text", "Hacker Escape Rooms");
  });
});

describe("Check for index.html on GitHubPages deployed ESC site", () => {
  it("Visits ESC site", () => {
    cy.visit("https://christerresin.github.io/esc_v2/");
    cy.get(".logo").should("have.text", "Hacker Escape Rooms");
    cy.document().its("contentType").should("eq", "text/html");
  });
});

describe("Check if challenges are loaded on online challenges page", () => {
  it("Visits ESC challenges page", () => {
    cy.visit("https://christerresin.github.io/esc_v2/");
    cy.get(".main-menu")
      .get(".play-online")
      .click()
      .wait(2000)
      .get(".challenges-list")
      .get(".challenges-item")
      .should("have.length.greaterThan", 1);
  });
});
