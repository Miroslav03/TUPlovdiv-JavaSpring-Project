import { useParams } from "react-router-dom";
import FindClient from "./FindClient";

export default function FindAllClientsCategory() {
    const { category } = useParams();
    return (
        <>
            <FindClient category={category} />
        </>
    );
}
