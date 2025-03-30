import { useEffect, useState } from "react";
import {
    applyClientOffer,
    createClientOffer,
    createFreelancerOffer,
    declineClient,
    declineFreelancer,
    deleteClientOffer,
    deleteFreelancerOffer,
    editClientOffer,
    editFreelancerOffer,
    getClientsAllOffersCategory,
    getClientsOffersAll,
    getFreelancersAllOffersCategory,
    getFreelancersOffersAll,
    getOneClient,
    getOneFreelancer,
    sendMessageFreelancer,
} from "../services/offers-api";
import { UserTypes } from "../shared/types/user-types";
import { industryCategories } from "../shared/constants/categories";

export function useCreateOffer(userTypes) {
    const createClientOfferHandler = async (id, data) => {
        try {
            await createClientOffer(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const createFreelancerOfferHandler = async (id, data) => {
        try {
            await createFreelancerOffer(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    switch (userTypes) {
        case UserTypes.Client:
            return createClientOfferHandler;
        case UserTypes.Freelancer:
            return createFreelancerOfferHandler;
    }
}

export function useOfferInfo(userType, id) {
    const [offer, setOffer] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let offer;
                switch (userType) {
                    case UserTypes.Client:
                        offer = await getOneClient(id);
                        break;
                    case UserTypes.Freelancer:
                        offer = await getOneFreelancer(id);
                        break;
                }
                setOffer(offer);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [userType, id]);

    return { offer, loading, error };
}

export function useOfferEdit(userType) {
    const editFreelancerOfferHandler = async (id, data) => {
        try {
            await editFreelancerOffer(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const editClientOfferHandler = async (id, data) => {
        try {
            await editClientOffer(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    switch (userType) {
        case UserTypes.Client:
            return editClientOfferHandler;
        case UserTypes.Freelancer:
            return editFreelancerOfferHandler;
    }
}

export function useDeleteOffer(userType) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteOffer = async (id) => {
        setLoading(true);
        try {
            switch (userType) {
                case UserTypes.Client:
                    await deleteClientOffer(id);
                    break;
                case UserTypes.Freelancer:
                    await deleteFreelancerOffer(id);
                    break;
            }
        } catch (err) {
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { deleteOffer, loading, error };
}

export function useClientsOfferInfoAll(Categories) {
    const [offers, setOffers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let offers;
                switch (Categories) {
                    case undefined:
                        offers = await getClientsOffersAll();
                        break;
                    case industryCategories[Categories]:
                        offers = await getClientsAllOffersCategory(Categories);
                        break;
                }
                setOffers(offers);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [Categories]);

    return { offers, loading, error };
}

export function useFreelancerOfferInfoAll(Categories) {
    const [offers, setOffers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let offers;
                switch (Categories) {
                    case undefined:
                        offers = await getFreelancersOffersAll();
                        break;
                    case industryCategories[Categories]:
                        offers = await getFreelancersAllOffersCategory(
                            Categories
                        );
                        break;
                }
                setOffers(offers);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [Categories]);

    return { offers, loading, error };
}

export function useApplyOffer() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const applyOffer = async (offerId, userId) => {
        setLoading(true);
        try {
            await applyClientOffer(offerId, userId);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { applyOffer, loading, error };
}

export function useDeclineOffer() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const declineOffer = async (offerId, userId) => {
        setLoading(true);
        try {
            await declineClient(offerId, userId);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    return { declineOffer, loading, error };
}

export function useDeclineFreelancerOffer() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const declineOffer = async (offerId, userId) => {
        setLoading(true);
        try {
            await declineFreelancer(offerId, userId);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    return { declineOffer, loading, error };
}


export function useSendFreelancerMessage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (offerId, userId, message) => {
        setLoading(true);
        try {
            await sendMessageFreelancer(offerId, userId, message);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading, error };
}

