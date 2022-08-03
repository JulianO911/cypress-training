import {
  FillingFormPage,
  Modal,
} from "../page/index";

describe("filling form verification", () => {
  let fillingForm: FillingFormPage;
  let modal: Modal;
  before(() => {
    fillingForm = new FillingFormPage();
    modal = new Modal();
  });
  it("should fill the form", () => {
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "27 Jul 2016",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
      state: "Rajasthan",
      city: "Jaiselmer",
    };
    const confirmationText = "Thanks for submitting the form";
    fillingForm.visitPage();
    fillingForm.fillForm(personalInformation);
    fillingForm.submitForm(confirmationText);

    modal.checkingModal(personalInformation);
  });
});
