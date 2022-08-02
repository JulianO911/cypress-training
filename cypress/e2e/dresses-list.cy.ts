import {
  MenuContentPage,
<<<<<<< HEAD
  DressesListPage}
  from "../page/index";
=======
  DressesListPage,
} from "../page/index";
>>>>>>> e6b40d675795e41e3e797d8ced6c9b12deeae938

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    const dressNames = ["Printed Dress", "Printed Dress",
      "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"];

    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressMenu();
    dressesListPage.validateItemsNumber(dressNames.length);
    dressesListPage.validateItemsNames(dressNames);
  });
});
