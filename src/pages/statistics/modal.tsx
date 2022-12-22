import * as React from 'react';
import MapModal from './mapModal';
import WeekModal from './weekModal';
import Button from '@mui/material/Button';
import { weekModal, mapModal } from '../../atom'
import { useState, useEffect } from 'react';

import countDataIn from '../../ajax/countDataIn'
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

export default function Modal() {
  const [openWeek, setWeekOpen] = useRecoilState(weekModal);
  const [openMap, setMapOpen] = useRecoilState(mapModal);

  const handleClickOpen = () => {
    setWeekOpen(true);
    setMapOpen(true);
  };


  const [data, setData] = useRecoilState<RegionDataType[]>(countData)
  // console.log('여긴 통과')
  
  useEffect(() => {
    try {
      const getData = async () => await countDataIn();
      getData().then((res) => {
        // console.log('왜 작동 안해')
        setData(res)
      })
    } catch (e) {
      console.log(e)
    }
  }, [setData]);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <MapModal/>
      <WeekModal/>
    </>
  )
}