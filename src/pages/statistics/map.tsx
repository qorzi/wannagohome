import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Korea from './korea';
import KoreaPixel from './korea copy'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function Map() {

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
        { alignment === 'map' ? <Korea/> : <KoreaPixel/>}
      </KoreaMap>
    </>
  )
}

export default Map

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

// const dummyData = {
//   [
//     {'지역': '경기',}
//   ],

//   [

//   ]
// }