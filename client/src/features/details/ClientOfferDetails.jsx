import { useEffect } from "react";
import Button from "../../components/ui/Button";
import { useAuthContext } from "../../contexts/AuthContext";
import {
    useApplyOffer,
    useDeleteOffer,
    useOfferInfo,
} from "../../hooks/useOffers";
import { UserTypes } from "../../shared/types/user-types";
import ApplicantCard from "./components/ApplicantCard";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ClientOfferDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { id: userId, isClient } = useAuthContext();
    const { offer, loading, error } = useOfferInfo(UserTypes.Client, id);
    const {
        deleteOffer,
        loading: deleting,
        error: deleteError,
    } = useDeleteOffer(UserTypes.Client);

    useEffect(() => {
        console.log(offer);
    }, [offer]);

    const isOwner = offer?.owner && userId === offer.owner._id;
    const isApplied = offer?.applied && offer.applied.some(appliedUser => appliedUser._id.toString() === userId.toString())

    const { applyOffer } = useApplyOffer();

    const handleDelete = async () => {
        try {
            await deleteOffer(id);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleApply = async () => {
        try {
            await applyOffer(id, userId);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    if (loading)
        return (
            <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-main-text-color via-main-yellow-color to-white md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
                <div className="rounded-full h-full w-full bg-slate-100 dark:bg-main-background-color background-blur-md"></div>
            </div>
        );
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex flex-col gap-[3rem] sm:flex-col sm:items-center px-[25%] sm:px-[5%]">
            <div className="flex flex-col   sm:justify-center sm:items-center">
                <div className="flex items-center gap-4 justify-between bg-gradient-to-r from-main-yellow-color to-main-background-color p-4 rounded-sm shadow-md">
                    <h1 className="text-3xl text-main-text-color font-bold sm:text-center sm:text-2xl sm:px-4">
                        {offer.title}
                    </h1>
                    {!isOwner && !isClient && !isApplied && (
                        <Button
                            label={"Apply"}
                            px="px-6"
                            py="py-2"
                            onClick={handleApply}
                        />
                    )}
                </div>
                <div className="flex sm:flex-col items-center gap-5 justify-between  py-[2rem] px-[1rem]">
                    <div className="flex flex-col">
                        <h2 className="text-main-text-color text-2xl font-semibold">
                            {offer.owner.name}
                        </h2>
                        <p className="text-main-yellow-color font-semibold">
                            <span className="text-main-text-color">
                                Salary:
                            </span>{" "}
                            ${offer.salary}/hr
                        </p>
                    </div>
                    <div className="flex gap-2 sm:flex-col text-center items-center">
                        {isOwner && (
                            <>
                                <Link to={`/edit/client/offer/${offer._id}`}>
                                    <Button
                                        label={"Edit"}
                                        px="px-6"
                                        py="py-2"
                                    />
                                </Link>
                                <Button
                                    label={"Delete"}
                                    px="px-6"
                                    py="py-2"
                                    onClick={handleDelete}
                                    disabled={deleting}
                                />
                            </>
                        )}

                        <Link to={`/profile/client/${offer.owner._id}`}>
                            <Button
                                label={"More about the company"}
                                px="px-6"
                                py="py-2"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 sm:items-center shadow-sm py-[2rem] px-[1rem]">
                    <h2 className="font-bold text-main-text-color sm:text-center">
                        About
                    </h2>
                    <p className="text-main-text-color  font-medium sm:px-4">
                        {offer.description}
                    </p>
                </div>
            </div>
            {isOwner && (
                <>
                    <div>
                        <h2 className="text-center text-main-text-color font-bold text-3xl pb-[2rem]">
                            Total applicants
                        </h2>
                        <div className="grid grid-cols-3 gap-x-6 sm:grid-cols-1 sm:gap-y-6">
                            {Object.values(offer.applied).map((data, index) => (
                                <ApplicantCard
                                    key={index}
                                    freelancerData={data}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
