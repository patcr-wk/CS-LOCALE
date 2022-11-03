import React from 'react';
import './App.css';
import CreateArchive from './components/createArchive';
import LocalizeEntry from './components/importModule';


const App = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fa fa-download' /> Download Entry For Translation Services
    </h4>
    <p>Clicking this button will create a zip file in the "Ready to Translate" folder within the assets section of Contentstack and then download the file to your local machine.</p>

    <CreateArchive />
    <br></br>
    <br></br>
    <br></br>

    <h4 className='display-4 text-center mb-4'>
      <i className='fa fa-language' /> Localize Entry With Translated Zip File
    </h4>
    <p className='alert'>Before Clicking this button be sure that you have uploaded the translated zip file to the "Translated Files" folder in the assets section of contentstack added the description "READY TO LOCALIZE" and published the asset to the development environment.</p>
    <p>Clicking this button will Localize the entry with the translated files uploaded to Contentstack.</p>

    <LocalizeEntry />
  </div>
);

export default App;

