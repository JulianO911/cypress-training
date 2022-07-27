class Login {
    private static emailLabel: string = "#email";
    private static passwordLabel: string = "#passwd";
    private static submitButton: string = "#SubmitLogin";

    public static log(email: string,password: string): void {
        cy.get(Login.emailLabel).type(email);
        cy.get(Login.passwordLabel).type(password);
        cy.get(Login.submitButton).click();
    }
}

export { Login }
