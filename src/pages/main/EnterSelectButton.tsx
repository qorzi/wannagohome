import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';

interface buttonProps {
  value: string
  time: number
  lineNum: number
  setShowLines: any
  routeLink: string
}

function EnterButton(props: buttonProps) {

  const enterTitleString = props.value
  const [buttonValue, setButtonValue] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const buttonTyping = setInterval(() => {
      setButtonValue(buttonValue + enterTitleString[count])
      setCount(count + 1)
      console.log(count)
    }, props.time)
    if (count === enterTitleString.length) {
      clearInterval(buttonTyping)
      props.setShowLines(props.lineNum + 1)
    }
    
    return () => clearInterval(buttonTyping)
  })

  const navigate = useNavigate()

  return (
    <Button onClick={() => { 
      navigate(`${props.routeLink}`)
    }}>{ buttonValue }</Button>
  )
}

export default EnterButton;

const Button = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  &:hover {
    color: ${props => props.theme.color.defaultBgColor};
    background: ${props => props.theme.color.defaultColor};
  }
`