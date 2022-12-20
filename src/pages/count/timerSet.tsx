import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';

function TimerSet(props:any) {
  const targetTime = props.targetTime
  const setTargetTime = props.setTargetTime
  const setShowTimer = props.setShowTimer
  const [targetHour, setTargetHour] = useState<number>(0)
  const [targetMin, setTargetMin] = useState<number>(0)

  const [currentTime, setCurrentTime] = useState<number>(0)

  useEffect(() => {
    const Hour = Math.floor(targetTime / 3600)
    const Min = Math.floor((targetTime % 3600) / 60)
    setTargetHour(Hour)
    setTargetMin(Min)
    
    const date = new Date()
    setCurrentTime((date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()))
    
    console.log(targetTime, currentTime)
  }, [targetTime])

  return (
    <TimerSetBox>
      <TimerSetMain>
        <TimerSetNum>
          <TimerNumSetArrow 
            onClick={ () => {
              if (targetTime + 3600 < 86400) {
                setTargetTime(targetTime + 3600)
              }
            }
          }>+</TimerNumSetArrow>
          <TimeNum>{ String(targetHour).padStart(2,'0') }</TimeNum>
          <TimerNumSetArrow 
            onClick={ () => {
              if (targetTime - 3600 > currentTime) {
                setTargetTime(targetTime - 3600)
              } else {
                setTargetTime(currentTime + 600 - (currentTime + 600) % 600)
              }
            }
          }>-</TimerNumSetArrow>
        </TimerSetNum>
        :
        <TimerSetNum>
          <TimerNumSetArrow 
            onClick={ () => {
              if (targetTime + 600 < 86400) {
                setTargetTime(targetTime + 600)
              }
            }
          }>+</TimerNumSetArrow>
          <TimeNum>{ String(targetMin).padStart(2,'0') }</TimeNum>
          <TimerNumSetArrow 
            onClick={ () => {
              if (targetTime - 600 > currentTime) {
                setTargetTime(targetTime - 600)
              } else {
                setTargetTime(currentTime + 600 - (currentTime + 600) % 600)
              }
            }
          }>-</TimerNumSetArrow>
        </TimerSetNum>:00
      </TimerSetMain>
      <TimerStartBtn onClick={ () => setShowTimer(true) }>Start</TimerStartBtn>
    </TimerSetBox>
  )
}
 

export default TimerSet;

const TimerSetMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  max-width: 400px;
`
const TimerSetBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TimerSetNum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TimeNum = styled.div`
  
`
const TimerNumSetArrow = styled.div`
  z-index: 90;
  cursor: pointer;
  line-height: 10px;
  &:hover {
    font-weight: bold;
  }
  &:active {
    color: ${props => props.theme.color.defaultBgColor};
  }
`
const TimerStartBtn = styled.div`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  &:hover {
    font-weight: bold;
  }
`