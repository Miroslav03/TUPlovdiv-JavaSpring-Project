import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

export default function FreelancerOfferCard({ offerInfo }) {
    return (
        <div className="bg-main-text-color w-[20rem] h-[20rem] py-4 px-4 flex flex-col gap-3 shadow-lg">
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="w-[6rem] h-[6rem]">
                    <img
                        src={offerInfo.owner.imgUrl}
                        alt="person-img"
                        className="h-full w-full rounded-[50%] border-4 border-main-yellow-color"
                    />
                </div>
                <div className="text-center">
                    <h3 className="text-white font-bold text-xl">
                        {offerInfo.title}
                    </h3>
                    <h4 className="text-main-yellow-color font-bold">
                        {offerInfo.owner.name}
                    </h4>
                </div>
            </div>
            <p className="text-center text-white font-medium">
            {offerInfo.description.length > 20
                    ? `${offerInfo.description.slice(0, 20)}...` 
                    : offerInfo.description}
            </p>
            <div className="text-center">
                <Link to={`/details/freelancer/offer/${offerInfo._id}`}>
                    <Button
                        label={"See more"}
                        px="px-6"
                        py="py-2"
                        color={"bg-main-text-color"}
                    />
                </Link>
            </div>
        </div>
    );
}
