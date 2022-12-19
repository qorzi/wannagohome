import darkButton from '../assets/darkButton.png'
import darkButtonHover from '../assets/darkButtonHover.png'
import lightButton from '../assets/lightButton.png'
import lightButtonHover from '../assets/lightButtonHover.png'
import darkwngImg from '../assets/wannagohomeWordsDark.png'
import lightwngImg from '../assets/wannagohomeWordsLight.png'
import runDark1 from '../assets/runDark/runDark1.png'
import runDark2 from '../assets/runDark/runDark2.png'
import runDark3 from '../assets/runDark/runDark3.png'
import runDark4 from '../assets/runDark/runDark4.png'
import runLight1 from '../assets/runLight/runLight1.png'
import runLight2 from '../assets/runLight/runLight2.png'
import runLight3 from '../assets/runLight/runLight3.png'
import runLight4 from '../assets/runLight/runLight4.png'

export const dark = {
  color:{
    defaultBgColor: '#333333',
    defaultDotColor: '#666666',
    defaultColor: '#ffffff',
  },
  button: {
    themeButtonSrc: lightButton,
    themeButtonHoverSrc: lightButtonHover,
  },
  img: {
    darkwngImg: darkwngImg,
  },
  runner: [
    runLight1, runLight2, runLight3, runLight4
  ]
}

export const light = {
  color:{
    defaultBgColor: '#ffffff',
    defaultDotColor: '#aaaaaa',
    defaultColor: '#333333',
  },
  button: {
    themeButtonSrc: darkButton,
    themeButtonHoverSrc: darkButtonHover,
  },
  img: {
    lightwngImg: lightwngImg,
  },
  runner: [
    runDark1, runDark2, runDark3, runDark4
  ]

}