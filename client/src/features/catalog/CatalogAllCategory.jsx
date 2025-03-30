import CatalogClients from "./CatalogClients";
import CatalogFreelancers from "./CatalogFreelancers";
import { useParams } from "react-router-dom";

export default function CatalogAllCategory() {
    const { category } = useParams();

    return (
        <>
            <CatalogFreelancers category={category} />
            <CatalogClients category={category} />
        </>
    );
}
