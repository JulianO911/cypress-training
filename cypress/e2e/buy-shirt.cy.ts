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
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsList.addToChart();
    productsList.proceedToCheckout();

    shopingCart.proceedToCheckout();

    login.login("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStep.proceedToCheckout();

    shippingStep.checkTerms();
    shippingStep.proceedToCheckout();

    paymentStep.paymentByBankWire();
    paymentStep.proceedToCheckout();
    paymentStep.getConfirmationMessage().should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
