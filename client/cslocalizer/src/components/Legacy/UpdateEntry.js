import React, { Fragment, useState } from 'react';
//import ContentstackAppSdk from "@contentstack/app-sdk";
//import { FieldLabel } from "@contentstack/venus-components";
//import { TypeSDKData, TypeEntryData } from "ui/src/common/types/";


const { callbackify } = require("util");

const updateCSEntry = () => {
  updateEntry();
};
export default updateCSEntry;

function updateEntry(){
    const fs = require("fs");
    const from = "../../public/Localize";
    const dir = "../../public/copies";
    const pfiles = fs.readdirSync(from);
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const path = dir + "/" + file;

      var file_content = fs.readFileSync(path);
      var content = JSON.parse(file_content);
      var locale = content.locale;
      var newlocale = file.replace("-" + pfiles, "");

      //console.log(locale);
      //console.log(newlocale);

      const ciqlJson = require("ciql-json");

      ciqlJson.open(path).set("locale", newlocale).save();
    }
  };