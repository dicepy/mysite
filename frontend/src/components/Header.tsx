import React from 'react';
import HeaderContainer from "./Header/HeaderContainer";
import HeaderElement from "./Header/HeaderElement";

const menuElements = ["Главная", "Проекты", "Контакты"]

const Header:React.FC = () => {
    return (
        <HeaderContainer>
            {menuElements.map((el, index) => (
                <HeaderElement key={index}>
                    {el}
                </HeaderElement>
            ))}
        </HeaderContainer>
    )
};

export default Header;