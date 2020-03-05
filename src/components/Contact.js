import React from 'react'
import './Contact.css'

class Contact extends React.Component {

  render(){
    return(
      <div className='App'>
        <h2>Contact</h2>
        <ul id="contactInfo"> 
          <li>linkedin</li>
          <li>email</li>
          <li>github</li>
          <li>phone</li>
        </ul>
      </div>
    )
  }

} // Class

export default Contact
