import { Hobbies } from "./hobbies-enum.page";

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
        this.submit = "form"
    }

    public visitPage(): void{
        cy.visit(this.pageURL)
    }

    public fillForm(personalInformation: any): void{
            /* Get the hobbies number value 
            according to the hobbies passed in the parameters */
            const hobbiesValues = (
                Object.keys(Hobbies).filter((val) =>
                    isNaN(Number(val))) as (keyof typeof Hobbies)[]).map((key, value) => {
                    if(personalInformation['hobbies'].includes(key))
                        return value + 1;
                }).filter(Number);
            cy.get(this.nameSelector).type(personalInformation['name'])
            cy.get(this.lastNameSelector).type(personalInformation['lastName'])
            cy.get(this.emailSelector).type(personalInformation['email'])
            cy.get(this.genderSelector).find(
                `[value='${personalInformation['gender']}']`).click({force: true})
            cy.get(this.dateOfBirthSelector).type(`{selectall} ${personalInformation['dateOfBirth']}`)
            cy.get(this.mobileNumberSelector).type(personalInformation['mobileNumber'])
            hobbiesValues.forEach((item) => {
                cy.get(this.hobbiesSelector).find(`[value='${item}']`).click({force: true})
            })
            cy.get(this.currentAddressSelector).type(personalInformation['currentAddress'])
            this.checkStateCity(personalInformation['state'],personalInformation['city'])


    }

    private checkStateCity(state: string,city: string): void{
        let arrowPressing = "{downArrow}" 
        let arrowPressingCity = "{downArrow}"
            switch(state){
                case "Uttar Pradesh":
                    arrowPressing = arrowPressing.repeat(2);
                    arrowPressingCity = this.checkCityUP(city,arrowPressingCity);
                    break;
                case "Haryana":
                    arrowPressing = arrowPressing.repeat(3);
                    arrowPressingCity = this.checkCityH(city,arrowPressingCity);
                    break;
                case "Rajasthan":
                    arrowPressing = arrowPressing.repeat(4);
                    arrowPressingCity = this.checkCityR(city,arrowPressingCity);
                    break;
                default:
                    arrowPressingCity = this.checkCityNCR(city,arrowPressingCity);

            }
            cy.get(this.stateSelector).click({force: true}).type(`${arrowPressing}{enter}`)
            cy.get(this.citySelector).click({force: true}).type(`${arrowPressingCity}{enter}`)
    }

    private checkCityNCR(city: string, arrowPressing: string): string{
        switch(city){
            case "Gurgaon":
                arrowPressing = arrowPressing.repeat(2);
                break;
            case "Noida":
                arrowPressing = arrowPressing.repeat(3);
                break;
        }
        return arrowPressing;
    }

    private checkCityUP(city: string, arrowPressing: string): string{
            switch(city){
                case "Lucknow":
                    arrowPressing = arrowPressing.repeat(2);
                    break;
                case "Merrut":
                    arrowPressing = arrowPressing.repeat(3);
                    break;
            }
            return arrowPressing;
    }

    private checkCityH(city: string,arrowPressing: string): string{
        switch(city){
            case "Karnal":
                arrowPressing = arrowPressing.repeat(2);
                break;
        }
        return arrowPressing;
    }
                
    private checkCityR(city: string,arrowPressing: string): string{
        switch(city){
            case "Jaiselmer":
                arrowPressing = arrowPressing.repeat(2);
                break;
        }
        return arrowPressing;
    }
    public submitForm(textToCheck: string[]): void{
        cy.get(this.submit).submit().get("#example-modal-sizes-title-lg")
        .each((item, index) => {
            cy.wrap(item).should("have.text", textToCheck[index])
          })
    }
}
export { FillingFormPage }
