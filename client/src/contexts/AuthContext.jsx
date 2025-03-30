import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { logoutUser } from "../services/auth-api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
    id: "",
    email: "",
    accessToken: "",
    name: "",
    title: "",
    isAuthenticated: false,
    isFreelancer: false,
    isClient: false,
    isGuest: null,
    changeAuthState: () => null,
    logout: () => null,
});

export function AuthContextProvider(props) {
    const navigate = useNavigate();
    const [authState, setAuthState] = usePersistedState("auth", {});
    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const logout = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error(error);
        }
        navigate("/");
        localStorage.removeItem("auth");
        setAuthState({});
    };

    const contextData = {
        id: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        isFreelancer: !!authState.title,
        isClient: !!authState.email && !authState.title,
        isGuest: null,
        name: authState.name,
        title: authState.title,
        changeAuthState,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}
