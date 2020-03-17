import React from 'react';
import './styles.css';
import Apple from './Img/apple-ios-logo-png-apple-ios-image-4085-256.png';



console.log(Apple); // /logo.84287d09.png
function application() {
  // Import result is the URL of your image
  return <img src={Apple} alt="Download" width="100px" height="100px"/>;
}
export default application;