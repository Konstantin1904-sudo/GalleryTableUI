import * as React from 'react'
import { Link } from 'gatsby'
import {link} from '../components/layout.module.css'


const IndexPage = () => {
  return (
    <main>

      <Link to='/lightSettings' className={link}>Light settings</Link>
      <Link to='/videoSettings'>Video settings</Link>
      <Link to='/soundSettings'>Sound settings</Link>
      <Link to='/blindsControls'>Blinds Controls</Link>

    </main>
  )
}

export default IndexPage