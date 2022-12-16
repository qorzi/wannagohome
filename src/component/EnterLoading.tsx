import { useState, useEffect } from 'react';
import styled from 'styled-components';

function EnterLoading() {
  const spinnerArray = ['/', '-', '\\', '|']
  const [spinner, setSpinner] = useState('')
  const [spinnerCount, setSpinnerCount] = useState(0)

  useEffect(() => {
    const wordTyping = setInterval(() => {
      setSpinner(spinnerArray[spinnerCount])
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