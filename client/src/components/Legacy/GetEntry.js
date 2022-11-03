import React, { Fragment, useState } from 'react';
//import ContentstackAppSdk from "@contentstack/app-sdk";
//import { FieldLabel } from "@contentstack/venus-components";
//import { TypeSDKData, TypeEntryData } from "ui/src/common/types/";


const { callbackify } = require("util");

const getCSEntry = () => {
  getentry();
};
export default getCSEntry;
function getentry(){
    const fs = require("fs");
    const contentstack = require("contentstack");
    const { fstat } = require("fs");

    const Stack = contentstack.Stack({ "api_key": "blt25772735bdf27ede", "delivery_token": "csc65545a83409f07271a3fa7b", "environment": "prod" });

    const Query = Stack.ContentType("web_tiles").Entry("blt02a3369e166d8a12");

    Query.includeContentType()
      .fetch()
      .then(
        function success(entry) {
          //console.log(entry); // Retrieve field value by providing a field's uid
          //console.log(entry.toJSON()); // Convert the entry result object to JSON

          const entryData = entry.toJSON();
          const filename = "../../public/Localize/" + entryData.uid + ".json";

          let data = JSON.stringify(entryData);
          fs.writeFileSync(filename, data);
        },
        function error(err) {
          // err objectd
        }
      );
  };