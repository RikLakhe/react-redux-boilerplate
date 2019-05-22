import React, {createContext, useState} from 'react';
import axios from 'axios';

import {API_URL} from './../../constants/appConfig';

const AuthContext = createContext({
    isAuthenticated: false,
});

const AuthProvider = props => {
    const [authenticated, setAuthenticated] = useState(false);
    const state = {authenticated};

    const login = (formData) => {
        return axios
            .post(`${API_URL}auth/v1/login`,formData,{credentials: 'same-origin'})
            .then(response => {
                // setLocalStorage('token', response.data.data.token);
                // setLocalStorage('fullName', response.data.data.fullName);
                // setLocalStorage('user', response.data.data);
                setAuthenticated(true);
                // setUser(response.data.data);
                // setOpenKey('dashboard');
                return response;
            })
    };

    const logout = () => {
        console.log('logged out');
        setAuthenticated(false);
    };

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
    );
};

// Read cookie
function readCookie(name) {
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export {AuthProvider, AuthContext};
