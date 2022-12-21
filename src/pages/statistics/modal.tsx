import * as React from 'react';
import MapModal from './mapModal';
import WeekModal from './weekModal';
import Button from '@mui/material/Button';

import { useRecoilState } from 'recoil';
import { weekModal, mapModal } from '../../atom'

export default function Modal() {
  const [openWeek, setWeekOpen] = useRecoilState(weekModal);
  const [openMap, setMapOpen] = useRecoilState(mapModal);

  const handleClickOpen = () => {
    setWeekOpen(true);
    setMapOpen(true);
  };

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