import React, { createContext, useState } from 'react';
import axios from 'axios';

import { API_URL } from './../../constants/appConfig';

const AuthContext = createContext({
  isAuthenticated: false,
});

const AuthProvider = props => {
  console.log(props);
  const [authenticated, setAuthenticated] = useState(false);
  const state = { authenticated };

  const login = () => {
    console.log('loged in');
    const username = 'admin';
    const password = 'admin';
    return axios
      .post(`${API_URL}auth/v1/login`, {
        username: username,
        password: password,
      })
      .then(response => {
        // let cookieeData = readCookie('X-CROS');
        console.log('cookieeData:', response);
        // setLocalStorage('token', response.data.data.token);
        // setLocalStorage('fullName', response.data.data.fullName);
        // setLocalStorage('user', response.data.data);
        setAuthenticated(true);
        // setUser(response.data.data);
        // setOpenKey('dashboard');
        // return response;
      });
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
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

export { AuthProvider, AuthContext };
