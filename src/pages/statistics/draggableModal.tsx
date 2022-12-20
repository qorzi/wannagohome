import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import styled from 'styled-components';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableModal(props:any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <Dialog
        open={open}
        // onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <UpperTab>
            <CloseBtn onClick={handleClose} ><p>✕</p></CloseBtn>
            <DragBox id="draggable-dialog-title"><p>지역별 현황</p></DragBox>
          </UpperTab>

        <TextBox>
          <Text>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </Text>
        </TextBox>
      </Dialog>
    </div>
  );
}

const UpperTab = styled.div`
  display: flex;
`

const CloseBtn = styled.div`
  cursor: pointer;
  background: ${props => props.theme.color.defaultmdColor};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.defaultColor};
  &:hover { 
    background: red;
  }
`

const DragBox = styled.div`
  cursor: move;
  background: ${props => props.theme.color.defaultDotColor};
  width: 100;
  height: 30px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.defaultColor};
  font-family: 'DungGeunMo';
`

const TextBox = styled.div`
  padding: 32px;
  background: ${props => props.theme.color.defaultBgColor};
  color: ${props => props.theme.color.defaultColor};
`

const Text = styled.div`
  color: ${props => props.theme.color.defaultColor};
  font-family: 'DungGeunMo';
`