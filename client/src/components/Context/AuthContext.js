import React, {createContext, useState} from 'react';
import axios from 'axios';

import { API_URL } from './../../constants/appConfig';

const AuthContext = createContext({
    isAuthenticated: false,
})

const AuthProvider = props => {
console.log(props)
    const [authenticated, setAuthenticated] = useState(false);
    const state = {authenticated}

    const login = () => {
        console.log('loged in')
        const username = "apple";
        const password = "apples";
        return axios.post(`${API_URL}/auth/v1/login`, { "username":username, "password":password }).then(response => {
            console.log('login',response)
            // setLocalStorage('token', response.data.data.token);
            // setLocalStorage('fullName', response.data.data.fullName);
            // setLocalStorage('user', response.data.data);
            setAuthenticated(true);
            // setUser(response.data.data);
            // setOpenKey('dashboard');
            // return response;
        });
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