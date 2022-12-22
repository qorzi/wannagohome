import styled from 'styled-components';

function upToDown(data:any) {
  // regionData['지역별']['서울']
  const difference = data['오늘'] - data['어제']
  // console.log(difference)
  if (difference > 0) {
    return difference + '↑'
  } else if (difference < 0) {
    return difference + '↓'
  } else {
    return '-'
  }
}

type Props = {
  regionData: any
}

export function Region1({ regionData }: Props ) {
  // console.log(regionData)
  return (
    <>
      <Info>
        <p>서울</p>
        <p>{regionData['지역별']['서울']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['서울'])}</p>
      </Info>
    </>
  )
}

export function Region2({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>대구</p>
        <p>{regionData['지역별']['대구']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['대구'])}</p>
      </Info>
    </>
  )
}

export function Region3({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>인천</p>
        <p>{regionData['지역별']['인천']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['인천'])}</p>
      </Info>
    </>
  )
}

export function Region4({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>부산</p>
        <p>{regionData['지역별']['부산']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['부산'])}</p>
      </Info>
    </>
  )
}

export function Region5({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>광주</p>
        <p>{regionData['지역별']['광주']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['광주'])}</p>
      </Info>
    </>
  )
}

export function Region6({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>대전</p>
        <p>{regionData['지역별']['대전']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['대전'])}</p>
      </Info>
    </>
  )
}

export function Region7({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>울산</p>
        <p>{regionData['지역별']['울산']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['울산'])}</p>
      </Info>
    </>
  )
}

export function Region8({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>세종</p>
        <p>{regionData['지역별']['세종']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['세종'])}</p>
      </Info>
    </>
  )
}

export function Region9({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>경기</p>
        <p>{regionData['지역별']['경기']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['경기'])}</p>
      </Info>
    </>
  )
}

export function Region10({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>강원</p>
        <p>{regionData['지역별']['강원']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['강원'])}</p>
      </Info>
    </>
  )
}

export function Region11({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>충북</p>
        <p>{regionData['지역별']['충북']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['충북'])}</p>
      </Info>
    </>
  )
}

export function Region12({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>충남</p>
        <p>{regionData['지역별']['충남']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['충남'])}</p>
      </Info>
    </>
  )
}

export function Region13({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>전북</p>
        <p>{regionData['지역별']['전북']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['전북'])}</p>
      </Info>
    </>
  )
}

export function Region14({ regionData }: Props ) {

  return (
    <>
      <Info>
        <p>전남</p>
        <p>{regionData['지역별']['전남']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['전남'])}</p>
      </Info>
    </>
  )
}

export function Region15( { regionData }: Props ) {

  return (
    <>
      <Info>
        <p>경북</p>
        <p>{regionData['지역별']['경북']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['경북'])}</p>
      </Info>
    </>
  )
}

export function Region16( { regionData }: Props ) {

  return (
    <>
      <Info>
        <p>경남</p>
        <p>{regionData['지역별']['경남']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['경남'])}</p>
      </Info>
    </>
  )
}

export function Region17( { regionData }: Props ) {

  return (
    <>
      <Info>
        <p>제주</p>
        <p>{regionData['지역별']['제주']['오늘']}</p>
        <p>{upToDown(regionData['지역별']['제주'])}</p>
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