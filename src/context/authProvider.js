import {createContext} from "react";

export const UserContext = createContext(null);
// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//      const [auth,setAuth] = useState({});

//      return(
//          <AuthContext.Provider value={{auth, setAuth}}>
//              {children}
//          </AuthContext.Provider>
//      )
// }
//export default AuthContext;