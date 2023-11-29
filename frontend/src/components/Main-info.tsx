import React, {useEffect} from 'react';
import InfoContainer from "./Main/Main-info/Info-Container";
import Title from "./Main/Main-info/Title";
import ListItem from "./Main/Main-info/ListItem";
import List from "./Main/Main-info/List";
import { useInView } from 'react-intersection-observer';
import {StoreProvider, useStore} from "../Store";


const MainInfo:React.FC = (props) => {
    const { setActiveElement } = useStore();
    const { ref, inView, entry} = useInView({
        /* Optional options */
        threshold: 1
    });

    useEffect(() => {
        if (entry) {
            if (entry.isIntersecting) {
                setActiveElement("main");
            }
        }
    }, [inView]);
    return (
        <StoreProvider>
            <InfoContainer ref={ref} id="main">
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
        </StoreProvider>
    );
};

export default MainInfo;