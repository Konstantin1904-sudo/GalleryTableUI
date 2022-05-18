import * as React from 'react'
import { Link } from 'gatsby'
import {
    arrow,
    buttonWrapper,
    sliderPage,
    defaultButton,
    buttonText,
    buttonIcon,
    wrapperLightBackground,
    sliderWrapper,
    sliderIcon
} from '../components/layout.module.css'

import lowIcon from '../assets/low.svg'
import mediumIcon from '../assets/medium.svg'
import highIcon from '../assets/high.svg'
import arrowToGoBack from '../assets/BackArrow.svg'
import brightness from '../assets/Brightness.svg'

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
        <main className={wrapperLightBackground}>
            <title>LightSettings</title>
            <Link to="/"><img src = {arrowToGoBack} alt = "Load failed"  height="100" className={arrow}/></Link>

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
                    <img src = {brightness} alt = "Load failed" width="80"  className={sliderIcon}/>
                </div>
            </div>
        </main>
    )
}

export default lightSettingsPage