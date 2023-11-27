import React from 'react';
import MainWrapper from "./Main/MainWrapper";
import MainInfo from "./Main-info";
import SubTitle from "./Main/SubTitle";
import Techs from "./Techs";
import Github from "./Github";

const Main: React.FC = () => {
    return (
        <MainWrapper>
            <MainInfo />
            <SubTitle>Разработка ПО любой сложности</SubTitle>
            <Techs/>
            <Github/>

        </MainWrapper>
    );
};

export default Main;
