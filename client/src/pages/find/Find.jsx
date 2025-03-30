import { Routes, Route, Navigate } from "react-router-dom";
import FindAllFreelancer from "../../features/find/FindAllFreelancer";
import FindAllFreelancerCategory from "../../features/find/FindAllFreelancerCategory";
import FindAllClientsCategory from "../../features/find/FindAllClientCategory";
import FindAllClient from "../../features/find/FindAllClient";

export default function Find() {
    return (
        <div className="h-[100vh] pb-[2rem] bg-main-background-color flex flex-col justify-start items-center gap-10 sm:h-[auto]">
            <h1 className="text-center pt-14 text-3xl text-main-text-color font-bold ">
                Find
            </h1>
            <Routes>
                <Route path="/" element={<Navigate to="all" />} />
                <Route path="all/freelancer" element={<FindAllFreelancer />} />
                <Route path="all/client" element={<FindAllClient />} />
                <Route path="all/freelancer/:category" element={<FindAllFreelancerCategory/>} />
                <Route path="all/client/:category" element={<FindAllClientsCategory/>} />
            </Routes>
        </div>
    );
}
