import React from 'react';
import './styles.css';
import Appid from './Img/p17s2tfgc31jte13d51pea1l2oblr3.png';



console.log(Appid); // /logo.84287d09.png
function application() {
  // Import result is the URL of your image
  return <img src={Appid} alt="Download" width="80px" height="80px"/>;
}
export default application;