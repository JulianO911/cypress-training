import {
  Upload,
  Download,

}
  from "../page/index";

describe("uploading and download a file test", () => {
  let upload: Upload;
  let download: Download;

  before(() => {
    upload = new Upload();
    download = new Download();
  });

  it("testing the title after upload file", () => {
    const data = "example.json";
    upload.visitWebSite();
    upload.uploadFile(data);
    upload.verifyTitle(data);
  });

  it("download test", () => {
    const path = "../cypress/downloads/sampleFile.jpeg";
    download.visitWebSite();
    download.downloadFile();
    download.verifyDownload(path);
  });
});
