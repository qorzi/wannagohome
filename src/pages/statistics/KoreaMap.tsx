import styled from 'styled-components';
import KoreaPath from './KoreaPath';
import {
  Region1,
  Region2,
  Region3,
  Region4,
  Region5,
  Region6,
  Region7,
  Region8,
  Region9,
  Region10,
  Region11,
  Region12,
  Region13,
  Region14,
  Region15,
  Region16,
  Region17
} from './RegionInfo';
import { useRecoilState } from 'recoil';
import { countData } from '../../atom';

interface RegionType {
  [key: string]: {
    [key: string]: number
  }
}

interface RegionDataType {
  [key: string]: RegionType | string | number
}

function Map() {
  
  const [data, setData] = useRecoilState<RegionDataType[]>(countData)

  // 오늘 날짜를 정수열로 1~31까지 가져옴
  // const todayNum = new Date().getDate()
  // 0부터 요일순으로 정수
  const day = new Date().getDay()
  // const week = ['일', '월', '화', '수', '목', '금', '토']
  // const todayWord = week[day]
  // console.log(todayWord, todayNum, day)
  const todayData = data[day]
  // console.log(todayData)

  return (
    <>
      <MapBox>
        <KoreaPath></KoreaPath>
      </MapBox>
      <RegionBox>
        <Region1 regionData={todayData} />
        <Region2 regionData={todayData} />
        <Region3 regionData={todayData} />
        <Region4 regionData={todayData} />
        <Region5 regionData={todayData} />
        <Region6 regionData={todayData} />
        <Region7 regionData={todayData} />
        <Region8 regionData={todayData} />
        <Region9 regionData={todayData} />
        <Region10 regionData={todayData} />
        <Region11 regionData={todayData} />
        <Region12 regionData={todayData} />
        <Region13 regionData={todayData} />
        <Region14 regionData={todayData} />
        <Region15 regionData={todayData} />
        <Region16 regionData={todayData} />
        <Region17 regionData={todayData} />
      </RegionBox>
    </>
  )
}

export default Map

const MapBox = styled.div`

`
const RegionBox = styled.div`
  position: absolute;
  width: 414px;
  height: 576px; 
  top: 30px;
  left: 0;
`
