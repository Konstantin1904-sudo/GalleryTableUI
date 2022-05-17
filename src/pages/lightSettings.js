import * as React from 'react'
import { Link } from 'gatsby'
import {
    buttonWrapper,
    sliderPage,
    defaultButton,
    buttonText,
    buttonIcon,
    wrapperLight,
    sliderWrapper
} from '../components/layout.module.css'

import lowIcon from '../assets/low.svg'
import mediumIcon from '../assets/medium.svg'
import highIcon from '../assets/high.svg'
import backArrow from '../assets/backArrow.svg'
import brighntess from '../assets/Brightness.svg'

import Slider from '@mui/material/Slider';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
          main: '#98CA97',
      }
    },
  });



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
                <div className={sliderWrapper}>
                    <ThemeProvider theme={theme}>
                        <Slider
                            color = 'primary'
                            orientation = 'vertical'
                            size = 'large'
                            defaultValue = {40}
                        />
                    </ThemeProvider>
                    <img src = {brighntess} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                </div>
            </div>
        </main>
    )
}

export default lightSettingsPage