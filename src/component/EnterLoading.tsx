import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './EnterLoading.scss';

function EnterLoading() {
  const spinnerArray = ['/', '-', '\\', '|']
  const [spinner, setSpinner] = useState('')
  const [spinnerCount, setSpinnerCount] = useState(0)

  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const loadSpinner = setInterval(() => {
      setSpinner(spinnerArray[spinnerCount])
      setProgress(progress + 100 / 13)
      if (spinnerCount < 3) {
        setSpinnerCount(spinnerCount + 1)
      } else {
        setSpinnerCount(0)
      }
      console.log(spinnerCount, String(progress))
    }, 100)
    return () => clearInterval(loadSpinner)
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
        <LoadingBar progress={ progress } className='loading-bar'></LoadingBar>
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

interface LoadingBar {
  progress: number;
  theme: any;
}

const LoadingBar = styled.div<LoadingBar>`
  width: ${props => props.progress}%;
  height: 20px;
  background-image:
    linear-gradient(to bottom, transparent, transparent 70%, ${props => props.theme.color.defaultBgColor} 70%),
    linear-gradient(to right, ${props => props.theme.color.defaultColor}, ${props => props.theme.color.defaultColor} 70%, ${props => props.theme.color.defaultBgColor} 70%);
  background-size: 3px 3px;
`