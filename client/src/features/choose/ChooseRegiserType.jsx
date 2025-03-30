import { Link } from "react-router-dom";

export default function ChooseRegiserType() {
  return (
    <div className="flex gap-8 sm:flex-col">
        <Link to='/auth/register/client' className="bg-main-yellow-color w-[22rem] h-[23rem] sm:w-[18rem] sm:h-[8rem] flex flex-col justify-center items-center cursor-pointer hover:bg-main-text-color group hover:scale-105 transition duration-300 ease-in-out shadow-xl">
          <span className="material-symbols-outlined text-main-text-color text-4xl group-hover:text-white">
            work
          </span>
          <h2 className="font-bold text-3xl sm:text-2xl text-white group-hover:text-main-yellow-color">
            I'm a Client
          </h2>
        </Link>
        <Link to='/auth/register/freelancer' className="bg-main-yellow-color w-[22rem] h-[23rem] sm:w-[18rem] sm:h-[8rem] flex flex-col justify-center items-center cursor-pointer hover:bg-main-text-color group hover:scale-105 transition duration-300 ease-in-out shadow-xl">
          <span className="material-symbols-outlined text-main-text-color text-4xl group-hover:text-white">laptop_mac</span>
          <h2 className="font-bold text-3xl sm:text-2xl text-white group-hover:text-main-yellow-color">
            I'm a Freelancer
          </h2>
        </Link>
      </div>
  )
}
