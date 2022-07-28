class ShippingStep {
    private proceedToCheckoutButton: string;
    private checkButton: string = "#cgv";

    constructor(){
        this.proceedToCheckoutButton =  ".cart_navigation span"
        this.checkButton = "#cgv"
    }
    public checkTerms(): void {
        cy.get(this.checkButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { ShippingStep }
