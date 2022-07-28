class PaymentStep{
    private proceedToCheckoutButton: string;
    private paymentButton: string;
    private confirmationMessage: any = cy.get("#center_column > div > p > strong");

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
        return  this.confirmationMessage;
    }
}

export { PaymentStep }
