import React from 'react'
import BackgroundSlider from 'react-background-slider';
import EnlightenmentQuote from './EnlightenmentQuote';
import enlightenment_BG from '../images/enlightenment_BG.jpg';
import enlightenmentBG_2 from '../images/enlightenmentBG_2.jpg'
import enlightenmentBG_3 from '../images/enlightenmentBG_3.jpg';
import enlightenmentBG_4 from '../images/enlightenmentBG_4.jpg';
import enlightenmentBG_5 from '../images/enlightenmentBG_5.png';
import enlightenmentBG_6 from '../images/enlightenmentBG_6.jpg';
import enlightenmentBG_7 from '../images/enlightenmentBG_7.jpg';
import enlightenmentBG_8 from '../images/enlightenmentBG_8.jpg';
import enlightenmentBG_9 from '../images/enlightenmentBG_9.png';
import enlightenmentBG_10 from '../images/enlightenmentBG_10.jpg';
import enlightenmentBG_11 from '../images/enlightenmentBG_11.jpg';

import '../styles/sass/layout/_categories.scss';

const EnlightenmentBox = () => {
  return (
    <>
      <BackgroundSlider
        className="background_image"
        images={[enlightenment_BG, enlightenmentBG_2, enlightenmentBG_3, enlightenmentBG_4, enlightenmentBG_5, enlightenmentBG_6, enlightenmentBG_7, enlightenmentBG_8, enlightenmentBG_9, enlightenmentBG_10, enlightenmentBG_11]}
        duration={10}
        transition={2}
      />
      <div className="randomcontainer">
        <EnlightenmentQuote className="EnlightenmentQuote" />
      </div>
    </>
  )
}

export default EnlightenmentBox;