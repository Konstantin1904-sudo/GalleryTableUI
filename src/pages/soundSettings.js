import * as React from 'react'
import { Link } from 'gatsby'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slider from '@mui/material/Slider';


import {
    arrow,
    buttonWrapper,
    sliderPage,
    defaultButton,
    buttonText,
    buttonIcon,
    wrapperSoundBackground,
    sliderWrapper,
    sliderIcon,
    sliderButton
} from '../components/layout.module.css'



import arrowToGoBack from '../assets/BackArrow.svg'
import sound from '../assets/Sound.svg'
import telekomLogo from '../assets/TelekomLogo.svg'
import mute from '../assets/Mute.svg'



const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
          main: '#000000',
      }
    },
  });


const videoSettingsPage = () => {
    return(
        <main className={wrapperSoundBackground}>
            <title>LightSettings</title>
            <Link to="/"><img src = {arrowToGoBack} alt = "Load failed"  height="100" className={arrow}/></Link>

            <div className={sliderPage}>
                <div className={buttonWrapper}> 
                    <button className={defaultButton}>
                        <img src = {sound} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                        <span className={buttonText}>Working & meeting</span>
                    </button>
                    <button className={defaultButton}>
                        <img src = {telekomLogo} alt = "Load failed" width="150" height="150" className={buttonIcon}/>
                        <span className={buttonText}>Video conference</span>
                    </button>
                    
                </div>
                <div className={sliderWrapper}>
                    <ThemeProvider theme={theme}>
                        <Slider
                            color = 'primary'
                            orientation = 'vertical'
                            size = 'large'
                            defaultValue = {55}
                        />
                    </ThemeProvider>
                    <button className={sliderButton}><img src = {mute} alt = "Load failed" width="40"  className={sliderIcon}/></button>
                </div>
            </div>
        </main>
    )
}
export default videoSettingsPage
