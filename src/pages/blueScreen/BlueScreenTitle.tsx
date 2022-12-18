import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface titleProps {
  value: string
  time: number
  lineNum: number
  setShowLines: any
}

function BlueScreenTitle(props:titleProps) {

  const titleString = props.value
  const [blueTitle, setBlueTitle] = useState('')
  const [titleCount, setTitleCount] = useState(0)

  useEffect(() => {
    const titleTyping = setInterval(() => {
      setBlueTitle(blueTitle + titleString[titleCount])
      setTitleCount(titleCount + 1)
    }, props.time)
    if (titleCount === titleString.length) {
      clearInterval(titleTyping)
      props.setShowLines(props.lineNum + 1)
    }
    
    return () => clearInterval(titleTyping)
  })

  return (
    <div>{blueTitle}</div>
  )
}

export default BlueScreenTitle;