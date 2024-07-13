/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { AuthProviderProps, User } from "../types";


export const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children, isSignedIn } : AuthProviderProps) {
    
    const [account] = useState<User | null>(isSignedIn ? { id:1 } : null);

    return (
        <AuthContext.Provider value={account}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth: must be used within an AuthProvider");
    }

    return context;
}