import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import App from './App';
import Photo from './FetchedPhoto.js'




ReactDOM.render(<App />, 
  document.getElementById('root'));

  ReactDOM.render(
    <Photo />,
    document.getElementById('body')
  );



