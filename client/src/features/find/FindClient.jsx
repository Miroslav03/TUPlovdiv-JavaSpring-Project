import { useClientsOfferInfoAll } from "../../hooks/useOffers";
import JobCard from "../catalog/components/JobCard";

export default function FindClient({ category }) {
    const { offers, loading, error } = useClientsOfferInfoAll(
        category || undefined
    );

    if (loading)
        return (
            <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-main-text-color via-main-yellow-color to-white md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
                <div className="rounded-full h-full w-full bg-slate-100 dark:bg-main-background-color background-blur-md"></div>
            </div>
        );
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="grid grid-cols-2 gap-y-[1.5rem] gap-x-[2rem] sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%] px-[10rem] sm:px-0 sm:gap-y-[0.5rem]">
            {Object.values(offers).map((data, index) => (
                <JobCard companyName={data.owner.name} createdJobs={data} key={index} />
            ))}
        </div>
    );
}
