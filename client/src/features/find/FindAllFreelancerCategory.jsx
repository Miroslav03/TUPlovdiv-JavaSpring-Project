import { useParams } from "react-router-dom";
import FindFreelancer from "./FindFreelancer";

export default function FindAllFreelancerCategory() {
    const { category } = useParams();

    return (
        <>
            <FindFreelancer category={category} />
        </>
    );
}
