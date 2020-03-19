import React from 'react';
import './styles.css';
import Truck from './Img/548a7f_dece80c121f9407896aded8b1a82ba90.jpg'



console.log(Truck); // /logo.84287d09.png
function truck() {
  // Import result is the URL of your image
  return <img src={Truck} alt="Left" width="100px" height="100px"/>;
}
export default truck;