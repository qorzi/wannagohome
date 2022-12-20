import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Runner from './run'

function TimerCount(props:any) {
  const targetTime = props.targetTime
  const setShowTimer = props.setShowTimer
  const [timerHour, setTimerHour] = useState<number>(0)
  const [timerMin, setTimerMin] = useState<number>(0)
  const [timerSec, setTimerSec] = useState<number>(0)
  const [currentTimer, setCurrentTimer] = useState<number>(0)
  const [startTime, setStartTime] = useState<number>(0)
  const [timerProgress, setTimerProgress] = useState<number>(0)

  const navigate = useNavigate()

  // 타이머 시간 계산(최초 1회)
  useEffect(() => {
    const date = new Date()
    setStartTime(date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())
    setCurrentTimer(targetTime - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()))
  }, [])

  // 타이머 작동함수
  const timerWork = () => {
    setTimerProgress(100 - currentTimer / (targetTime - startTime) * 100)
    setCurrentTimer(currentTimer - 1)
    console.log(currentTimer)
    
    if (currentTimer === 0) {
      navigate('/shutdown')
    }

    const Hour = Math.floor(currentTimer / 3600)
    const Min = Math.floor((currentTimer % 3600) / 60)
    const Sec = Math.floor((currentTimer % 3600) % 60)
    setTimerHour(Hour)
    setTimerMin(Min)
    setTimerSec(Sec)
  }

  // 1초에 한번 타이머 -1
  useEffect(() => {
    const startTimer = setInterval(() => {
      timerWork()
    }, 1000)

    return () => {
      clearInterval(startTimer)
    }
  })

  return (
    <TimerCountMain>
      <TimerClock onClick={() => setShowTimer(false)}>
        <span>{String(timerHour).padStart(2,'0')}</span>
        :<span>{String(timerMin).padStart(2,'0')}</span>
        :<span>{String(timerSec).padStart(2,'0')}</span>
      </TimerClock>
      <Runner theme={props.theme} timerProgress={timerProgress}></Runner>
    </TimerCountMain>
  )
}

export default TimerCount;

const TimerCountMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TimerClock = styled.div`
  cursor: pointer;
`