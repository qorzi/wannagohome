import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';

function Runner(props:any) {
  const runnerArray: any = [...props.theme.theme.runner]

  const [runner, setRunner] = useState('')
  const [runnerCount, setRunnerCount] = useState(0)

  useEffect(() => {
    console.log(props.theme)
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
      <Road>
        <RunImg timeProgress={props.timerProgress} src={runner}></RunImg>
        <Progress theme={props.theme}>{(props.timerProgress).toFixed(3)}%</Progress>
        <HomeImg theme={props.theme}></HomeImg>
      </Road>
    </div>
  )
}

export default Runner;

const Road = styled.div`
  display: flex;
  width: 70vw;
  max-width: 400px;
  height: 45px;
  position: relative;
`

const RunImg = styled.img<any>`
  margin: 0px;
  height: 30px;
  position: absolute;
  left: ${props => props.timeProgress}%;
  bottom: 0px;
  transition: all;
`

const HomeImg = styled.div`
  display: inline-block;
  background-image: url(${props => props.theme.theme.home});
  position: absolute;
  left: 100%;
  bottom: 0px;
  background-size: cover;
  width: 30px;
  height: 30px;
`

const Progress = styled.div`
  color: ${props => props.theme.theme.color.defaultDotColor};
`