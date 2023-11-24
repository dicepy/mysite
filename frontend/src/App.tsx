import React from 'react';
import Header from "./components/Header";
import GlobalStyles from "./components/UI/GlobalStyles";
import Main from "./components/Main";


interface AppProps {
    // для пропсов если есть
}

const App : React.FC<AppProps> = () =>{
    return (
        <div>
            <GlobalStyles/>
            <Header/>
            <Main/>
        </div>
    )
}

export default App;
