import React, { createContext, useState } from 'react';

export const UserContext = createContext({});
export function UserContextProvider({ children }) {
    const [islogin, setLogin, name, setName] = useState(null);
    //const [id, setId] = useState(null);

    return (
        <UserContext.Provider value={{ islogin, setLogin, name, setName }}>
            {children}
        </UserContext.Provider>
    );
}