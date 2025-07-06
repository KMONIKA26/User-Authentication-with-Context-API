import React, { createContext, useState } from "react";

// Create context
export const AuthContext = createContext();

// Create provider
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
