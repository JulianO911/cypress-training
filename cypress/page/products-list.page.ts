class ProductsList {
    private addToChartButton: string;
    private proceedToCheckoutButton: string;

    constructor(){
        this.addToChartButton = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckoutButton = "[style*='display: block;'] .button-container > a";
    }
    public addToChart(): void {
        cy.get(this.addToChartButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { ProductsList }
