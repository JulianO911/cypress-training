import {
  FillingForm,
  Modal,
} from "../page/index";

describe.only("filling form verification", () => {
  let fillingForm: FillingForm;
  let modal: Modal;
  before(() => {
    fillingForm = new FillingForm();
    modal = new Modal();
  });
  it("should fill the form", () => {
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      mobileNumber: "3656589156",
      dateOfBirth: "27 July,2016",
      subjects: "",
      hobbies: ["Music", "Reading"],
      picture: "",
      currentAddress: "Av siempreViva # 123",
      state: "Rajasthan",
      city: "Jaiselmer",
    };
    const confirmationText = ["Thanks for submitting the form"];
    fillingForm.visitPage();
    fillingForm.fillForm(personalInformation);
    fillingForm.submitForm(confirmationText);

    modal.checkingModal(personalInformation);
  });
});
