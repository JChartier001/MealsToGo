import React, { useState, createContext } from "react";

import {
  loginRequest,
  RegisterRequest,
  AuthState,
  Logout,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  AuthState((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        console.log(u, "user");
        setIsLoading(false);

        setUser(u);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
    }
    RegisterRequest(email, password)
      .then((u) => {
        setIsLoading(false);
        setIsAuthenticated(true);
        setUser(u);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    Logout();
    return;
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        isAuthenticated: !!user,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
