import React from 'react';
import Header from "./components/Header";
import GlobalStyles from "./components/UI/GlobalStyles";
import Main from "./components/Main";




const App : React.FC = () =>{
    return (
        <div>
            <GlobalStyles/>
            <Header/>
            <Main/>
        </div>
    )
}

export default App;
