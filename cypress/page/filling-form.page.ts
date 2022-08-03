import { PersonalInformation } from "./interface.page";

class FillingFormPage {
    private nameSelector: string
    private lastNameSelector: string
    private emailSelector: String
    private genderSelector: String
    private dateOfBirthSelector: String
    private mobileNumberSelector: String
    private hobbiesSelector: String
    private currentAddressSelector: String
    private pageURL: string
    private submit: string
    private stateSelector: string
    private citySelector: string

    constructor(){
        this.nameSelector = "#firstName"
        this.lastNameSelector = "#lastName"
        this.emailSelector = "#userEmail"
        this.genderSelector = "#genterWrapper .col-md-9"
        this.dateOfBirthSelector = "#dateOfBirthInput"
        this.mobileNumberSelector = "#userNumber"
        this.hobbiesSelector = "#hobbiesWrapper .col-md-9"
        this.currentAddressSelector = "#currentAddress"
        this.stateSelector = "#state svg"
        this.citySelector = "#city svg"
        this.pageURL = "https://demoqa.com/automation-practice-form"
        this.submit = "#submit"
    }

    public visitPage(): void{
        cy.visit(this.pageURL)
    }

    public fillForm(personalInformation: PersonalInformation): void{
            cy.get(this.nameSelector).type(personalInformation.name)
            cy.get(this.lastNameSelector).type(personalInformation.lastName)
            cy.get(this.emailSelector).type(personalInformation.email)
            cy.get(this.genderSelector).find(
                `[value='${personalInformation.gender}']`).click({force: true})
            cy.get(this.dateOfBirthSelector).type(`{selectall} ${personalInformation.dateOfBirth}`)
            cy.get(this.mobileNumberSelector).type(personalInformation.mobileNumber)
            personalInformation.hobbies.forEach((item) => {
                cy.get(this.hobbiesSelector).contains(item).click({force: true})
            })
            cy.get(this.currentAddressSelector).type(personalInformation.currentAddress)
            cy.get(this.stateSelector).type(`${personalInformation.state} {enter}`)
            cy.get(this.citySelector).type(`${personalInformation.city} {enter}`)
        }

    public submitForm(textToCheck: string): void{
        cy.get(this.submit).click({force: true}).get("#example-modal-sizes-title-lg").should("have.text",textToCheck)
    }
}
export { FillingFormPage }
