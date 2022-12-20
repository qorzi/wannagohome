import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Korea from './korea';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



function Map() {
  //오늘 날짜를 정수열로 1~31까지 가져옴
  const todayNum = new Date().getDate()
  // 0부터 요일순으로 정수
  const day = new Date().getDay()
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  const todayWord = week[day];
  console.log(todayWord, todayNum)

  const [alignment, setAlignment] = useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment !== null)
    setAlignment(newAlignment);
  };

  return (
    <>
      <KoreaMap>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="map" style={{width: '200px', borderRadius: '10px 0 0 10px'}}>지도</ToggleButton>
          <ToggleButton value="list" style={{width: '200px', borderRadius: '0 10px 10px 0'}}>리스트</ToggleButton>
        </ToggleButtonGroup>
        { alignment === 'map' ? <Korea/> : null}
      </KoreaMap>
    </>
  )
}

export default Map

const regionInfo = styled.div`
  
`

const KoreaMap = styled.div`
  width: 600px;
  height: 820px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, .05);
`

const dummyData = {
  20:[
    {'전체카운트': 20000},
    {'지역별': {'서울': 234, '대구': 213, '인천': 321, '부산':123, '광주':123, '대전':123, '울산':123, '세종':123, '경기':123, '강원':123, '충북':123, '충남':123, '전북':123, '전남':123, '경북':123, '경남':123, '제주':123}}
  ],

  19:[
    {'전체카운트': 20000},
    {'지역별': {'서울': 234, '대구': 213, '인천': 321, '부산':123, '광주':123, '대전':123, '울산':123, '세종':123, '경기':123, '강원':123, '충북':123, '충남':123, '전북':123, '전남':123, '경북':123, '경남':123, '제주':123}}
  ],

  18: [
    {'전체카운트': 20000},
    {'지역별': {'서울': 234, '대구': 213, '인천': 321, '부산':123, '광주':123, '대전':123, '울산':123, '세종':123, '경기':123, '강원':123, '충북':123, '충남':123, '전북':123, '전남':123, '경북':123, '경남':123, '제주':123}}
  ],

  17: [
    {'전체카운트': 20000},
    {'지역별': {'서울': 234, '대구': 213, '인천': 321, '부산':123, '광주':123, '대전':123, '울산':123, '세종':123, '경기':123, '강원':123, '충북':123, '충남':123, '전북':123, '전남':123, '경북':123, '경남':123, '제주':123}}
  ],

  16: [
    {'전체카운트': 20000},
    {'지역별': {'서울': 234, '대구': 213, '인천': 321, '부산':123, '광주':123, '대전':123, '울산':123, '세종':123, '경기':123, '강원':123, '충북':123, '충남':123, '전북':123, '전남':123, '경북':123, '경남':123, '제주':123}}
  ],

  15: [
    {'전체카운트': 20000},
    {'지역별': {'서울': 234, '대구': 213, '인천': 321, '부산':123, '광주':123, '대전':123, '울산':123, '세종':123, '경기':123, '강원':123, '충북':123, '충남':123, '전북':123, '전남':123, '경북':123, '경남':123, '제주':123}}
  ],

  14: [
    {'전체카운트': 20000},
    {'지역별': {'서울': 234, '대구': 213, '인천': 321, '부산':123, '광주':123, '대전':123, '울산':123, '세종':123, '경기':123, '강원':123, '충북':123, '충남':123, '전북':123, '전남':123, '경북':123, '경남':123, '제주':123}}
  ],
}