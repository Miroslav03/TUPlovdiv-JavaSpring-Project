import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { AuthGuards } from "../shared/types/user-types";

export default function AuthGuard({ type, ...props }) {
    const { isAuthenticated } = useAuthContext();

    switch (type) {
        case AuthGuards.Authenticated:
            return isAuthenticated ? (
                <Outlet {...props} />
            ) : (
                <Navigate to={"/auth/login"} />
            );
        case AuthGuards.Guest:
            return !isAuthenticated ? (
                <Outlet {...props} />
            ) : (
                <Navigate to={"/"} />
            );

        default:
            break;
    }
}
