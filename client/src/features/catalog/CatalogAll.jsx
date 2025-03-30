import React from "react";
import CatalogClients from "./CatalogClients";
import CatalogFreelancers from "./CatalogFreelancers";

export default function CatalogAll() {
    return (
        <>
            <CatalogFreelancers />
            <CatalogClients />
        </>
    );
}
