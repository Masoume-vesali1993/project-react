import React from 'react';
import './styles.css';
import Left from './Img/family.png'



console.log(Left); // /logo.84287d09.png
function partimg() {
  // Import result is the URL of your image
  return <img src={Left} alt="Left" />;
}
export default partimg;