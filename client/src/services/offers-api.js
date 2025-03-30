import { environment } from "../shared/constants/apiUrl";
import { PATH } from "../shared/constants/paths";
import requester from "./requester";

export const createClientOffer = (id, data) =>
    requester.post(`${environment.apiUrl}/${PATH.OFFERS.CREATE_CLIENT}`, {
        id,
        data,
    });

export const createFreelancerOffer = (id, data) =>
    requester.post(`${environment.apiUrl}/${PATH.OFFERS.CREATE_FREELANCER}`, {
        id,
        data,
    });

export const getOneClient = (id) =>
    requester.get(`${environment.apiUrl}/${PATH.OFFERS.GET_ONE_CLIENT}/${id}`);

export const getOneFreelancer = (id) =>
    requester.get(
        `${environment.apiUrl}/${PATH.OFFERS.GET_ONE_FREELANCER}/${id}`
    );

export const editClientOffer = (id, data) =>
    requester.put(
        `${environment.apiUrl}/${PATH.OFFERS.EDIT_CLIENT}/${id}`,
        data
    );

export const editFreelancerOffer = (id, data) =>
    requester.put(
        `${environment.apiUrl}/${PATH.OFFERS.EDIT_FREELANCER}/${id}`,
        data
    );

export const deleteClientOffer = (id) =>
    requester.del(`${environment.apiUrl}/${PATH.OFFERS.DELETE_CLIENT}/${id}`);

export const deleteFreelancerOffer = (id) =>
    requester.del(
        `${environment.apiUrl}/${PATH.OFFERS.DELETE_FREELANCER}/${id}`
    );

export const getClientsOffersAll = () =>
    requester.get(`${environment.apiUrl}/${PATH.OFFERS.GET_ALL_CLIENTS}`);
export const getFreelancersOffersAll = () =>
    requester.get(`${environment.apiUrl}/${PATH.OFFERS.GET_All_FREELANCER}`);

//All offers categories

export const getClientsAllOffersCategory = (category) =>
    requester.get(
        `${environment.apiUrl}/${PATH.OFFERS.GET_ALL_CLIENTS}/${category}`
    );
export const getFreelancersAllOffersCategory = (category) =>
    requester.get(
        `${environment.apiUrl}/${PATH.OFFERS.GET_All_FREELANCER}/${category}`
    );

export const applyClientOffer = (offerId, userId) => {
    requester.post(`${environment.apiUrl}/${PATH.OFFERS.APPLY_CLIENT_OFFER}`, {
        offerId,
        userId,
    });
};

export const declineClient = (offerId, userId) => {
    requester.del(`${environment.apiUrl}/${PATH.OFFERS.DECLINE_FREELANCER}`, {
        offerId,
        userId,
    });
};

export const declineFreelancer = (offerId, userId) => {
    requester.del(`${environment.apiUrl}/${PATH.OFFERS.DECLINE_CLIENT}`, {
        offerId,
        userId,
    });
};

export const sendMessageFreelancer = (offerId, userId, message) => {
    requester.post(`${environment.apiUrl}/${PATH.OFFERS.SEND_MESSAGE}`, {
        offerId,
        userId,
        message,
    });
};
