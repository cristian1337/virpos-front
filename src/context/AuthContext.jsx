import React, { useState, useEffect, createContext } from "react";
import {setToken, getToken, removeToken} from '../api/token';

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null
});

export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(undefined)

    useEffect(() => {
      (async () => {
        const token = getToken();
        if (token){
            setAuth({ token })
        }else {
            setAuth(null)
        }
      })()
    }, [])
    

    const login = async (token) => {
        setToken(token);
        
        setAuth({ token })
    }

    const logout = () => {
        if(auth) {
            removeToken();
            setAuth(null);
        }
    }

    const valueContext = {
        auth,
        login,
        logout
    }

    if (auth === undefined) return null;

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}