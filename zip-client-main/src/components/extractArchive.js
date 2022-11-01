import React from 'react';
//getting Contentstack SDK initialized



//start working with zip archive

var path = require('path'),
fs = require('fs');

function fromDir(startPath, filter) {

//console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var zipfilename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(zipfilename);
        if (stat.isDirectory()) {
            fromDir(zipfilename, filter); //recurse
        } else if (zipfilename.endsWith(filter)) {
            console.log('-- found: ', zipfilename);
        
//extract zip file

            const AdmZip = require("adm-zip");
            const path = require("path");
            fs = require('fs');
            async function extractArchive(filepath) {
                try {
                const zip = new AdmZip(filepath);
                const outputDir = `${path.parse(filepath).name}_extracted`;
                zip.extractAllTo(outputDir);

                console.log(`Extracted to "${outputDir}" successfully`);
    
//getting entries from extracted archive      

                const fs = require('fs')
                const files = fs.readdirSync(outputDir)

                for (const file of files) {
                console.log(file)

//updating entries from extracted archive                     
}

                } catch (e) {
                console.log(`Something went wrong. ${e}`);
                }   
            }
        extractArchive(zipfilename);
        };
    };
};


fromDir('../../public/uploads', '.zip');

