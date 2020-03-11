import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/Landing'
import DevIcons from './components/DevIcons'
import {
  Link,
  HashRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'

class App extends React.Component {

  render(){
    return(
      <div className='App'>
        <Router>
          <Navbar />
        <div id="horizontal"></div>
        <div id="vertical"></div>
        <Route exact path ="/" component={Landing} />
        <Route exact path ="/about" component={About} />
        <Route path ="/projects" component={Projects} />
        <Route exact path ="/contact" component={Contact} />
          {/* <Footer /> */}
        </Router>
      </div>
    )
  }

} // Class

export default App
