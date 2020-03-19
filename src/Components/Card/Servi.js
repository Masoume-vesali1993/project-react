import React from 'react';
import './styles.css';
import Servi from './Img/548a7f_5429fc469c254739aee37fd14e708bed.jpg'



console.log(Servi); // /logo.84287d09.png
function servi() {
  // Import result is the URL of your image
  return <img src={Servi} alt="Left" width="100px" height="100px"/>;
}
export default servi;