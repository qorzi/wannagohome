import { useState, useEffect } from 'react';
import styled from 'styled-components';

import EnterSelect from './EnterSelect';
import EnterLoading from './EnterLoading';

function Enter() {
  const [loadding, setLodding] = useState(true)

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