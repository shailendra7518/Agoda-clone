import React, {useState, createContext, Children} from "react";

export const AppContext = createContext();

export const AppProvider = ({Children}) => {
    const [searchedCity, setSearchedCity] = useState("");
    
    return (
        <>
            <AppContext.Provider value={{searchedCity, setSearchedCity}} >
                {Children}
            </AppContext.Provider>
        </>
    )
}