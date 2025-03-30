import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function FreelancerGuard() {
    const { isFreelancer } = useAuthContext();

    return isFreelancer ? <Outlet /> : <Navigate to={"/"} />;
}
