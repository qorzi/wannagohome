import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Runner from './run'

import TimerSet from './timerSet';
import TimerCount from './timerCount';

function Timer(props:any) {
  const [showTimer, setShowTimer] = useState<boolean>(false)
  const [targetTime, setTargetTime] = useState<number>(64800)

  const openModal = () => {
    props.openModal('map')
    props.openModal('week')
  }

  if (showTimer) {
    return (
      <TimerMain>
        <TimerCount targetTime={targetTime} theme={props.theme} setShowTimer={setShowTimer}></TimerCount>
        <StatBox>
          <StatBtn onClick={openModal}>통계보기</StatBtn>
        </StatBox>
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
  // position: fixed;
`
const StatBox = styled.div`
  display: flex;
  justify-content: center;
`

const StatBtn = styled.div`
  margin-top: 20px;
  font-size: 16px;
  line-height: 16px;
  padding: 4px;

  &:hover {
    cursor: pointer;
  }
`