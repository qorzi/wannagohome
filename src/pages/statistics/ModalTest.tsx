import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function ModalTest() {
  // 각 모달의 위치 값
  const [modalPosition, setModalPosition] = useState<any>({
    map: { top: 20, left: 20 },
    week: { top: 50, left: 50 }
  })

  // 각 모달의 z-index값
  const [modalZIndex, setModalZIndex] = useState<any>({
    map: 0,
    week: 0
  })

  // 선택된 창 가장 앞으로 보내기
  const moveFront = (name: string) => {
    const newModalZIndex = modalZIndex
    for (let key in newModalZIndex) {
      if (key === name) {
        newModalZIndex[key] = 99
      } else {
        newModalZIndex[key] = 0
      }
    }
    setModalZIndex(newModalZIndex)
  }

  // 실시간 마우스 위치값(리렌더링 목적)
  const [mouseMoveX, setMouseMoveX] = useState<number>(0)
  const [mouseMoveY, setMouseMoveY] = useState<number>(0)

  // 드래그 마우스 위치 변경시 추적 및 창 위치 변경
  const mouseMove = (event: React.MouseEvent) => {
    if (draggable) {
      setMouseMoveX(event.clientX)
      setMouseMoveY(event.clientY)
      const moveModal = modalPosition
      moveModal[draggableModal.name] = {
        left: draggableModal.left + event.clientX - mouseX,
        top: draggableModal.top + event.clientY - mouseY
      }
      setModalPosition(moveModal)
    }
  }
  
  // 드래그 활성화 여부
  const [draggable, setDraggable] = useState<boolean>(false)
  const [draggableModal, setDraggableModal] = useState<any>({})
  
  // 클릭시 마우스 위치
  const [mouseX, setMouseX] = useState<number>(0)
  const [mouseY, setMouseY] = useState<number>(0)
  
  // 모달 드래그 시작
  const dragStart = (name: string) => {
    return (event: React.MouseEvent) => {
      setMouseX(event.clientX)
      setMouseY(event.clientY)
      moveFront(name)
      setDraggableModal({
        name: name,
        top: modalPosition[name].top,
        left: modalPosition[name].left
      })
      setDraggable(true)
      event.preventDefault();
    }
  }
  // 모달 드래그 종료
  const dragEnd = () => {
    return (event: React.MouseEvent) => {
      setDraggable(false)
      setDraggableModal({})
      event.preventDefault();
    }
  }

  return (
    <DraggableBackground onMouseMove={ (event: any) => {mouseMove(event)} }>
      <Modal setting={modalPosition.map} z={modalZIndex.map} onClick={() => {moveFront("map")}}>
        <ModalDragBar onMouseDown={ dragStart('map') } onMouseUp={ dragEnd() } z={modalZIndex.map}>
          <ModalCloseButton>X</ModalCloseButton>
          <ModalTitle>map</ModalTitle>
        </ModalDragBar>
      </Modal>
      <Modal setting={modalPosition.week} z={modalZIndex.week} onClick={() => {moveFront("week")}}>
        <ModalDragBar onMouseDown={ dragStart('week') } onMouseUp={ dragEnd() } z={modalZIndex.week}>
          <ModalCloseButton>X</ModalCloseButton>
          <ModalTitle>week</ModalTitle>
        </ModalDragBar>
      </Modal>
    </DraggableBackground>
  )
}

const DraggableBackground = styled.div`
  width: 100vw;
  height: 100vh;
`

const Modal = styled.div<any>`
  z-index: ${props => props.z};
  position: absolute;
  top: ${props => props.setting.top}px;
  left: ${props => props.setting.left}px;
  width: 350px;
  height: 500px;
  border:  1px solid ${props => {
    if (props.z === 99) {
      return props.theme.color.defaultColor
    } else {
      return props.theme.color.defaultDotColor
    }
  }};
  background-image: 
    linear-gradient(to bottom, transparent, transparent 10%, ${props => props.theme.color.defaultBgColor} 10%),
    linear-gradient(to right, ${props => props.theme.color.defaultDotColor}, ${props => props.theme.color.defaultDotColor} 10%, ${props => props.theme.color.defaultBgColor} 10%);
  background-size: 12px 12px;
  box-shadow: 3px 3px 0px 0px ${props => {
    if (props.z === 99) {
      return props.theme.color.defaultColor
    } else {
      return props.theme.color.defaultDotColor
    }
  }};
`
const ModalDragBar = styled.div<any>`
  height: 30px;
  border-bottom: 1px solid ${props => {
    if (props.z === 99) {
      return props.theme.color.defaultColor
    } else {
      return props.theme.color.defaultDotColor
    }
  }};
  cursor: grab;
  background-image: 
    linear-gradient(to bottom, transparent, transparent 30%, ${props => props.theme.color.defaultBgColor} 30%),
    linear-gradient(to right, ${props => props.theme.color.defaultDotColor}, ${props => props.theme.color.defaultDotColor} 30%, ${props => props.theme.color.defaultBgColor} 30%);
  background-size: 3px 3px;
  &:active {
    cursor: grabbing;
  }
`

const ModalCloseButton = styled.div<any>`
  position: absolute;
  width: 30px;
  height: 30px;
`

const ModalTitle = styled.div<any>`
  
  width: 100%;
  height: 30px;
`