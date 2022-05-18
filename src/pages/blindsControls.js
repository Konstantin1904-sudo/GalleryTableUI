import * as React from 'react'
import { Link } from 'gatsby'


import {
    arrow,
    blindsWrapper,
    defaultButton,
    buttonIcon,
    wrapperBlindsBackground,

} from '../components/layout.module.css'

import arrowToGoBack from '../assets/BackArrow.svg'

import arrowUp from '../assets/ArrowUpCircle.svg'
import minus from '../assets/MinusCircle.svg'
import arrowDown from '../assets/ArrowDownCircle.svg'



const blindControlPage = () => {
    return(
        <main className={wrapperBlindsBackground}>
            <title>Blinds</title>
            <Link to="/"><img src = {arrowToGoBack} alt = "Load failed"  height="100" className={arrow}/></Link>
                
                <div className={blindsWrapper}> 
                        <button className={defaultButton}>
                            <img src = {arrowUp} alt = "Load failed" width="300" height="300" className={buttonIcon}/>
                        </button>
                        <button className={defaultButton}>
                            <img src = {minus} alt = "Load failed" width="300" height="300" className={buttonIcon}/>
                        </button>                        
                        <button className={defaultButton}>
                            <img src = {arrowDown} alt = "Load failed" width="300" height="300" className={buttonIcon}/>
                        </button>

                    </div>
        </main>
    )
}

export default blindControlPage