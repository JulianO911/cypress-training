import {
  Login,
  MenuContentPage,
  ProductsList,
  ShopingCart,
  AddressStep,
  ShippingStep,
  PaymentStep} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productsList: ProductsList;
  let shopingCart: ShopingCart;
  let login: Login;
  let addressStep: AddressStep;
  let shippingStep: ShippingStep;
  let paymentStep: PaymentStep;
  before(() => {
    menuContentPage = new MenuContentPage();
    productsList = new ProductsList();
    shopingCart = new ShopingCart();
    login = new Login();
    addressStep = new AddressStep();
    shippingStep = new ShippingStep();
    paymentStep = new PaymentStep();
  });

  it("then the t-shirt should be bought", () => {
    const orderCompleteText = ["Your order on My Store is complete."];
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
    paymentStep.getConfirmationMessage(orderCompleteText);
  });
});
