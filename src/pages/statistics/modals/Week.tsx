import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Week from './../WeekContent'

import { useRecoilState } from 'recoil';
import { countData } from '../../../atom';
import countDataIn from '../../../ajax/countDataIn'

interface RegionType {
  [key: string]: {
    [key: string]: number
  }
}

interface RegionDataType {
  [key: string]: RegionType | string | number
}

interface modal {
  title: string
  setting: any
  z: any
  dragStart: any
  dragEnd: any
}

export default function WeekModal(props: modal) {

  console.log('loading')
  const [data, setData] = useRecoilState<RegionDataType[]>(countData)
  const [loading, setLoading] = useState(true)
  // 화면 로딩시 값 가져다 두기
  useEffect(() => {
    console.log('1')
    try {
      const getData = async () => await countDataIn();
      getData().then((res) => {
        console.log('2')
        setData(res)
        setLoading(false)
      })
    } catch (e) {
      console.log('3')
      console.log(e)
      setLoading(false)
    }
  }, []);

  if (loading) {

    return <p>로딩중...</p>

  } else {

    return (
      <Modal setting={props.setting[props.title]} z={props.z[props.title]}>
        <ModalDragBar onMouseDown={ props.dragStart(props.title) } onMouseUp={ props.dragEnd() } z={props.z[props.title]}>
          <ModalCloseButton>×</ModalCloseButton>
          <ModalTitle z={props.z[props.title]}>{props.title}</ModalTitle>
        </ModalDragBar>
        <ContentBox>
          <Week/>
        </ContentBox>
      </Modal>
    )

  }
}

const Modal = styled.div<any>`
  z-index: ${props => props.z};
  position: absolute;
  top: ${props => props.setting.top}px;
  left: ${props => props.setting.left}px;
  // width: 350px;
  // height: 500px;
  border:  1px solid;
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
  border-bottom: 1px solid;
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
  cursor: default;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 25px;
  border-bottom: 1px solid;
  &:hover {
    background: red;
  }
`

const ModalTitle = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 18px;
  line-height: 18px;
  color: ${props => {
    if (props.z === 99) {
      return props.theme.color.defaultColor
    } else {
      return props.theme.color.defaultDotColor
    }
  }};
`

const ContentBox = styled.div`
  padding: 15px;
`