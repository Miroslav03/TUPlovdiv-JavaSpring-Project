import { Routes, Route } from "react-router-dom";
import EditProfileDescription from "../../features/edit/EditProfileDescription";
import EditClientOffer from "../../features/edit/EditClientOffer";
import EditFreelancerOffer from "../../features/edit/EditFreelancerOffer";
import ClientGuard from "../../guards/ClientGuard";
import FreelancerGuard from "../../guards/FreelancerGuard";

export default function Edit() {
    return (
        <div className="bg-main-background-color flex justify-center items-center h-[auto] sm:h-auto sm:py-[5rem] py-[3rem]">
            <Routes>
                <Route
                    path="profile/description"
                    element={<EditProfileDescription />}
                />

                <Route element={<ClientGuard />}>
                    <Route
                        path="client/offer/:id"
                        element={<EditClientOffer />}
                    />
                </Route>

                <Route element={<FreelancerGuard />}>
                    <Route
                        path="freelancer/offer/:id"
                        element={<EditFreelancerOffer />}
                    />
                </Route>
            </Routes>
        </div>
    );
}
