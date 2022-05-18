import * as React from 'react'
import { Link } from 'gatsby'


import {
    arrow,
    blindsWrapper,
    defaultButton,
    buttonIcon,
    wrapperBlindsBackground,
    nonSliderPage,
    buttonWrapper

} from '../components/layout.module.css'

import arrowToGoBack from '../assets/BackArrow.svg'

import arrowUp from '../assets/ArrowUp.svg'
import minus from '../assets/Minus.svg'
import arrowDown from '../assets/ArrowDown.svg'



const blindControlPage = () => {
    return(
        <main className={wrapperBlindsBackground}>
            <title>Blinds</title>
            <Link to="/"><img src = {arrowToGoBack} alt = "Load failed"  height="100" className={arrow}/></Link>
                
                <div className={blindsWrapper}> 
                        <button className={defaultButton}>
                            <img src = {arrowUp} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                        </button>
                        <button className={defaultButton}>
                            <img src = {minus} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                        </button>                        
                        <button className={defaultButton}>
                            <img src = {arrowDown} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                        </button>

                    </div>
        </main>
    )
}

export default blindControlPage