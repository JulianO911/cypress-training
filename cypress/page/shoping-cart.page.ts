class ShopingCart {
    private proceedToCheckoutButton: string;

    constructor(){
        // There's no need to improve this selector.
        this.proceedToCheckoutButton =  ".cart_navigation a[title='Proceed to checkout']"
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { ShopingCart }
