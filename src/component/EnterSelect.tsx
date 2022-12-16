import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { dark, light } from '../theme/theme';

function EnterSelect() {
  function EnterTitle() {
    return (
      <h1>{ enterTitle }</h1>
    )
  }

  const enterTitleString = 'Do you wanna go home?'
  const [enterTitle, setEnterTitle] = useState('')
  const [titleCount, setTitleCount] = useState(0)
  
  const lines = [<EnterTitle></EnterTitle>]

  useEffect(() => {
    const wordTyping = setInterval(() => {
      setEnterTitle(enterTitle + enterTitleString[titleCount])
      setTitleCount(titleCount + 1)
    }, 100)
    if (titleCount === enterTitleString.length) {
      clearInterval(wordTyping)
    }
    return () => clearInterval(wordTyping)
  })

  return (
    <TextBox>
      {lines}
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

const EnterButton = styled.button`
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