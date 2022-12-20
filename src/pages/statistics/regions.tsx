import styled from 'styled-components';

export function Region1() {

  return (
    <>
      <Info>
        <p>서울</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region2() {

  return (
    <>
      <Info>
        <p>대구</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region3() {

  return (
    <>
      <Info>
        <p>인천</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region4() {

  return (
    <>
      <Info>
        <p>부산</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region5() {

  return (
    <>
      <Info>
        <p>광주</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region6() {

  return (
    <>
      <Info>
        <p>대전</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region7() {

  return (
    <>
      <Info>
        <p>울산</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region8() {

  return (
    <>
      <Info>
        <p>세종</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region9() {

  return (
    <>
      <Info>
        <p>경기</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region10() {

  return (
    <>
      <Info>
        <p>강원</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region11() {

  return (
    <>
      <Info>
        <p>충북</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region12() {

  return (
    <>
      <Info>
        <p>충남</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region13() {

  return (
    <>
      <Info>
        <p>전북</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region14() {

  return (
    <>
      <Info>
        <p>전남</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region15() {

  return (
    <>
      <Info>
        <p>경북</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region16() {

  return (
    <>
      <Info>
        <p>경남</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

export function Region17() {

  return (
    <>
      <Info>
        <p>제주</p>
        <p>1,004</p>
        <p>4 ↑</p>
      </Info>
    </>
  )
}

const Info = styled.div`
  border-top: 1px solid ${props => props.theme.color.defaultColor};
  border-left: 1px solid ${props => props.theme.color.defaultColor};
  border-right: 2px solid ${props => props.theme.color.defaultColor};
  border-bottom: 2px solid ${props => props.theme.color.defaultColor};
  border-radius: 0px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'DungGeunMo';
  background: ${props => props.theme.color.defaultBgColor};
  width: 50px;
  padding: 4px;
  position: absolute;
  p:first-child {
    font-size: 12px;
  }

  // 서울
  &:nth-child(1) {
    left: 33%;
    top: 27%

  }
  // 대구
  &:nth-child(2) {
    right: 29%;
    bottom: 37%;
  }
  // 인천
  &:nth-child(3) {
    left: 18%;
    top: 24%
  }
  // 부산
  &:nth-child(4) {
    right: 27%;
    bottom: 22%
  }
  // 광주
  &:nth-child(5) {
    left: 33%;
    bottom: 25%;
  }
  // 대전
  &:nth-child(6) {
    left: 45%;
    bottom: 41%;
  }
  // 울산
  &:nth-child(7) {
    right: 15%;
    bottom: 30%;
  }
  // 세종
  &:nth-child(8) {
    left: 29%;
    top: 40%;
  }
  // 경기
  &:nth-child(9) {
    left: 26%;
    top: 14%;
  }
  // 강원
  &:nth-child(10) {
    right: 33%;
    top: 20%
  }
  // 충북
  &:nth-child(11) {
    right: 40%;
    top: 37%;
  }
  // 충남
  &:nth-child(12) {
    left: 18%;
    bottom: 40%;
  }
  // 전북
  &:nth-child(13) {
    left: 31%;
    bottom: 37%;
  }
  // 전남
  &:nth-child(14) {
    left: 17%;
    bottom: 22%;
  }
  // 경북
  &:nth-child(15) {
    right: 23%;
    bottom: 52%;
  }
  // 경남
  &:nth-child(16) {
    right: 40%;
    bottom: 26%;
  }
  // 제주
  &:nth-child(17) {
    left: 24%;
    bottom: 10%;
  }
`