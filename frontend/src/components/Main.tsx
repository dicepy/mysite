import React, { useEffect, useRef } from 'react';
import MainWrapper from "./Main/MainWrapper";
import MainInfo from "./Main-info";
import SubTitle from "./Main/SubTitle";
import Techs from "./Techs";
import Github from "./Github";
import Contact from "./Contact";
import { useInView } from "react-intersection-observer";

const Main: React.FC = () => {


    return (
        <MainWrapper>
            <MainInfo/>
            <SubTitle>Разработка ПО любой сложности</SubTitle>
            <Techs />
            <Github />
            <Contact />
        </MainWrapper>
    );
};

export default Main;
