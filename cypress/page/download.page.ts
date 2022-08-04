
class Download {
    private URL: string
    private downloadButtonSelector: string

    constructor(){
        this.downloadButtonSelector = "#downloadButton"
        this.URL = "https://demoqa.com/upload-download"
    }

    public visitWebSite(): void{
        cy.visit(this.URL)
    }

    public downloadFile(): void{
        cy.get(this.downloadButtonSelector).click()
    }

    public verifyDownload(path: string): void{
        cy.readFile(path).should("exist")
    }
}

export { Download }
