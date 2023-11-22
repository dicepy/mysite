import React from 'react';
import Header from "./components/header/Header";
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const App : React.FC = () =>{
    return (
        <div>
            <GlobalStyles/>
            <Header/>
        </div>
    )
}

export default App;
