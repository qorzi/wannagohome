import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';

import ShutdownTitle from './ShutdownTitle'

function Shutdown() {
  const [showLine, setShowLines] = useState(1)
  const lines = [
    <ShutdownTitle
      key={0}
      value='Time is up!'
      time={50}
      lineNum={1}
      setShowLines={ setShowLines }></ShutdownTitle>,
    <ShutdownTitle
      key={1}
      value=':)'
      time={50}
      lineNum={2}
      setShowLines={ setShowLines }></ShutdownTitle>,
    <ShutdownTitle
      key={1}
      value='You must go home'
      time={50}
      lineNum={3}
      setShowLines={ setShowLines }></ShutdownTitle>,
    <ShutdownTitle
      key={1}
      value='Press any key...'
      time={50}
      lineNum={4}
      setShowLines={ setShowLines }></ShutdownTitle>
  ]
  const navigate = useNavigate()
  const onKeyUp = () => {
    navigate('/')
  }

  useEffect(() => {
    if (showLine > lines.length) {
      window.addEventListener('keydown', onKeyUp);
      window.addEventListener('click', onKeyUp);
    }
    return () => {
      window.removeEventListener('keydown', onKeyUp);
      window.removeEventListener('click', onKeyUp);
    }
  })


  return (
    <Blue onKeyUp={onKeyUp}>
      <TextBox>
        { lines.slice(0, showLine) }
      </TextBox>
    </Blue>
  )
}

export default Shutdown;

const Blue = styled.div`
  width: 100vw;
  height: 100vh;
  background: blue;
  display: flex;
  justify-content: center;
  color: white;
  padding: 40px;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  width: 100%;
  max-width: 400px
`