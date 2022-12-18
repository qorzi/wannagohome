import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import runDark1 from '../../assets/runDark/runDark1.png'
import runDark2 from '../../assets/runDark/runDark2.png'
import runDark3 from '../../assets/runDark/runDark3.png'
import runDark4 from '../../assets/runDark/runDark4.png'
import runLight1 from '../../assets/runDark/runLight1.png'
import runLight2 from '../../assets/runDark/runLight2.png'
import runLight3 from '../../assets/runDark/runLight3.png'
import runLight4 from '../../assets/runDark/runLight4.png'

function Runner() {
  const runnerArray = [
    runDark1, runDark2, runDark3, runDark4
  ]
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
      console.log(runnerCount)
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