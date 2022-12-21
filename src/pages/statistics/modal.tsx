import * as React from 'react';
import MapModal from './mapModal';
import WeekModal from './weekModal';
import Button from '@mui/material/Button';

import { useRecoilState } from 'recoil';
import { weekModal, mapModal } from '../../atom'
import { useState, useEffect } from 'react';

export default function Modal() {
  const [openWeek, setWeekOpen] = useRecoilState(weekModal);
  const [openMap, setMapOpen] = useRecoilState(mapModal);
  const [over, setOver] = useState<boolean>(true);

  const handleClickOpen = () => {
    setWeekOpen(true);
    setMapOpen(true);
  };

  return (
    <>
      {/* <div
        onMouseOver={() => {
          setOver(true)
        }}
        onMouseLeave= {() => {
          setOver(false)
        }}
        >
      </div> */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <MapModal/>
      <WeekModal/>
    </>
  )
}