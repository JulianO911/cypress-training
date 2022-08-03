import {Upload} from "../page/index";

describe("uploading a file test", () => {
  let upload: Upload;

  before(() => {
    upload = new Upload();
  });

  it("testing the title after upload file", () => {
    const data = ["example.json"];
    upload.visitWebSite();
    upload.uploadFile("../e2e/fixtures/example.json");
    upload.verifyTitle(data);
  });
});