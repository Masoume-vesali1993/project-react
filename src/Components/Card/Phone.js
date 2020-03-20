import React from 'react';
import './styles.css';
import Phone from './Img/PassengerApp_Solution_v2.png';



console.log(Phone); // /logo.84287d09.png
function phoneimg() {
  // Import result is the URL of your image
  return <img src={Phone} alt="Right" width="360px" height="400px"/>;
}
export default phoneimg;