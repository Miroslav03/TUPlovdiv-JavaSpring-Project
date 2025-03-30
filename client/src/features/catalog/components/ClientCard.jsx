import React from "react";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

export default function ClientCard({ clientInfo }) {
    return (
        <div className="h-[18rem] w-[30rem] sm:w-[24rem] bg-main-text-color flex flex-col gap-3 shadow-xl justify-center items-center hover:scale-[1.02] transition duration-300 cursor-pointer background-cover rounded-sm">
                <img
                    src={clientInfo.imgUrl}
                    alt="person-img"
                    className="h-[100%] w-[100%] rounded-sm "
                />
            <div className="basis-[50%] flex flex-col gap-3 items-center">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-xl text-white">
                        {clientInfo.name}
                    </h1>
                    <p className="font-semibold text-main-yellow-color text-lg">
                        {clientInfo.createdJobs.length} Jobs
                    </p>
                </div>
                <div className="flex gap-5 items-center pb-4">
                    <Link to={`/profile/client/${clientInfo._id}`}>
                        <Button
                            label={"See more"}
                            px="px-6"
                            py="py-2"
                            color={"bg-main-text-color"}
                        />
                    </Link>
                    <p className="text-white font-bold">
                        {clientInfo.employees} Employyes
                    </p>
                </div>
            </div>
        </div>
    );
}
