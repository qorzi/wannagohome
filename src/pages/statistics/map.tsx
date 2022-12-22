import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import KoreaMap from './KoreaMap';
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
} from './regions';
import countDataIn from '../../ajax/countDataIn'
import { useRecoilState } from 'recoil';
import { countData } from '../../atom';


function Map() {

  // const [data, setCountData] = useRecoilState<Object>(countData)

  // useEffect(() => {
  //   countDataIn()
  //   console.log(data)
  // }
  // )

  return (
    <>
      <MapBox>
        <KoreaMap></KoreaMap>
      </MapBox>
      <RegionBox>
        <Region1/>
        <Region2/>
        <Region3/>
        <Region4/>
        <Region5/>
        <Region6/>
        <Region7/>
        <Region8/>
        <Region9/>
        <Region10/>
        <Region11/>
        <Region12/>
        <Region13/>
        <Region14/>
        <Region15/>
        <Region16/>
        <Region17/>
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
