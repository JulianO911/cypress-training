class ProductsList {
    private addToChartButton: string;
    private proceedToCheckoutButton: string;
    private productElements: string;

    constructor(){
        this.addToChartButton = "[title='Add to cart']";
        this.proceedToCheckoutButton = "a[title='Proceed to checkout']";
        this.productElements = ".product_list .product-container";
    }
    public addToChart(name: string): void {
        this.findProductByName(name).find(this.addToChartButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }

    private findProductByName(name: string): any {
        return cy.get(this.productElements).filter(`:contains('${name}')`)
    }


}

export { ProductsList }
