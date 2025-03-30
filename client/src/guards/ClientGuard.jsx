import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function ClientGuard() {
    const { isClient } = useAuthContext();

    return isClient ? <Outlet /> : <Navigate to={"/"} />;
}
