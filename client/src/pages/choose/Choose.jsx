import ChooseCategory from "../../features/choose/ChooseCategory";
import ChooseRegiserType from "../../features/choose/ChooseRegiserType";
import { Routes, Route } from "react-router-dom";

export default function Choose() {
  return (
    <div className="h-[40rem] bg-main-background-color flex justify-center items-center gap-5 flex-col sm:h-[45rem]">
      <h1 className="font-bold text-main-text-color text-3xl pb-4 sm:text-center">
        Register as a Client or Freelancer
      </h1>
      <Routes>
        <Route path="register" element={<ChooseRegiserType />} />
        <Route path="category" element={<ChooseCategory />} />
      </Routes>
    </div>
  );
}
