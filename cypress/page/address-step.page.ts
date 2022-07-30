class AddressStep{
    private proceedToCheckoutButton: string;

    constructor(){
        this.proceedToCheckoutButton =  ".cart_navigation button[type='submit']"
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { AddressStep }
