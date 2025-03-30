import { useEffect, useState } from "react";
import {
    getFreelancerInfo,
    getClientInfo,
    addDescription,
    editDescription,
    getUserInfo,
    getClientsAll,
    getClientsAllCategory,
    getFreelancersAll,
    getFreelancersAllCategory,
} from "../services/users-api";
import { UserTypes, ComandTypes } from "../shared/types/user-types";
import { industryCategories } from "../shared/constants/categories";

export function useUserInfo(userType, id) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let user;
                switch (userType) {
                    case UserTypes.Freelancer:
                        user = await getFreelancerInfo(id);
                        console.log(user);
                        break;
                    case UserTypes.Client:
                        user = await getClientInfo(id);
                        break;
                }
                setUser(user);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [userType, id]);

    return { user, loading, error };
}

export function useUserInfoId(id) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            let user;
            try {
                user = await getUserInfo(id);
                setUser(user);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    return { user, loading, error };
}

export function useClientsInfoAll(Categories) {
    const [clients, setClients] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let clients;
                switch (Categories) {
                    case undefined:
                        clients = await getClientsAll();
                        break;
                    case industryCategories[Categories]:
                        clients = await getClientsAllCategory(Categories);
                        break;
                }
                setClients(clients);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [Categories]);

    return { clients, loading, error };
}

export function useFreelancerInfoAll(Categories) {
    const [freelancers, setFreelancers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let freelancers;
                switch (Categories) {
                    case undefined:
                        freelancers = await getFreelancersAll();
                        break;
                    case industryCategories[Categories]:
                        freelancers = await getFreelancersAllCategory(
                            Categories
                        );
                        break;
                }
                setFreelancers(freelancers);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [Categories]);

    return { freelancers, loading, error };
}

export function useDescription(commandTypes) {
    const addDescriptionHandler = async (id, data) => {
        try {
            await addDescription(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const editDescriptionHandler = async (id, data) => {
        try {
            await editDescription(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    switch (commandTypes) {
        case ComandTypes.Add:
            return addDescriptionHandler;
        case ComandTypes.Edit:
            return editDescriptionHandler;
    }
}
