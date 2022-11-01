# Contentstack Localization Handler

> This is a full stack React-Express file handler for Loaclization in Contentstack

## Quick Start

```bash
# Install dependencies server/client
cd zip-client-main
npm install
cd zip-server-main
npm install

# Serve client on localhost:3000
cd zip-client-main
npm run start

# Serve Server on localhost:5000
cd zip-server-main
npm run start
```
## Stack Setup
Open zip-server-main/services.js
Set API Key in lines 13,43, and 228
Set Delivery Token in line 13
Set Management Token in lines 44 and 229

## Change Entry variables
### For Downloading the Zip File
Open zip-server-main/services.js
Change the ContentType and Entry ID on line 14 to the Entry you wish to download for Translation 
```
const Query = Stack.ContentType("Your Content Type").Entry("Your Entry ID");
```

### For Importing
Open zip-server-main/services.js
Change the ContentType on line 226 to the Entry you wish to import 
```
url: 'https://api.contentstack.io/v3/content_types/"Your Content Type"/entries/' + eUid + '/import?locale=' + eLocale,
```