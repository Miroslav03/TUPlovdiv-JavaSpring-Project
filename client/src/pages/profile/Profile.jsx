import ClientProfile from "../../features/profile/ClientProfile";
import FreelancerProfile from "../../features/profile/FreelancerProfile";
import { Routes, Route } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="h-auto pb-[5rem] pt-[3rem] bg-main-background-color flex items-center flex-col justify-center">
      <Routes>
        <Route path="client/:id" element={<ClientProfile/>} />
        <Route path="freelancer/:id" element={<FreelancerProfile />} />
      </Routes>
    </div>
  )
}
