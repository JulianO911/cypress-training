class Iframe{
    private URL: string;
    private iFrameSelector: string;
    private iFrameCssButtonSelector: string;

    constructor(){
        this.URL = "https://www.w3schools.com/html/html_iframe.asp"
        this.iFrameSelector = "#main h1"
        this.iFrameCssButtonSelector = "a[title='CSS Tutorial']"
    }

    public visit(): void{
        cy.visit(this.URL)
      }
      
    public getFrameTitle(titleElements: string): void{
        cy.iframe().find(this.iFrameSelector).should("contains.text",titleElements)
      }
      
    public  goToCssPageInFrame(titleElements: string): void{
        cy.intercept(
          this.URL,
          {
            delay: 1000,
          }
        ).as('getDelayedStories')
        cy.iframe().find(this.iFrameCssButtonSelector).click()
        cy.iframe().find(this.iFrameSelector).should("contains.text",titleElements)
      }
}

export { Iframe }
