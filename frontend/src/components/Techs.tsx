import React from 'react';
import TechsContainer from "./Main/Techs/Techs-Container";
import TechsItem from "./Main/Techs/TechsItem";

const Techs:React.FC = () => {
    return (
        <TechsContainer>
            <TechsItem>3</TechsItem>
            <TechsItem>3</TechsItem>
        </TechsContainer>
    );
};

export default Techs;