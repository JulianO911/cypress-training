import {
  Login,
  MenuContentPage,
  ProductsList,
  ShopingCart,
  AddressStep,
  ShippingStep,
  PaymentStep} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsList = new ProductsList();
const shopingCart = new ShopingCart();
const login = new Login();
const addressStep = new AddressStep();
const shippingStep = new ShippingStep();
const paymentStep = new PaymentStep();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // Init
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsList.addToChart();
    productsList.proceedToCheckout();

    // Summary
    shopingCart.proceedToCheckout();

    // Login
    login.log("aperdomobo@gmail.com", "WorkshopProtractor");

    // Address
    addressStep.proceedToCheckout();

    // Shipping
    shippingStep.check();
    shippingStep.proceedToCheckout();

    // Payment
    paymentStep.payment();
    paymentStep.proceedToCheckout();

    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
