import React, { Fragment, useState } from 'react';
//import ContentstackAppSdk from "@contentstack/app-sdk";
//import { FieldLabel } from "@contentstack/venus-components";
//import { TypeSDKData, TypeEntryData } from "ui/src/common/types/";


function downloadZip() {
  const fs = require("fs");

  const dir = "http://localhost:3000/zip/";
  const files = fs.readdirSync(dir);

  for (const file of files) {
    console.log(file);
    console.log(des + file);
    const zipfile = dir + "/" + file;
    const fs = require("fs");
    const http = require("http");

    // URL of the image
    const url = zipfile;

    http.get(url, (res) => {
      // Image will be stored at this path
      const path = `${__dirname}/downloads`;
      const filePath = fs.createWriteStream(path);
      res.pipe(filePath);
      filePath.on("finish", () => {
        filePath.close();
        console.log("Download Completed");
      });
    });
  }
}
