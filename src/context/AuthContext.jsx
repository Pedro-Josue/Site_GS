import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const sessionUser = JSON.parse(sessionStorage.getItem("sessionUser"));
        if (sessionUser) setUser(sessionUser.nome);
    }, []);

    const login = (nome) => {
        setUser(nome);
        sessionStorage.setItem("sessionUser", JSON.stringify({ nome }));
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("sessionUser");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
