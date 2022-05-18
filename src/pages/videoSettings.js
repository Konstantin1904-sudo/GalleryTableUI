

import * as React from 'react'
import { Link } from 'gatsby'
import {
    arrow,
    buttonWrapper,
    defaultButton,
    buttonText,
    buttonIcon,
    wrapperSoundBackground,
    nonSliderPage,
    switchWrapper,
    switchButton,
    defaultText,
    sliderIcon
} from '../components/layout.module.css'

import idle from '../assets/idle.svg'
import hdmi from '../assets/HDMI.svg'
import clickshare from '../assets/Clickshare.svg'
import arrowToGoBack from '../assets/BackArrow.svg'
import webexLogo from '../assets/Webex.svg'

import Switch from '@mui/material/Switch';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
          main: '#E20074',
      }
    },
  });

const soundSettingsPage = () => {
    return(
        <main className={wrapperSoundBackground}>
            <title>SoundSettings</title>
            <Link to="/"><img src = {arrowToGoBack} alt = "Load failed"  height="100" className={arrow}/></Link>
            <div className={nonSliderPage}>
                <div className={switchWrapper}>
                    <ThemeProvider theme={theme}>
                        <div className={switchButton}>
                            <Switch {...label} color = "primary"/>
                        </div>

                    </ThemeProvider>

                    <p className={defaultText}>Webex</p>

                    <img src = {webexLogo} alt = "Load failed"  height="120" className={sliderIcon}/>

                </div>
                <div className={buttonWrapper}> 
                        <button className={defaultButton}>
                            <img src = {idle} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                            <span className={buttonText}>Idle Mode</span>
                        </button>
                        <button className={defaultButton}>
                            <img src = {hdmi} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                            <span className={buttonText}>HDMI 1</span>
                        </button>                        
                        <button className={defaultButton}>
                            <img src = {hdmi} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                            <span className={buttonText}>HDMI 2</span>
                        </button>
                        <button className={defaultButton}>
                            <img src = {clickshare} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                            <span className={buttonText}>Clickshare</span>
                        </button>
                    </div>
                </div>
        </main>
    )
}

export default soundSettingsPage