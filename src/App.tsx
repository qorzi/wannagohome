import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import styled, { ThemeProvider } from 'styled-components';
import {dark, light} from '../public/theme';


function App() {
  const [themeMode, setThemeMode] = useState('light')
  const theme = themeMode === 'light' ? light : dark

  function toggleTheme() {

  }


  return (
    <ThemeProvider theme={theme}>
      <Main>
        <div className="App">
          <button onClick={toggleTheme}>버튼</button>
        </div>

      </Main>ß

    </ThemeProvider>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props : any) => props.theme.colors.defaultBgColor};
`