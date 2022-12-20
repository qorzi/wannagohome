import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Runner from './run'

import TimerSet from './timerSet';
import TimerCount from './timerCount';

function Timer(props:any) {
  const [showTimer, setShowTimer] = useState<boolean>(false)
  const [targetTime, setTargetTime] = useState<number>(64800)

  if (showTimer) {
    return (
      <TimerMain>
        <TimerCount targetTime={targetTime} theme={props.theme} setShowTimer={setShowTimer}></TimerCount>
      </TimerMain>
    )
  } else {
    return (
      <TimerMain>
        <TimerSet targetTime={targetTime} setTargetTime={setTargetTime} setShowTimer={setShowTimer}></TimerSet>
      </TimerMain>
    )
  }


}

export default Timer;

const TimerMain = styled.div`
  position: fixed;
`