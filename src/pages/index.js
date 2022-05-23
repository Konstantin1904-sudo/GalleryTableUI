import * as React from 'react'
import { Link } from 'gatsby'
 
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

        <Link to='/ModalHelp' className={welcomeHelp} state={{modal: true}}></Link>
      

    </main>
  )
}

export default IndexPage