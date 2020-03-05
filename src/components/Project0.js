import React from 'react'
import image from '../images/project0.png'

class Project0 extends React.Component {

  render(){
    return(
      <div className='projectInfo'>
        <h2>Tic Tac Toe</h2>
        <div>
          <img src={image} alt=""/>
        </div>
        <p>Creating my own version of TicTactToe after 2 weeks of class, I had a big focus on the aesthetics for my site.
        Created with HTML/CSS/JS</p>
      </div>
    )
  }

} // Class

export default Project0
