import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    const API = import.meta.env.VITE_APP_URI_API;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;

    console.log("isLoggedIn", isLoggedIn);

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    const userAuthentication = async() => {
        try {
            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization : authorizationToken,
                }
            });

            if(response.ok){
                const data = await response.json();
                console.log('user data', data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error Fetching User.")
        }
    }

    const getServices = async() => {
        try {
            const response = await fetch(`${API}/api/data/service`, {
                method: "GET",
            });

            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error: ${error}`);
        }
    }

    
    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return (<AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, API }}>
        {children}
    </AuthContext.Provider>
    );S
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}