import * as React from 'react'
import { Link } from 'gatsby'
import {link} from '../components/layout.module.css'

import {
  welcomeWrapper,
  welcomeLight,
  welcomeVideo,
  welcomeSound,
  welcomeBlinds,
  welcomeHelp
} from '../components/layout.module.css'


const IndexPage = () => {
  return (
    
    <main className={welcomeWrapper}>
        <Link to='/lightSettings' className={welcomeLight}></Link>
        <Link to='/videoSettings' className={welcomeVideo}></Link>
        <Link to='/soundSettings' className={welcomeSound}></Link>
        <Link to='/blindsControls' className={welcomeBlinds}></Link>

        <Link to='/' className={welcomeHelp}></Link>
      

    </main>
  )
}

export default IndexPage