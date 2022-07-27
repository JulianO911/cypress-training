class ProductsList {
    private static addToChartButton: string =  "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    private static proceedToCheckoutButton: string = "[style*='display: block;'] .button-container > a";

    public static addToChart(): void {
        cy.get(ProductsList.addToChartButton).click()
    }

    public static proceedToCheckout(): void {
        cy.get(ProductsList.proceedToCheckoutButton).click()
    }
}

export { ProductsList }
