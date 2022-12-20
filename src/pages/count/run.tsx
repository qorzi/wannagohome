import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';

function Runner(props:any) {
  const runnerArray: any = [...props.theme.runner]

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
    <RunMain>
      <Road theme={props.theme} timeProgress={props.timerProgress}>
        <Run timeProgress={props.timerProgress}>
          <RunImg src={runner}></RunImg>
          <Progress theme={props.theme}>{(props.timerProgress).toFixed(3)}%</Progress>
        </Run>
      </Road>
      <HomeImg theme={props.theme}></HomeImg>
    </RunMain>
  )
}

export default Runner;

const RunMain = styled.div`
  display: flex;
  margin-top: 25px;
`

const Road = styled.div<any>`
  position: relative;timeProgress
  display: flex;
  width: 70vw;
  max-width: 400px;
  height: 33px;
  border-bottom: 2px dotted ${props => props.theme.color.defaultDotColor};
`

const Run = styled.div<any>`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: ${props => props.timeProgress}%;
`

const RunImg = styled.img<any>`
  margin: 0px;
  width: 20px;
  height: 30px;
  bottom: 0px;
  transition: all;
`

const HomeImg = styled.div`
  display: inline-block;
  background-image: url(${props => props.theme.home});
  bottom: 0px;
  background-size: cover;
  width: 30px;
  height: 30px;
`

const Progress = styled.div`
  color: ${props => props.theme.color.defaultColor};
  font-size: 16px;
  margin-block: -15px;
`