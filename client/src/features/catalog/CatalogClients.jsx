import { useEffect } from "react";
import { useClientsInfoAll } from "../../hooks/useUsers";
import ClientCard from "./components/ClientCard";

export default function CatalogClients({ category }) {
    const { clients, loading, error } = useClientsInfoAll(
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
        <div className="grid grid-cols-3 gap-y-[1.5rem] gap-x-[2rem] sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%]">
            {clients === undefined ? (
                <p className="text-main-text-color text-xl font-bold">
                    No clients for now
                </p>
            ) : (
                Object.values(clients).map((data, index) => (
                    <ClientCard clientInfo={data} key={index} />
                ))
            )}
        </div>
    );
}
