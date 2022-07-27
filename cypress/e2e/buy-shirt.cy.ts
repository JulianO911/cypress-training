import {
  Login,
  MenuContentPage,
  ProductsList,
  ShopingCart,
  AddressStep,
  ShippingStep,
  PaymentStep} from "../page/index";

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // Init
    MenuContentPage.visitMenuContentPage();
    MenuContentPage.goToTShirtMenu();

    ProductsList.addToChart();
    ProductsList.proceedToCheckout();

    // Summary
    ShopingCart.proceedToCheckout();

    // Login
    Login.log("aperdomobo@gmail.com", "WorkshopProtractor");

    // Address
    AddressStep.proceedToCheckout();

    // Shipping
    ShippingStep.check();
    ShippingStep.proceedToCheckout();

    // Payment
    PaymentStep.payment();
    PaymentStep.proceedToCheckout();

    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
