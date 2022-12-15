import React, { useState } from 'react';
import './App.scss';
import styled, { ThemeProvider } from 'styled-components';
import {dark, light} from './theme/theme';
import { useTheme } from './theme/useTheme';
import {
  RecoilRoot,atom,selector,useRecoilState,useRecoilValue,
} from 'recoil';

function App() {
  const [themeMode, toggleTheme] = useTheme()
  const theme:any = themeMode === 'light' ? light : dark

  function Enter() {
    
    return (
      <div>
        <h1 className='mainTitle'>
          Do you wanna go home?
        </h1>
      </div>
    )
  }

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Main>
          <div className="App">
            <button onClick={toggleTheme}>버튼</button>
          </div>
          <Enter></Enter>
        </Main>

      </ThemeProvider>

    </RecoilRoot>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  // background-color: ${props => props.theme.color.defaultBgColor};
  color: ${props => props.theme.color.defaultColor};
  background-image: 
    linear-gradient(to bottom, transparent, transparent 16.6667%, ${props => props.theme.color.defaultBgColor} 16.6667%),
    linear-gradient(to right, ${props => props.theme.color.defaultDotColor}, ${props => props.theme.color.defaultDotColor} 16.6667%, ${props => props.theme.color.defaultBgColor} 16.6667%);
  background-size: 6px 6px;
`