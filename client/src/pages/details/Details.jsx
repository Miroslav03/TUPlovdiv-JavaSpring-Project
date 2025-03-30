import ClientOfferDetails from "../../features/details/ClientOfferDetails";
import FreelancerOfferDetails from "../../features/details/FreelancerOfferDetails";
import { Routes, Route } from "react-router-dom";

export default function Details() {
  return (
    <div className="h-auto pb-[5rem] pt-[3rem] bg-main-background-color flex flex-col  items-center gap-10  sm:px-0">
      <Routes>
        <Route path="freelancer/offer/:id" element={<FreelancerOfferDetails />} />
        <Route path="client/offer/:id" element={<ClientOfferDetails />} />
      </Routes>
    </div>
  );
}
