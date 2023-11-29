import React, { useState, useContext, ReactNode } from 'react';

interface MenuElements {
    [key: string]: string;
}

interface StoreContextProps {
    menuElements: MenuElements;
    activeElement: string;
    setActiveElement: (el: string) => void;
}

const StoreContext = React.createContext<StoreContextProps | undefined>(undefined);

export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const [menuElements, setMenuElements] = useState<MenuElements>({
        "Главная": "main",
        "Проекты": "projects",
        "Контакты": "contacts"
    });
    const [activeElement, setActiveElement] = useState("main");

    const store: StoreContextProps = {
        menuElements,
        activeElement,
        setActiveElement: setActiveElement
    };

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};
