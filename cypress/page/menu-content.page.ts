class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string
  private dressMenu: string;

  constructor() {
<<<<<<< HEAD
<<<<<<< HEAD
      this.tShirtMenu = "#block_top_menu > ul > li > a[title='T-shirts']";
      this.menuContentPageURL = "http://automationpractice.com/"
      this.dressMenu = "#block_top_menu > ul > li > a[title='Dresses']";
=======
        this.tShirtMenu = "#block_top_menu > ul > li > a[title='T-shirts']";
        this.menuContentPageURL = "http://automationpractice.com/"
        this.dressMenu = "#block_top_menu > ul > li > a[title='Dresses']";
>>>>>>> e6b40d675795e41e3e797d8ced6c9b12deeae938
  }
=======
      this.tShirtMenu = "#block_top_menu > ul > li > a[title='T-shirts']";
      this.menuContentPageURL = "http://automationpractice.com/"
      this.dressMenu = "#block_top_menu > ul > li > a[title='Dresses']";
>>>>>>> a0e49ae593b10eac1aa8998e9bd30fafaf888e07

  public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
  }

  public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
  }

  public goToDressMenu(): void {
<<<<<<< HEAD
<<<<<<< HEAD
    cy.get(this.dressMenu).click()
=======
        cy.get(this.dressMenu).click()
>>>>>>> e6b40d675795e41e3e797d8ced6c9b12deeae938
=======
    cy.get(this.dressMenu).click()
>>>>>>> a0e49ae593b10eac1aa8998e9bd30fafaf888e07
}

}

export { MenuContentPage }
