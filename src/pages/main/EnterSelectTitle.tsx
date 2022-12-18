import { useState, useEffect } from 'react';

interface titleProps {
  value: string
  time: number
  lineNum: number
  setShowLines: any
}

function EnterTitle(props: titleProps) {

  const enterTitleString = props.value
  const [enterTitle, setEnterTitle] = useState('')
  const [titleCount, setTitleCount] = useState(0)

  useEffect(() => {
    const titleTyping = setInterval(() => {
      setEnterTitle(enterTitle + enterTitleString[titleCount])
      setTitleCount(titleCount + 1)
    }, props.time)
    if (titleCount === enterTitleString.length) {
      clearInterval(titleTyping)
      props.setShowLines(props.lineNum + 1)
    }
    
    return () => clearInterval(titleTyping)
  })

  return (
    <h1>{ enterTitle }</h1>
  )
}

export default EnterTitle;