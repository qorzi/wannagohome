import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './EnterLoading.scss';

function EnterLoading() {
  const spinnerArray = ['/', '-', '\\', '|']
  const [spinner, setSpinner] = useState('')
  const [spinnerCount, setSpinnerCount] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const wordTyping = setInterval(() => {
      setSpinner(spinnerArray[spinnerCount])
      setProgress(progress + 1)
      if (spinnerCount < 3) {
        setSpinnerCount(spinnerCount + 1)
      } else {
        setSpinnerCount(0)
      }
      console.log(spinnerCount)
    }, 100)
    return () => clearInterval(wordTyping)
  })
  function Loading() {
    return (
      <p>Loading...{ spinner }</p>
    )
  }

  return (
    <TextBox>
      <Loading></Loading>
      <LoadingBox>
        <LoadingBar className='loading-bar'></LoadingBar>
      </LoadingBox>
      
    </TextBox>
  )
}

export default EnterLoading;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
`

const LoadingBox = styled.div`
  margin-top: 10px;
  width: 100%;
  border: ${props => props.theme.color.defaultColor} 3px solid;
  padding: 5px
`

const LoadingBar = styled.div`
  width: 100%;
  height: 20px;
  background-image: 
    linear-gradient(to bottom, transparent, transparent 50%, ${props => props.theme.color.defaultBgColor} 50%),
    linear-gradient(to right, ${props => props.theme.color.defaultColor}, ${props => props.theme.color.defaultColor} 50%, ${props => props.theme.color.defaultBgColor} 50%);
  background-size: 3px 3px;
`