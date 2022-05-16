import * as React from 'react'
import { Link } from 'gatsby'
import {
    buttonWrapper,
    sliderPage,
    defaultButton,
    buttonText,
    buttonIcon,
    wrapperLight
} from '../components/layout.module.css'

import lowIcon from '../assets/low.svg'
import mediumIcon from '../assets/medium.svg'
import highIcon from '../assets/high.svg'
import backArrow from '../assets/backArrow.svg'
import backgroundLight from '../assets/Light.png'





const lightSettingsPage = () => {
    return(
        <main className={wrapperLight}>
            <title>LightSettings</title>
            <Link to="/"><img src = {backArrow} alt = "Load failed" width="35" height="120" className={backArrow}/></Link>

            <div className={sliderPage}>
                <div className={buttonWrapper}> 
                    <button className={defaultButton}>
                        <img src = {lowIcon} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                        <span className={buttonText}>Working & meeting</span>
                    </button>
                    <button className={defaultButton}>
                        <img src = {mediumIcon} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                        <span className={buttonText}>Video conference</span>
                    </button>
                    <button className={defaultButton}>
                        <img src = {highIcon} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                        <span className={buttonText}>Movie setup</span>
                    </button>
                </div>
                <div>
                    Slider Placeholder
                </div>
            </div>
        </main>
    )
}

export default lightSettingsPage