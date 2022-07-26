describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/");
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    cy.get(
        "#center_column a.button.ajax_add_to_cart_button.btn.btn-default",
    ).click();
    cy.get("[style*='display: block;'] .button-container > a").click();
    cy.get(".cart_navigation span").click();

    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");

    /* click in a button that has id equals to 'SubmitLogin',
    which is the Sign In button */
    cy.get("button[id='SubmitLogin']").click();
    /* Click in the span label which is inside a button label and, which at the
    same time is inside in a class named cart_navigation. This is the 'proceed to 
    checkout button */ 
    cy.get(".cart_navigation button span").click();
    /* click in the checkbutton wich has an id equals to 'cgv' */
    cy.get("#cgv").click();
    cy.get(".cart_navigation button span").click();
    /* Click in the payment button which is in a bankwire class */
    cy.get(".bankwire").click();
    /* Click in the button to confirm the order wich has a span label and is
    inside a label with an id equals to 'cart_navigation' */
    cy.get("#cart_navigation button span").click();
    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
