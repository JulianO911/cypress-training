class PaymentStep{
    private proceedToCheckoutButton: string;
    private paymentButton: string;

    constructor(){
        this.proceedToCheckoutButton =  ".cart_navigation span"
        this.paymentButton = ".bankwire"
    }

    public payment(): void {
        cy.get(this.paymentButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { PaymentStep }
