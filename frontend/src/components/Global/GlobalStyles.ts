import {createGlobalStyle} from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 10px; 
  }

  ::-webkit-scrollbar-track {
    background: ${colors.back};
    
  }

  /* Стиль полосы прокрутки */
  ::-webkit-scrollbar-thumb {
    background: ${colors.main};
  }

  /* Изменение стиля при наведении курсора на полосу прокрутки */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #44596e;
  }
`

export default GlobalStyles