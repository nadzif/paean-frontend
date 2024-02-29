import React, {createContext, useContext, useState, useEffect} from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [lng, setLng] = useState(localStorage.getItem("lng"));

    useEffect(() => {
        const checkLocalStorage = () => {
            const storedLng = localStorage.getItem('lng');
            setLng(storedLng)
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
