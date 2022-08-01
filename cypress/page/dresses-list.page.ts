class DressesListPage {

    private dressItem: string;
    private dressName: string;
  
    constructor() {
      this.dressItem = ".product-container"
      this.dressName = `${this.dressItem} .product-name`
    }
  
    public getDressProducts(): any {
      return cy.get(this.dressItem)
    }
  
    public validateItemsNumber(itemsNumber: number): void {
      cy.get(this.dressItem).should("have.length", itemsNumber)
    }
  
    public validateItemsNames(names: string[]): void {
      cy.get(this.dressName).each((item, index) => {
        cy.wrap(item).should("contain.text", names[index])
      })
    }
  
  }
  
  export {DressesListPage}
