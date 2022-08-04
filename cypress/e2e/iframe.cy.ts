import { css } from "cypress/types/jquery";
import {Iframe} from "../page/index";

describe("uploading and download a file test", () => {
  let iframe: Iframe;

  before(() => {
    iframe = new Iframe();
  });

  it("testing the title after upload file", () => {
    const htmlTitle = "HTML Tutorial";
    const cssTitle = "CSS Tutorial"
    iframe.visit();
    iframe.getFrameTitle(htmlTitle);
    iframe.goToCssPageInFrame(cssTitle);
  });
});
