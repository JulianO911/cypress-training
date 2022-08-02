class PaymentStep{
    private proceedToCheckoutButton: string;
    private paymentButton: string;
    private confirmationMessage: any;

    constructor(){
        this.proceedToCheckoutButton =  ".cart_navigation button[type='submit']"
        this.paymentButton = ".bankwire"
        this.confirmationMessage = "#center_column > div > p > strong"
    }

    public paymentByBankWire(): void {
        cy.get(this.paymentButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }

    public getConfirmationMessage(orderCompleteText: string[]): void {
        cy.get(this.confirmationMessage).each((item, index) => {
            cy.wrap(item).should("contain.text", orderCompleteText[index])
        });
    }
}

export { PaymentStep }
