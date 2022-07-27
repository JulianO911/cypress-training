describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // Init
    cy.visit("http://automationpractice.com/");
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    cy.get(
        "#center_column a.button.ajax_add_to_cart_button.btn.btn-default",
    ).click();

    // Add to chart
    cy.get("[style*='display: block;'] .button-container > a").click();

    // Summary
    cy.get(".cart_navigation span").click();

    // Login
    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");
    cy.get("#SubmitLogin").click();

    // Address
    cy.get(".cart_navigation button span").click();

    // Shipping
    cy.get("#cgv").click();
    cy.get(".cart_navigation button span").click();

    // Payment
    cy.get(".bankwire").click();
    cy.get(".cart_navigation button span").click();

    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
