import React from 'react'
import './Projects.css'
import Project0 from './Project0'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
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
          <Link to="/projects/project0">tictactoe</Link>
          <Link to="/projects/project1">pay it forward</Link>
          <Link to="/projects/project2">stalk</Link>
          <Link to="/projects/project3">pixels</Link>
        </div>
        <div id="projectDetails">
          <Router>
            <Route exact path ="/projects/project0" component={Project0} />
            <Route exact path ="/projects/project1" component={Project1} />
            <Route exact path ="/projects/project2" component={Project2} />
            <Route exact path ="/projects/project3" component={Project3} />
          </Router>
        </div>
      </div>
    )
  }

} // Class

export default Projects
