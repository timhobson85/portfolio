import React from 'react'
import Css from '../svg/Css.js'
import Github from '../svg/Github.js'
import Html from '../svg/Html.js'
import Jquery from '../svg/Jquery.js'
import Js from '../svg/Js.js'
import Mongodb from '../svg/Mongodb.js'
import Nodejs from '../svg/Nodejs.js'
import Postgresql from '../svg/Postgresql.js'
import Ps from '../svg/Ps.js'
import Rails from '../svg/Rails.js'
import Ruby from '../svg/Ruby.js'
import ReactIcon from '../svg/ReactIcon.js'
import Vue from '../svg/Vue.js'
import './Devicons.css'

class DevIcons extends React.Component {

  render(){
    return(
      <div className='devIcons'>
        <Css />
        <Github />
        <Html />
        <Jquery />
        <Js />
        <Mongodb />
        <Nodejs />
        <Postgresql />
        <Rails />
        <Ruby />
        <ReactIcon />
        <Vue />
      </div>
    )
  }

} // Class

export default DevIcons
