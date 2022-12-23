// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import Paper, { PaperProps } from '@mui/material/Paper';
// import Draggable from 'react-draggable';
// import styled from 'styled-components';
// import Week from '../WeekContent'
// import { useRecoilState } from 'recoil';
// import { weekModal } from '../../../atom'

// function PaperComponent(props: PaperProps) {
//   return (
//     <Draggable
//       handle="#draggable-dialog-title"
//       cancel={'[class*="MuiDialogContent-root"]'}
//     >
//       <Paper {...props} />
//     </Draggable>
//   );
// }

// export default function WeekModal(props:any) {
//   const [open, setOpen] = useRecoilState(weekModal);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       {/* <Button variant="outlined" onClick={handleClickOpen}>
//         Open draggable dialog
//       </Button> */}
//       <StyledDialog
//         open={open}
//         // onClose={handleClose}
//         PaperComponent={PaperComponent}
//         aria-labelledby="draggable-dialog-title"
//       >
//         <UpperTab>
//           <CloseBtn onClick={handleClose} ><p>✕</p></CloseBtn>
//           <DragBox id="draggable-dialog-title"><p>요일별 현황</p></DragBox>
//         </UpperTab>

//         <TextBox>
//           <Week/>
//         </TextBox>
//       </StyledDialog>
//     </div>
//   );
// }

// const StyledDialog = styled(Dialog)<any>`
//   // 겹친 영역 이벤트 처리, z-index를 무시하고 HTML 요소에 정의된 이벤트를 비활성화 한다.
//   // auto, none 존재
//   // pointer-events: auto;

//   .MuiBackdrop-root {
//     background: none;
//   }

//   .MuiDialog-container {

//   }

//   .MuiPaper-root {
//     border-top: 1px solid ${props => props.theme.color.defaultColor};
//     border-left: 1px solid ${props => props.theme.color.defaultColor};
//     border-right: 3px solid ${props => props.theme.color.defaultColor};
//     border-bottom: 3px solid ${props => props.theme.color.defaultColor};
//     border-radius: 0px;
//     box-shadow: none;
//   }
// `

// const UpperTab = styled.div`
//   display: flex;
//   border-bottom: 1px solid ${props => props.theme.color.defaultColor};
//   background-image: 
//     linear-gradient(to bottom, transparent, transparent 30%, ${props => props.theme.color.defaultBgColor} 30%),
//     linear-gradient(to right, ${props => props.theme.color.defaultDotColor}, ${props => props.theme.color.defaultDotColor} 30%, ${props => props.theme.color.defaultBgColor} 30%);
//   background-size: 4px 4px;
// `

export {}
// const CloseBtn = styled.div`
//   cursor: pointer;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${props => props.theme.color.defaultColor};
//   &:hover { 
//     background: red;
//   }
// `

// const DragBox = styled.div`
//   cursor: move;
//   width: 100;
//   height: 30px;
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${props => props.theme.color.defaultColor};
//   font-family: 'DungGeunMo';
// `

// const TextBox = styled.div`
//   padding: 15px;
//   background-image: 
//     linear-gradient(to bottom, transparent, transparent 10%, ${props => props.theme.color.defaultBgColor} 10%),
//     linear-gradient(to right, ${props => props.theme.color.defaultDotColor}, ${props => props.theme.color.defaultDotColor} 10%, ${props => props.theme.color.defaultBgColor} 10%);
//   background-size: 12px 12px;
//   color: ${props => props.theme.color.defaultColor};

// `