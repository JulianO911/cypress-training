class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string

  constructor() {
      /* Now the selector searchs the last li in Ul and and a label
        that is inside the li */
      this.tShirtMenu = "#block_top_menu > ul > li:last-child a";
      this.menuContentPageURL = "http://automationpractice.com/"
  }

  public visitMenuContentPage(): void {
      cy.visit(this.menuContentPageURL)
  }

  public goToTShirtMenu(): void {
      cy.get(this.tShirtMenu).click()
  }
}

export { MenuContentPage }
