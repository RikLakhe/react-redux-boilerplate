import React, {createContext, useState} from 'react';
import axios from 'axios';

const AuthContext = createContext({
    isAuthenticated: false,
})

const AuthProvider = props => {
console.log(props)
    const [authenticated, setAuthenticated] = useState(false);
    const state = {authenticated}

    const login = () => {
        console.log('loged in')
        setAuthenticated(true)
    }

    const logout = () => {
        console.log('logged out')
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider
            {...props}
            value={{
                ...state,
                login: login,
                logout: logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext};