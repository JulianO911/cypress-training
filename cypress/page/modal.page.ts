import { PersonalInformation } from "./interface.page";
class Modal{
    private tableSelector: String;
    constructor(){
        this.tableSelector = ".modal-body tbody";
    }
    public checkingModal(personalInformation: PersonalInformation): void {
        /* Coverts the json in a bidimensional array and selects only
         the second column (the values) */
        let data = Object.entries(personalInformation).map((item) => { 
            return item[1]
        });
        /* Concats the name with the last name to get the full name
        and deletes the element that contains just the last name */
        data[0] = `${personalInformation.name} ${personalInformation.lastName}`
        data.splice(1, 1);
        /* Gets the hobbies and covert it to string */
        data[data.indexOf(personalInformation.hobbies)] = personalInformation.hobbies.join(", ")

        const date = new Date(personalInformation.dateOfBirth);
        const longMonth = date.toLocaleString("default", {
            month: "long"
        });
        const expectedDate = `${date.getDate()} ${longMonth},${date.getFullYear()}`
        data[data.indexOf(personalInformation.dateOfBirth)] = expectedDate

        data.forEach((item) => {
            cy.get(this.tableSelector).should("contain", item)
        })
    }
}

export { Modal }
