import React from 'react';
import './styles.css';
import Engine from './Img/548a7f_3cb8f7126a3e45a48be7deaa1ef6a2a8.jpg'



console.log(Engine); // /logo.84287d09.png
function partline() {
  // Import result is the URL of your image
  return <img src={Engine} alt="Left" width="100px" height="100px"/>;
}
export default partline;