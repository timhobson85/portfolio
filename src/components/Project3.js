import React from 'react'
import image from '../images/project3.png'


class Project3 extends React.Component {

  render(){
    return(
      <div className='projectInfo'>
        <h2>Pixel</h2>
        <img src={image} alt=""/>
        <p>
Collaborative drawing app working via firebase. You can take a photo via the webcam to be pixelated a drawn on by everyone. Ability to chat with other users and save the picture to the gallery
Created with React/Firebase/HTML/CSS/JS</p>
      </div>
    )
  }

} // Class

export default Project3
