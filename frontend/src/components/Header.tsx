import React from 'react';
import HeaderContainer from "./UI/Header/HeaderContainer";
import HeaderElement from "./UI/Header/HeaderElement";

const menuElements = ["Главная", "Проекты", "Контакты"]

const Header:React.FC = () => {
    let i = 0;
    return (
        <HeaderContainer>
            {menuElements.map(el=> (
                <HeaderElement key={i++}>
                    {el}
                </HeaderElement>
            ))}
        </HeaderContainer>
    )
};

export default Header;