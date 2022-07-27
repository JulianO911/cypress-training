class Login {
    private emailLabel: string;
    private passwordLabel: string;
    private submitButton: string;

    constructor(){
        this.emailLabel = "#email";
        this.passwordLabel = "#passwd";
        this.submitButton = "#SubmitLogin";
    }

    public log(email: string,password: string): void {
        cy.get(this.emailLabel).type(email);
        cy.get(this.passwordLabel).type(password);
        cy.get(this.submitButton).click();
    }
}

export { Login }
