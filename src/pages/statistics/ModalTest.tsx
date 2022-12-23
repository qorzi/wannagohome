import styled from 'styled-components';
import { useState, useEffect } from 'react';
import MapModal from './modals/Map'
import WeekModal from './modals/Week'

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
  const [isOpen, setIsOpen] = useState<any>({
    map: false,
    week: false
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

  // 모달창 태그 설정
  const mapModal = <MapModal key={1} title={'map'} setting={modalPosition} z={modalZIndex} dragStart={dragStart} dragEnd={dragEnd}></MapModal>
  const weekModal = <WeekModal title={'week'} setting={modalPosition} z={modalZIndex} dragStart={dragStart} dragEnd={dragEnd}></WeekModal>

  const openModal = (name: string) => {
    const newIsOpen = isOpen
    for (let key in newIsOpen) {
      if (key === name) {
        newIsOpen[key] = !newIsOpen[key]
      }
    }
    setIsOpen(newIsOpen)
    console.log(isOpen)
  }

  return (
    <DraggableBackground onMouseMove={ (event: any) => {mouseMove(event)} }>
      {isOpen.map && mapModal}
      {weekModal}
      <button onClick={() => {openModal('map')}}>Map</button>
    </DraggableBackground>
  )
}

const DraggableBackground = styled.div`
  width: 100vw;
  height: 100vh;
`