import React from 'react';
import InfoContainer from "./Main/Main-info/Info-Container";
import Title from "./Main/Main-info/Title";
import ListItem from "./Main/Main-info/ListItem";
import List from "./Main/Main-info/List";

const MainInfo:React.FC = () => {
    return (
        <InfoContainer id="main">
            <Title size="10rem">
                Dice <br/>Dev
            </Title>
            <Title size="20rem">
                /
            </Title>
            <List>
                <ListItem>Frontend</ListItem>
                <ListItem>Backend</ListItem>
                <ListItem>DL/ML</ListItem>
                <ListItem>Scrapping</ListItem>
                <ListItem>Bots</ListItem>
            </List>
        </InfoContainer>
    );
};

export default MainInfo;