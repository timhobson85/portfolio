import React from 'react'
import './Projects.css'
import TicTacToe from './projects/TicTacToe'
import PayItForward from './projects/PayItForward'
import Stalk from './projects/Stalk'
import Pixels from './projects/Pixels'
import {
  Link,
  HashRouter as Router,
  Route
} from 'react-router-dom'

class Projects extends React.Component {

  render(){
    return(
      <div className='App'>
        <div id="projectList">
          <Link to="/projects/pixels">pixels</Link>
          <Link to="/projects/stalk">stalk</Link>
          <Link to="/projects/payitforward">pay it forward</Link>
          <Link to="/projects/tictactoe">tictactoe</Link>
        </div>
        <div id="projectDetails">
          <Router>
            <Route exact path ="/projects/pixels" component={Pixels} />
            <Route exact path ="/projects/stalk" component={Stalk} />
            <Route exact path ="/projects/payitforward" component={PayItForward} />
            <Route exact path ="/projects/tictactoe" component={TicTacToe} />
          </Router>
        </div>
      </div>
    )
  }

} // Class

export default Projects
