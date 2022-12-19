import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import runDark1 from '../../assets/runDark/runDark1.png'
import runDark2 from '../../assets/runDark/runDark2.png'
import runDark3 from '../../assets/runDark/runDark3.png'
import runDark4 from '../../assets/runDark/runDark4.png'
import runLight1 from '../../assets/runLight/runLight1.png'
import runLight2 from '../../assets/runLight/runLight2.png'
import runLight3 from '../../assets/runLight/runLight3.png'
import runLight4 from '../../assets/runLight/runLight4.png'

function Runner(props:any) {
  const runnerArray: any = [...props.theme.theme.runner]

  const [runner, setRunner] = useState('')
  const [runnerCount, setRunnerCount] = useState(0)

  useEffect(() => {
    const loadSpinner = setInterval(() => {
      setRunner(runnerArray[runnerCount])
      if (runnerCount < 3) {
        setRunnerCount(runnerCount + 1)
      } else {
        setRunnerCount(0)
      }
    }, 100)
    return () => clearInterval(loadSpinner)
  })

  return (
    <div>
      <img src={runner}></img>
    </div>
  )
}

export default Runner;