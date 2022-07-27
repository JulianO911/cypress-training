class MenuContentPage {
    private static tShirtMenu: string = "#block_top_menu > ul > li:nth-child(3) > a";
    private static menuContentPageURL: string = "http://automationpractice.com/";

    public static visitMenuContentPage(): void {
        cy.visit(MenuContentPage.menuContentPageURL)
    }

    public static goToTShirtMenu(): void {
    cy.get(MenuContentPage.tShirtMenu).click()
  }
}

export { MenuContentPage }
