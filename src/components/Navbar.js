import React from 'react'
import './Navbar.css'
import {
  Link,
} from 'react-router-dom'

class Navbar extends React.Component {

  render(){
    return(
      <div className='Navbar'>
        <Link to="/about">
          <div class="navbarButtons" id="aboutButton">about</div>
        </Link>
        <Link to="/projects/pixels">
          <div class="navbarButtons" id="projectsButton">projects</div>
        </Link>
        <Link to="/contact">
          <div class="navbarButtons" id="contactButton">contact</div>
        </Link>
          <div class="navbarButtons" id="resumeButton">resume</div>
      </div>
    )
  }

} // Class

export default Navbar
