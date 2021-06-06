import React from 'react';
import Gallery from './Gallery';
import RequestMakerComponent from './RequestMakerComponent';

function App() {
  return (
      <>
      <h1 style={{textAlign: 'center'}}>Image Gallery</h1>
      <h2 style={{textAlign: 'center'}}>Please enjoy</h2>
      <RequestMakerComponent/>
      <Gallery/>
     </>
  );
}

export default App;
