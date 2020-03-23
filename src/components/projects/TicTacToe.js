import React from 'react'
import image from '../../images/project0.png'

class TicTacToe extends React.Component {

  render(){
    return(
      <div className='projectInfo'>
        <h2>Tic Tac Toe</h2>
        <div>
          <a href="https://timhobson85.github.io/tic-tac-toe/">
            <img src={image} alt=""/>
          </a>
        </div>
        <p>Creating my own version of TicTactToe after 2 weeks of class, I had a big focus on the aesthetics for my site.
          <br/>
        Created with HTML/CSS/JS</p>
      </div>
    )
  }

} // Class

export default TicTacToe
