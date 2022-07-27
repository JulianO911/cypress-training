class ShopingCart {
    private static proceedToCheckoutButton: string =  ".cart_navigation span";

    public static proceedToCheckout(): void {
        cy.get(ShopingCart.proceedToCheckoutButton).click()
    }
}

export { ShopingCart }
