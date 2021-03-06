import React from 'react'
import DevIcons from './DevIcons'
import './About.css'

class About extends React.Component {

  render(){
    return(
      <div className='About'>
        <h1 id="nameHeader" className="">tim hobson</h1>
        <h3 id="titleHeader" className="">junior software developer</h3>
        <p>As an entrepreneur running a family wedding photography business, I have captured approximately 400 weddings over the course of 15 years. Working with clients and understanding their needs has allowed me to practice creativity, as well as work within cross-functional teams, develop attention to detail, and tackle unique problems.

        As a Junior Software Engineer-in-training, I am looking to combine my artistic and technical sides and still have the ability to provide creative solutions. Ideally, I would love to work within a team that values employee growth, provides mentorship and is working to help others.</p>
      <div className="devIconsWrapper">
          <p>
            Skills:
          </p>
          <DevIcons />
        </div>
      </div>
    )
  }

} // Class

export default About
