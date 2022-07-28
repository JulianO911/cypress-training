class PaymentStep{
    private proceedToCheckoutButton: string;
    private paymentButton: string;
    private confirmationMessage: any;

    constructor(){
        this.proceedToCheckoutButton =  ".cart_navigation span"
        this.paymentButton = ".bankwire"
        this.confirmationMessage = "#center_column > div > p > strong"
    }

    public paymentByBankWire(): void {
        cy.get(this.paymentButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }

    public getConfirmationMessage(): any {
        return  cy.get(this.confirmationMessage);
    }
}

export { PaymentStep }
