import React, { useState } from 'react';
import './App.scss';
import styled, { ThemeProvider } from 'styled-components';
import { dark, light } from './theme/theme';
import { useTheme } from './theme/useTheme';
import {
  RecoilRoot,atom,selector,useRecoilState,useRecoilValue,
} from 'recoil';
import { isPropertySignature } from 'typescript';

function App() {
  const [themeMode, toggleTheme] = useTheme()
  const theme:any = themeMode === 'light' ? light : dark
  console.log(theme)

  function Enter() {
    return (
      <div className='main'>
        <h1 className='main-title'>
          Do you wanna go home?
        </h1>
        <button className='main-button'>Yes</button>
        <button className='main-button'>Nope</button>
      </div>
    )
  }

  return (
    <RecoilRoot>
      <ThemeProvider theme={ theme }>
        <Main>
          <Enter></Enter>
          <ThemeButton onClick={ toggleTheme }></ThemeButton>
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
  color: ${props => props.theme.color.defaultColor};
  background-image: 
    linear-gradient(to bottom, transparent, transparent 16.6667%, ${props => props.theme.color.defaultBgColor} 16.6667%),
    linear-gradient(to right, ${props => props.theme.color.defaultDotColor}, ${props => props.theme.color.defaultDotColor} 16.6667%, ${props => props.theme.color.defaultBgColor} 16.6667%);
  background-size: 6px 6px;
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