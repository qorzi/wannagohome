import { useState, useEffect } from 'react';
import styled from 'styled-components';
import EnterSelect from './EnterSelect';
import EnterLoading from './EnterLoading';
import { useRecoilState } from 'recoil';
import { locationData } from '../../atom';


function Enter() {
  const [loadding, setLodding] = useState(true)

  const [location, setLocation] = useRecoilState(locationData)

    useEffect(() => {
    const site:any = () => {navigator.geolocation.getCurrentPosition((position) => {
      console.log('위치가져오는 중')
      const payload = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      
      setLocation(payload)
      console.log('recoil 업데이트')
    })}
    
    site()
    console.log(location)
  }, [setLocation])

  setTimeout(() => {
    setLodding(false)
  }, 1500);

  if (loadding) {
    return (
      <Container>
        <EnterLoading></EnterLoading>
      </Container>
    )
  } else {
    return (
      <Container>
        <EnterSelect></EnterSelect>
      </Container>
    )
  }
}

export default Enter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 70%;
  max-width: 400px;
`