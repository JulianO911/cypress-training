import { ShopingCart } from "./shoping-cart.page";

class PaymentStep extends ShopingCart {
    private static paymentButton: string = ".bankwire";

    public static payment(): void {
        cy.get(PaymentStep.paymentButton).click()
    }
}

export { PaymentStep }
