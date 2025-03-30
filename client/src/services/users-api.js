import { PATH } from "../shared/constants/paths";
import { environment } from "../shared/constants/apiUrl";
import requester from "./requester";

export const getFreelancerInfo = (id) =>
    requester.get(
        `${environment.apiUrl}/${PATH.USERS.GET_INFO_FREELANCER}/${id}`
    );

export const getClientInfo = (id) =>
    requester.get(`${environment.apiUrl}/${PATH.USERS.GET_INFO_CLIENT}/${id}`);

export const getUserInfo = (id) =>
    requester.get(`${environment.apiUrl}/${PATH.USERS.GET_INFO_USER}/${id}`);

export const addDescription = (id, data) =>
    requester.post(
        `${environment.apiUrl}/${PATH.USERS.ADD_DESCRIPTION}/${id}`,
        data
    );

export const editDescription = (id, data) =>
    requester.put(
        `${environment.apiUrl}/${PATH.USERS.EDIT_DESCRIPTION}/${id}`,
        data
    );

export const getFreelancersAll = () =>
    requester.get(`${environment.apiUrl}/${PATH.USERS.GET_ALL_FREELANCER}`);

export const getClientsAll = () =>
    requester.get(`${environment.apiUrl}/${PATH.USERS.GET_All_CLIENT}`);

export const getClientsAllCategory = (category) =>
    requester.get(
        `${environment.apiUrl}/${PATH.USERS.GET_All_CLIENT}/${category}`
    );

export const getFreelancersAllCategory = (category) =>
    requester.get(
        `${environment.apiUrl}/${PATH.USERS.GET_ALL_FREELANCER}/${category}`
    );
