import React, {createContext, useContext, useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [lng, setLng] = useState(localStorage.getItem("lng"));
    const {i18n} = useTranslation();

    useEffect(() => {
        const checkLocalStorage = () => {
            const storedLng = localStorage.getItem('lng');
            setLng(storedLng)
            i18n.changeLanguage(storedLng)
        };

        const intervalId = setInterval(checkLocalStorage, 2500);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <LanguageContext.Provider value={{lng, setLng}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
