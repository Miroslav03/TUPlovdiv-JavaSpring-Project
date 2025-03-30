import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

export default function JobCard({ createdJobs, companyName }) {
    return (
        <div className="h-[15rem] w-[40rem] sm:w-[23rem] sm:h-[20rem] rounded-sm bg-main-text-color py-4 px-4 flex flex-col gap-3 hover:scale-[1.02] transition duration-300 cursor-pointer shadow-lg hover:shadow-main-yellow-color">
            <h1 className="text-start font-bold text-xl text-white">
                {createdJobs.title}
            </h1>
            <div className="flex gap-5">
                <p className="font-semibold text-white">
                    Budget:{" "}
                    <span className="font-semibold text-main-yellow-color">
                        {createdJobs.salary}$/hr
                    </span>
                </p>
                <p className="text-main-yellow-color font-bold text-md items-center ">
                    {companyName}
                </p>
            </div>
            <p> {createdJobs.description.length > 20
                    ? `${createdJobs.description.slice(0, 200)}...` 
                    : createdJobs.description}</p>
            <div className="justify-end flex mr-4 mt-2">
                <Link to={`/details/client/offer/${createdJobs._id}`}>
                    <Button label={"More"} px="px-6" py="py-2" />
                </Link>
            </div>
        </div>
    );
}
