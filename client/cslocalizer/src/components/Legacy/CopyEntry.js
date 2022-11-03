import React, { Fragment, useState } from 'react';
//import ContentstackAppSdk from "@contentstack/app-sdk";
//import { FieldLabel } from "@contentstack/venus-components";
//import { TypeSDKData, TypeEntryData } from "ui/src/common/types/";


const { callbackify } = require("util");

const copyCSEntry = () => {
  copyEntry();
};
export default copyCSEntry;
function copyEntry(){{
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.contentstack.io/v3/locales',
  headers: { 
    'api_key': 'blt25772735bdf27ede', 
    'authorization': 'cs775bb62b020eb66c78580ea6', 
    'Content-Type': 'application/json'
  }
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
//for each locale code
  for(let i=0;i < response.data.locales.length;i++){
    //console.log(response.data.locales[i].code)

    const fs = require("fs");

    const dir = "../../public/Localize";
    const des = "../../public/copies/";
    const files = fs.readdirSync(dir);

    for (const file of files) {
      //console.log(file);
      //console.log(des + file);

      const localename = response.data.locales[i].code+"-";
      const newfile = des + localename + file;

      // File destination.txt will be created or overwritten by default.
      fs.copyFile(dir + "/" + file, newfile, (err) => {
        if (err) throw err;
        //console.log(newfile + " was copied to " + des);
      });
    }
};

})
.catch(function (error) {
  console.log(error);
});
  }
};