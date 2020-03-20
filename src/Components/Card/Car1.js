import React from 'react';
import './styles.css';
import Car1 from './Img/84770f_b4fb8d668bc64ef7a3e595d56fc00889.jpg';



console.log(Car1); // /logo.84287d09.png
function carimg() {
  // Import result is the URL of your image
  return <img src={Car1} alt="Right" width="200px" height="100px"/>;
}
export default carimg;