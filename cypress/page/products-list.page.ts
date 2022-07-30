class ProductsList {
    private addToChartButton: string;
    private proceedToCheckoutButton: string;

    constructor(){
        // Just get a span that's inside in a ajax_add_to_cart class button.
        this.addToChartButton = ".ajax_add_to_cart_button[title='Add to cart']";
        // Get the a label that's inside in a label with layer_cart id.
        this.proceedToCheckoutButton = "a[title='Proceed to checkout']";
    }
    public addToChart(): void {
        cy.get(this.addToChartButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { ProductsList }
