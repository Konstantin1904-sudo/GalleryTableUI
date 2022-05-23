import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

import {
    helpModalWrapper,
    buttonHelpYes,
    helpDialogeWrapper
  } from '../components/layout.module.css'

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div className={helpModalWrapper}>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (            
            <div className={helpDialogeWrapper}>
                <Link className={buttonHelpYes} to="/">Go back to the homepage </Link>

            </div>

        )}


      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage