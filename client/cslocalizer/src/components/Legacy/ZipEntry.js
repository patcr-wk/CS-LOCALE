import React, { Fragment, useState } from 'react';
//import ContentstackAppSdk from "@contentstack/app-sdk";
//import { FieldLabel } from "@contentstack/venus-components";
//import { TypeSDKData, TypeEntryData } from "ui/src/common/types/";


const { callbackify } = require("util");

const zipCSEntry = () => {
  zipEntry();
};
export default zipCSEntry;


function zipEntry() {
    const AdmZip = require("adm-zip");
    const fs = require("fs");
    const inputDir = "../../public/Localize";
    const outputDir = "../../public/zip/";
    const files = fs.readdirSync(inputDir)
    
    for (const file of files) {
      //console.log(file);
      //console.log(outputDir + file);
    
      const zipLocal = require("zip-local");
      const zipfile = file.replace(".json", "") + ".zip";
    
      zipLocal.sync
        .zip("../../public/copies")
        .compress()
        .save(outputDir + zipfile);
    }
  };