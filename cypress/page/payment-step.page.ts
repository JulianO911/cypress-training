class PaymentStep{
    private proceedToCheckoutButton: string;
    private paymentButton: string;
    private static confirmationMessage: any;

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

    public getConfirmationMessage(): any {
        PaymentStep.confirmationMessage = cy.get("#center_column > div > p > strong");
        return  PaymentStep.confirmationMessage;
    }
}

export { PaymentStep }
