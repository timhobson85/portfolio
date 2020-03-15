import React from 'react'
import './Contact.css'

class Contact extends React.Component {

  render(){
    return(
      <div className='App'>
        <h2 id="contactHeader">Contact</h2>
        <ul id="contactInfo">
          <li><a href="https://www.linkedin.com/in/thobson/">linkedin</a></li>
          <li><a href="mailto: claehobson@gmail.com">email</a></li>
          <li><a href="https://github.com/timhobson85">github</a></li>
          <li>0413 130 124</li>
        </ul>
      </div>
    )
  }

} // Class

export default Contact
