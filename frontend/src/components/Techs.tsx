import React from 'react';
import TechsContainer from "./Main/Techs/Techs-Container";
import TechsItem from "./Main/Techs/TechsItem";
import ts from '../images/ts.png'
import py from '../images/python.png'
import node from '../images/node.png'
import react from '../images/react.png'
import SubTitle from "./Main/SubTitle";
import colors from "./Global/colors";
const Techs:React.FC = () => {
    return (
        <TechsContainer>
            <SubTitle align="center" color={colors.back}>
                Используемый стек
            </SubTitle>
            <TechsItem>Python
                <img src={py}/>
            </TechsItem>
            <TechsItem>TypeScript
                <img src={ts}/>
            </TechsItem>
            <TechsItem>Node.js
                <img src={node}/>
            </TechsItem>
            <TechsItem>React
                <img src={react}/>
            </TechsItem>
        </TechsContainer>
    );
};

export default Techs;