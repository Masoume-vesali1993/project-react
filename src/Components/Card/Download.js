import React from 'react';
import './styles.css';
import Download from './Img/phone-in-hand-snapchat-on-iphone-x-11553547383uqigtwne0t.png';



console.log(Download); // /logo.84287d09.png
function app() {
  // Import result is the URL of your image
  return <img src={Download} alt="Download" width="100px" height="100px"/>;
}
export default app;