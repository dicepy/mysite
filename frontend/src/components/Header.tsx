import React, { useState } from 'react';
import HeaderContainer from "./Header/HeaderContainer";
import HeaderElement from "./Header/HeaderElement";

interface Menu {
    [key: string]: string;
}

const menuElements: Menu = {
    "Главная": "main",
    "Проекты": "projects",
    "Контакты": "contacts"
};

const Header: React.FC = () => {
    const [activeElement, setActiveElement] = useState<string | null>(null);

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveElement(id);
        }
    };

    return (
        <HeaderContainer>
            {Object.keys(menuElements).map((el, index) => (
                <HeaderElement
                    key={index}
                    onClick={() => scrollToElement(menuElements[el])}
                    active={menuElements[el] === activeElement}
                >
                    {el}
                </HeaderElement>
            ))}
        </HeaderContainer>
    );
};

export default Header;
