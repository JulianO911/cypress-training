class Modal{
    private tableSelector: String;
    constructor(){
        this.tableSelector = ".modal-body tbody";
    }
    public checkingModal(personalInformation: any): void {
        /* Coverts the json in a bidimensional array and selects only
         the second column (the values) */
        let data = Object.entries(personalInformation).map((item) => { 
            return item[1]
        });
        /* Concats the name with the last name to get the full name
        and deletes the element that contains just the last name */
        data[0] = data[0].concat(" ", data[1]);
        data.splice(1, 1);
        /* Gets the hobbies (it's the only element that it's an array)
        and sorts them and reverse (since the options are in reverse 
        alphabetical order). Then, convert to string joining with a comma */
        data[data.indexOf(data.find(item => item instanceof Array))] =
            data[data.indexOf(data.find(item => item instanceof Array))].sort().reverse().join(", ");
        
        /* Concats the state and city to get the full address and deletes
        the element that contains just the city */
        data[data.length - 2] = data[data.length - 2].concat(" ", data[data.length - 1]);
        data.pop();

        data.forEach((item) => {
            cy.get(`${this.tableSelector} 
            tr:nth-child(${data.indexOf(item)+1}) td:nth-child(2)`).should("contain.text", item)
        })
    }
}

export { Modal }
