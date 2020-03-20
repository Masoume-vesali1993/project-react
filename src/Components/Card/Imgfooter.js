import React from 'react';
import './styles.css';
import Imgfooter from './Img/web sitee3.png';



console.log(Imgfooter); // /logo.84287d09.png
function imgfoo() {
  // Import result is the URL of your image
  return <img src={Imgfooter} alt="Right" width="100px" height="100px"/>;
}
export default imgfoo;