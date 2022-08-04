import {Iframe} from "../page/index";

describe("uploading and download a file test", () => {
  let iframe: Iframe;

  before(() => {
    iframe = new Iframe();
  });

  it("testing the HTML title", () => {
    const htmlTitle = "HTML Tutorial";
    iframe.visit();
    iframe.getFrameTitle().should("contains.text",htmlTitle);
  });

  it("testing the CSS title", () => {
    const cssTitle = "CSS Tutorial";
    iframe.visit();
    iframe.goToCssPageInFrame();
    iframe.getFrameTitle().should("contains.text",cssTitle);
  });

});
