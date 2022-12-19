import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Runner from './run'

function Timer(props:any) {
  const [targetTime, setTargetTime] = useState<any>(false)
  const [startTime, setStartTime] = useState<any>()
  const [timerProgress, setTimerProgress] = useState<any>(false)
  const [timer, setTimer] = useState({
    Hour: "00",
    Min: "00",
    Sec: "00"
  })
  const [secColon, setSecColon] = useState(" ")

  // 현재시간 불러오기
  const currentTimer = () => {
    const date = new Date()
    let time = targetTime - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())

    setTimerProgress(100 - time / startTime * 100)

    if (time >= 0) {
      const Hour = Math.floor(time / 3600)
      time -= Hour * 3600
      const Min = Math.floor(time / 60)
      time -= Min * 60
      const Sec = time

      setTimer({
        Hour: String(Hour).padStart(2, "0"),
        Min: String(Min).padStart(2, "0"),
        Sec: String(Sec).padStart(2, "0")
      })
    }
  }

  // 타이머 설정 버튼 클릭시 실행
  const startTimer = () => {
    const targetTimeInput = (document.querySelector('#targetTimeInput') as HTMLInputElement)
    if (targetTimeInput.value) {
      const target = parseInt(targetTimeInput.value.slice(0, 2)) * 3600 + parseInt(targetTimeInput.value.slice(3, 5)) * 60
      setTargetTime(target)
      const date = new Date()
      setStartTime(target - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()))
    } 
  }

  useEffect(() => {
    const startTimer = setInterval(() => {
      currentTimer()
      if (secColon === ":") {
        setSecColon(" ")
      } else {
        setSecColon(":")
      }
    }, 500)

    return () => {
      clearInterval(startTimer)
    }
  })
  
  if (targetTime === false) {
    return (
      <div>
        <div>time</div>
        <TimeInput type="time" id="targetTimeInput"></TimeInput>
        <StartButton onClick={startTimer}>Set</StartButton>
      </div>
    )
  } else {
    return (
      <div>
        <div>time</div>
        <div>{ timer.Hour }{ secColon }{ timer.Min }{ secColon }{ timer.Sec }</div>
        <Runner timerProgress={timerProgress} theme={ props }></Runner>
      </div>
    )
  }

}

export default Timer;

const TimeInput = styled.input`
  background: none;
  border: 2px solid;
  outline: none;
  width: 230px;
  height: 50px;
  font-size: mideum;
`
const StartButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: block;
  &:hover {

  }
`