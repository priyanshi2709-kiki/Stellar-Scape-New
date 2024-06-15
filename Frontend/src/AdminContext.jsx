import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();

export const AppProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
      );

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('admin');
        setLoggedIn(false);
        navigate('/');
    }

    return (
        <AdminContext.Provider value={{ loggedIn, setLoggedIn, logout }} >
            {children}
        </AdminContext.Provider>
    )
}

const useAdminContext = () => useContext(AppContext);
export default useAdminContext;