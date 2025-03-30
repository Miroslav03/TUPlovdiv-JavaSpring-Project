import RegisterClient from "../../features/register/RegisterClient";
import RegisterFreelancer from "../../features/register/RegisterFreelancer";
import { Routes, Route } from "react-router-dom";

export default function Register() {
  return (
    <div className="bg-main-background-color flex justify-center items-center h-[auto] sm:h-auto sm:py-[5rem] py-[3rem]">
      <Routes>
        <Route path="client" element={<RegisterClient />} />
        <Route path="freelancer" element={<RegisterFreelancer />} />
      </Routes>
    </div>
  );
}
