import { ShopingCart } from "./shoping-cart.page";

class ShippingStep extends ShopingCart {
    private static checkButton: string = "#cgv";

    public static check(): void {
        cy.get(ShippingStep.checkButton).click()
    }
}

export { ShippingStep }
