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

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Main>
          <div className="App">
            <button onClick={toggleTheme}>버튼</button>
          </div>

        </Main>

      </ThemeProvider>

    </RecoilRoot>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.color.defaultBgColor};
`