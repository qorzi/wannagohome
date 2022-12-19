import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Runner from './run'

function Timer(props:any) {

  const targetHour = 23
  const targetMin = 0
  const targetSec = 0

  const [timer, setTimer] = useState({
    Hour: "00",
    Min: "00",
    Sec: "00"
  })
  const [secColon, setSecColon] = useState(" ")

  const currentTimer = () => {
    const date = new Date()
    const currentHour = String(date.getHours()).padStart(2, "0")
    const currentMin = String(date.getMinutes()).padStart(2, "0")
    const currentSec = String(date.getSeconds()).padStart(2, "0")
    setTimer({
      Hour: currentHour,
      Min: currentMin,
      Sec: currentSec
    })
  }
  const flickerColon = () => {
    if (secColon === ":") {
      setSecColon(" ")
    } else {
      setSecColon(":")
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

  return (
    <div>
      <div>time</div>
      <div>{ timer.Hour }{ secColon }{ timer.Min }{ secColon }{ timer.Sec }</div>
      <Runner theme={ props }></Runner>
    </div>
  )
}

export default Timer;