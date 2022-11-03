import React, { Fragment, useEffect } from 'react';
//import { Routes, Route } from 'react-router-dom';
//import { getEntry } from '../utils/request';

const CreateArchive = () => {
  useEffect(() => {


  }, []);

  const entryDownload = () => {
    const url = 'http://localhost:5000/download/';
    fetch(url).then(response => response.json()).then(data => {
      console.log(data);
      if (data && data.zipfilePath) {
        debugger;
        const link = document.createElement('a');
        link.href = 'http://localhost:5000/' + data.zipfilePath;

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      }

    }).catch(err => console.error(err));
  };

  return (
    <Fragment>
      <form>
        <input
          type='button'
          onClick={entryDownload}
          value='Create Zip File'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </Fragment>
  );

};
export default CreateArchive;