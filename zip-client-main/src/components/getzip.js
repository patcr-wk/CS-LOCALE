const fs = require("fs");
const dir = "../../public/zip";
const zipfile = fs.readdirSync(dir);
console.log(zipfile);