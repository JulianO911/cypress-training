class ShopingCart {
    private proceedToCheckoutButton: string;

    constructor(){
        // There's no need to improve this selector.
        this.proceedToCheckoutButton =  ".cart_navigation span"
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { ShopingCart }
