
class Upload {
    private URL: string;
    private selectFileSelector: string;
    private uploadFileSelector: string;
    private titleNameSelector: string;

    constructor(){
        this.URL = "https://the-internet.herokuapp.com/upload"
        this.selectFileSelector = "#file-upload"
        this.uploadFileSelector = "#file-submit"
        this.titleNameSelector = "#uploaded-files"
    }

    public visitWebSite(): void{
        cy.visit(this.URL)
    }

    public uploadFile(fileName: string): void{
        cy.get(this.selectFileSelector).attachFile(fileName)
        cy.get(this.uploadFileSelector).click()
    }

    public verifyTitle(data: string): void {
        cy.get(this.titleNameSelector).should("contains.text",data)
    }
}

export {Upload};
