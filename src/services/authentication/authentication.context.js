import React, { useState, createContext } from "react"

import { loginRequest } from './authentication.service'


export const AuthenticationContext = createContext();



export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const onLogin = (email, password) => {
    setIsLoading(true)
    loginRequest(email, password)
      .then(u => {
        setIsLoading(false)
        setIsAuthenticated(true)
      setUser(u)
      })
      .catch(err => {
         setIsLoading(false)
      setError(err)
    })
  }


  return (
    <AuthenticationContext.Provider value={{
      user,
      isLoading,
      error,
      onLogin,
      isAuthenticated
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}