import React from 'react';
import './styles.css';
import Bazar from './Img/bazaar-icon.png';



console.log(Bazar); // /logo.84287d09.png
function application() {
  // Import result is the URL of your image
  return <img src={Bazar} alt="Download" width="70px" height="70px"/>;
}
export default application;