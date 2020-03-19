import React from 'react';
import './styles.css';
import Taxi from './Img/548a7f_dd830efd28744ea5bedf73697df6ae41.jpg'



console.log(Taxi); // /logo.84287d09.png
function taxi() {
  // Import result is the URL of your image
  return <img src={Taxi} alt="Left" width="100px" height="100px"/>;
}
export default taxi;