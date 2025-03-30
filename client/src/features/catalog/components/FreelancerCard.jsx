import React from "react";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

export default function FreelancerCard({ freelancerInfo }) {
    return (
        <div className="h-[20rem] w-[20rem] bg-main-text-color py-4 px-4 flex flex-col gap-3 shadow-xl justify-center items-center hover:scale-[1.02] transition duration-300 cursor-pointer">
            <img
                src={freelancerInfo.imgUrl}
                alt="person-img"
                className="h-[7rem] w-[7rem] rounded-[50%] border-4 border-main-yellow-color"
            />
            <h1 className="font-bold text-xl text-white">
                {freelancerInfo.name}
            </h1>
            <p className="font-semibold text-main-yellow-color text-lg">
                {freelancerInfo.title}
            </p>
            <p className="text-white font-semibold">
                ${freelancerInfo.hourRate}/hr
            </p>
            <Link to={`/profile/freelancer/${freelancerInfo._id}`}>
                <Button label={"See more"} px="px-6" py="py-2" />
            </Link>
        </div>
    );
}
