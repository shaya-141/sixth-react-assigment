import { createContext, useState } from "react";


// Create context
export const AuthContext = createContext();

// Provider component
export const AuthContextProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userDetail, setuserDetail] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the context to be used in components


// Export the context for direct use if necessary
export default AuthContext;