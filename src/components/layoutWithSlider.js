import * as React from 'react'
import { Link } from 'gatsby'

const LayoutWithSlider = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lightSettings">Light</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default LayoutWithSlider