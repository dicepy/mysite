import React from 'react';
import Header from "./components/Header";
import GlobalStyles from "./components/Global/GlobalStyles";
import Main from "./components/Main";
import MainBG from "./components/Main/MainBG";


interface AppProps {
    // для пропсов если есть
}

const App : React.FC<AppProps> = () =>{
    return (
        <div>

            <GlobalStyles/>
            <MainBG/>
            <Header/>
            <Main/>
        </div>
    )
}

export default App;
