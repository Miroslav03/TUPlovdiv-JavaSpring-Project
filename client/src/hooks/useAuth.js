import { loginUser, registerClient, registerFreelancer } from "../services/auth-api";
import { UserTypes } from "../shared/types/user-types";
import { useAuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (data) => {
        try {
            const result = await loginUser(data);
            changeAuthState(result);
        } catch (error) {
            throw new Error(error);
        }
    };

    return loginHandler;
};

export const useRegister = (userType) => {
    const { changeAuthState } = useAuthContext();

    const registerFreelancerHandler = async (data) => {
        try {
            const result = await registerFreelancer(data);
            changeAuthState(result);
        } catch (error) {
            throw new Error(error);
        }
    };

    const registerClientHandler = async (data) => {
        try {
            const result = await registerClient(data);
            changeAuthState(result);
        } catch (error) {
            throw new Error(error);
        }
    };

    switch (userType) {
        case UserTypes.Freelancer:
            return registerFreelancerHandler;
        case UserTypes.Client:
            return registerClientHandler;
    }
};

export const useLogout = () => {
    const { logout } = useAuthContext();
    return logout;
};
