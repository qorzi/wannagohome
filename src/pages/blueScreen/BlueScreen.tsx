import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';

import BlueScreenTitle from './BlueScreenTitle'

function BlueScreen() {
  const [showLine, setShowLines] = useState(1)
  const lines = [
    <BlueScreenTitle
      key={0}
      value='Error!'
      time={50}
      lineNum={1}
      setShowLines={ setShowLines }></BlueScreenTitle>,
    <BlueScreenTitle
      key={1}
      value=':('
      time={50}
      lineNum={2}
      setShowLines={ setShowLines }></BlueScreenTitle>,
    <BlueScreenTitle
      key={1}
      value='Please work hard'
      time={50}
      lineNum={3}
      setShowLines={ setShowLines }></BlueScreenTitle>,
    <BlueScreenTitle
      key={1}
      value='Press any key...'
      time={50}
      lineNum={4}
      setShowLines={ setShowLines }></BlueScreenTitle>
  ]
  const navigate = useNavigate()
  const onKeyUp = () => {
    navigate('/')
  }

  useEffect(() => {
    if (showLine > lines.length) {
      window.addEventListener('keydown', onKeyUp);
    }
    return () => {
      window.removeEventListener('keydown', onKeyUp);
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

export default BlueScreen;

const Blue = styled.div`
  width: 100vw;
  height: 100vh;
  background: blue;
  display: flex;
  justify-content: center;
  color: white;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  width: 100%;
  max-width: 400px
`