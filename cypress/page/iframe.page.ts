class Iframe{
    private URL: string;
    private iFrameSelector: string;
    private iFrameCssButtonSelector: string;


    constructor(){
        this.URL = "https://www.w3schools.com/html/html_iframe.asp"
        this.iFrameSelector = "iframe[title='W3Schools HTML Tutorial']"
        this.iFrameCssButtonSelector = "a[title='CSS Tutorial']"
    }

    public visit(): void{
        cy.visit(this.URL)
      }
      
    public getFrameTitle(): any{
        return cy.iframe(this.iFrameSelector)
      }
      
    public  goToCssPageInFrame(): void{
      cy.iframe(this.iFrameSelector).find(this.iFrameCssButtonSelector).click()

      }
}

export { Iframe }
