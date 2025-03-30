import requester from "./requester";
import { environment } from "../shared/constants/apiUrl";
import { PATH } from "../shared/constants/paths";

export const loginUser = (data) =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.USER_LOGIN}`, {
        data
    });

export const registerFreelancer = (data) =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.REGISTER_FREElANCER}`, {
        data,
    });

export const registerClient = (data) =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.REGISTER_CLIENT}`, {
        data,
    });

export const logoutUser = () =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.USER_LOGOUT}`);
