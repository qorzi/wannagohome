import './App.scss';
import Enter from './component/Enter'
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from './theme/useTheme';
import { dark, light } from './theme/theme';
import {
  RecoilRoot,atom,selector,useRecoilState,useRecoilValue,
} from 'recoil';
import MatterStepOne from './component/wordsFalling';

function App() {
  const [themeMode, toggleTheme] = useTheme()
  const theme:any = themeMode === 'light' ? light : dark

  return (
    <RecoilRoot>
      <ThemeProvider theme={ theme }>
        <Main>
          <MatterStepOne/>
          <Enter></Enter>
          <ThemeButton onClick={ toggleTheme }></ThemeButton>
        </Main>

      </ThemeProvider>

    </RecoilRoot>
  );
}

export default App;

const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${props => props.theme.color.defaultColor};
  background-image: 
    linear-gradient(to bottom, transparent, transparent 16.6667%, ${props => props.theme.color.defaultBgColor} 16.6667%),
    linear-gradient(to right, ${props => props.theme.color.defaultDotColor}, ${props => props.theme.color.defaultDotColor} 16.6667%, ${props => props.theme.color.defaultBgColor} 16.6667%);
  background-size: 6px 6px;
  font-family: 'DungGeunMo';
  font-size: 36px;
  line-height: 160%;
`

const ThemeButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 100px;
  height 38px;
  background-image: url(${props => props.theme.button.themeButtonSrc});
  background-size: cover;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    background-image: url(${props => props.theme.button.themeButtonHoverSrc});
    background-size: cover;
  }
`