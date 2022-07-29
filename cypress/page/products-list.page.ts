class ProductsList {
    private addToChartButton: string;
    private proceedToCheckoutButton: string;

    constructor(){
        // Just get a span that's inside in a ajax_add_to_cart class button.
        this.addToChartButton = ".ajax_add_to_cart_button span";
        // Get the a label that's inside in a label with layer_cart id.
        this.proceedToCheckoutButton = "#layer_cart a";
    }
    public addToChart(): void {
        cy.get(this.addToChartButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { ProductsList }
