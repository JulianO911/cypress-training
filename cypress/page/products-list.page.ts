class ProductsList {
    private addToChartButton: string;
    private proceedToCheckoutButton: string;

    constructor(){
        this.addToChartButton = "[title='Add to cart']";
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
