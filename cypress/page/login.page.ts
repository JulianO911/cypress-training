class Login {
    private static emailLabel: string = "#email";
    private static passwordLabel: string = "#passwd";
    private static submitButton: string = "#SubmitLogin";

    public static emailInput(email: string): void {
        cy.get(Login.emailLabel).type(email);
    }

    public static passwordInput(password: string): void {
        cy.get(Login.passwordLabel).type(password);
    }
    public static submit(): void {
        cy.get(Login.submitButton).click();
  }
}

export { Login }
