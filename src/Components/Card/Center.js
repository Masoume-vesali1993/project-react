import React from 'react';
import './styles.css';
import Center from './Img/offer.png'



console.log(Center); // /logo.84287d09.png
function centerimg() {
  // Import result is the URL of your image
  return <img src={Center} alt="Center" width="100px" height="100px" />;
}
export default centerimg;