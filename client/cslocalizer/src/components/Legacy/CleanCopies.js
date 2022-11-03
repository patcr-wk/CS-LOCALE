import React, { Fragment, useState } from 'react';
//import ContentstackAppSdk from "@contentstack/app-sdk";
//import { FieldLabel } from "@contentstack/venus-components";
//import { TypeSDKData, TypeEntryData } from "ui/src/common/types/";


const { callbackify } = require("util");

const cleanCSCopies = () => {
  cleanCopies();
};
export default cleanCSCopies;

function cleanCopies () {
    const fs = require("fs");
    const path = require("path");
    const { callbackify } = require("util");

    var locdirectory = "../../public/copies";

    fs.readdir(locdirectory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(locdirectory, file), (err) => {
          if (err) throw err;
        });
      }
    });
  };