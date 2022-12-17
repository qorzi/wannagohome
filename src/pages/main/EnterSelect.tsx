import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { dark, light } from '../../theme/theme';

function EnterSelect() {

  // 텍스트 타이핑 효과 함수
  function EnterTitle(props: any) {
    const enterTitleString = props.text
    const [enterTitle, setEnterTitle] = useState('')
    const [titleCount, setTitleCount] = useState(0)

    useEffect(() => {
      const wordTyping = setInterval(() => {
        setEnterTitle(enterTitle + enterTitleString[titleCount])
      setTitleCount(titleCount + 1)
      }, parseInt(props.time))
      if (titleCount === enterTitleString.length) {
        clearInterval(wordTyping)
      }
      return () => clearInterval(wordTyping)
    })
    return (
      <h1>{ enterTitle }</h1>
    )
  }

  return (
    <TextBox>
      <EnterTitle text='Do you wanna go home?' time='50'></EnterTitle>
      <EnterButton>Yes</EnterButton>
      <EnterButton>No</EnterButton>
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

const EnterButton = styled.div`
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