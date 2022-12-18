import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';

import EnterTitle from './EnterSelectTitle'
import EnterButton from './EnterSelectButton'

import { dark, light } from '../../theme/theme';

function EnterSelect() {
  const [showLine, setShowLines] = useState(1)

  const lines = [
    <EnterTitle 
      value="Do you wanna go home?" 
      time={50} 
      lineNum={ 1 } 
      setShowLines={ setShowLines }></EnterTitle>,
    <EnterButton 
      value="Yes" 
      time={50} 
      lineNum={ 2 } 
      setShowLines={ setShowLines }
      routeLink="/count"></EnterButton>,
    <EnterButton 
      value="Nope" 
      time={50} 
      lineNum={ 3 } 
      setShowLines={ setShowLines }
      routeLink="/blue"></EnterButton>,
  ]

  return (
    <TextBox>
      { lines.slice(0, showLine) }
    </TextBox>
  )
}

export default EnterSelect;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
`