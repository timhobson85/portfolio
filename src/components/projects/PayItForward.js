import React from 'react'
import image from '../../images/project1.png'


class PayItForward extends React.Component {

  render(){
    return(
      <div className='projectInfo'>
        <h2>Pay it Forward</h2>
        <a href="https://github.com/timhobson85/pif">
          <img src={image} alt=""/>
        </a>
        <p>Inspired by the 2019/2020 bushfire season, I was inspired to create a site as a way for people to pay it forward to donate time or goods, or request them when in need.
        <br/>
Created with Ruby/Rails/HTML/CSS</p>
      </div>
    )
  }

} // Class

export default PayItForward
