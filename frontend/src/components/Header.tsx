import React from 'react';
import HeaderContainer from "./Header/HeaderContainer";
import HeaderElement from "./Header/HeaderElement";
import { useStore } from "../Store";

const Header: React.FC = () => {
    const { menuElements, activeElement, setActiveElement } = useStore();

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            setActiveElement(id);
        }
    };

    return (
        <HeaderContainer>
            {Object.keys(menuElements).map((el, index) => (
                <HeaderElement
                    key={index}
                    onClick={() => scrollToElement(menuElements[el])}
                    active={menuElements[el] === activeElement ? 'true' : 'false'}
                >
                    {el}
                </HeaderElement>
            ))}
        </HeaderContainer>
    );
};

export default Header;
