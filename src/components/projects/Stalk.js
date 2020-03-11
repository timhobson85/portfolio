import React from 'react'
import image from '../../images/project2.png'


class Stalk extends React.Component {

  render(){
    return(
      <div className='projectInfo'>
        <h2>Stalk</h2>
          <img src={image} alt=""/>
        <p>Group Project to create a site where you can keep a schedule for watering indoor plants. It also allows you view other user's plants and also keep updates and photos of your plants progress.
Created with React/Rails/HTML/CSS/JS</p>
      </div>
    )
  }

} // Class

export default Stalk
