import React from 'react';
import Header from "./components/Header";
import GlobalStyles from "./components/Global/GlobalStyles";
import Main from "./components/Main";
import MainBG from "./components/Main/MainBG";
import {StoreProvider} from "./Store";


interface AppProps {
    // для пропсов если есть
}

const App : React.FC<AppProps> = () =>{
    return (
        <StoreProvider>

            <GlobalStyles/>
            <MainBG/>
            <Header/>
            <Main/>
        </StoreProvider>
    )
}

export default App;
