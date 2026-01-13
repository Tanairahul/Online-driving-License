import React from 'react';
import './App.css';

import Slidebar from './Slidebar';
import Heading from './Heading';
import Imgslide from './Images-slide';
import Secondimgslide from './Second-imgslide';
import Hover from "./Hover";
import Headimg from './Heading-img';
import Media from './Media.js';
import Secondhover from './second-hover.js';



function App() {
  return (
    <>
   
      

            <>
            <div className='page-animation'>
              <Slidebar />
              <Heading />
              <Imgslide />
              <Secondimgslide />
              <Hover />
              <Headimg />
              <Media />
              <Secondhover />
            
</div>
            </>
     
    </>
  );
}

export default App;
