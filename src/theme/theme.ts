import darkButton from '../assets/darkButton.png'
import darkButtonHover from '../assets/darkButtonHover.png'
import lightButton from '../assets/lightButton.png'
import lightButtonHover from '../assets/lightButtonHover.png'

export const dark = {
  color:{
    defaultBgColor: '#333333',
    defaultDotColor: '#666666',
    defaultColor: '#ffffff',
  },
  button: {
    themeButtonSrc: lightButton,
    themeButtonHoverSrc: lightButtonHover,
  }
}

export const light = {
  color:{
    defaultBgColor: '#ffffff',
    defaultDotColor: '#cccccc',
    defaultColor: '#333333',
  },
  button: {
    themeButtonSrc: darkButton,
    themeButtonHoverSrc: darkButtonHover,
  }
}