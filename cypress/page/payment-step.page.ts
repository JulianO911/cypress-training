class PaymentStep{
    private proceedToCheckoutButton: string;
    private paymentButton: string;

    constructor(){
        this.proceedToCheckoutButton =  ".cart_navigation span"
        this.paymentButton = ".bankwire"
    }

    public paymentByBankWire(): void {
        cy.get(this.paymentButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }

    public getConfirmationMessage(): void {
        cy.get("#center_column > div > p > strong").should(
            "have.text",
            "Your order on My Store is complete.",
        );
    }
}

export { PaymentStep }
