import JobCard from "../catalog/components/JobCard";
import Button from "../../components/ui/Button";
import { UserTypes } from "../../shared/types/user-types";
import { useUserInfo } from "../../hooks/useUsers";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function ClientProfile() {
    const { id } = useParams();
    const { user, loading, error } = useUserInfo(UserTypes.Client, id);
    const { id: userId } = useAuthContext();

    const isOwner = userId === user?._id;

    if (loading)
        return (
            <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-main-text-color via-main-yellow-color to-white md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
                <div className="rounded-full h-full w-full bg-slate-100 dark:bg-main-background-color background-blur-md"></div>
            </div>
        );
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="h-auto w-[90%] flex flex-col sm:flex-col rounded-sm">
            <div className="flex flex-col items-center gap-[1rem] bg-main-background basis-[50%] justify-center shadow-xl pb-[4rem]">
                <div className="h-[100%] w-[100%]  bg-cover bg-center rounded-sm">
                    <img
                        src={user.imgUrl}
                        alt=""
                        className="w-[100%] h-[100%] "
                    />
                </div>
                <div className="flex flex-col ">
                    <h1 className="font-bold text-3xl text-main-text-color">
                        {user.name}
                    </h1>
                    <h2 className="font-semibold text-lg text-main-text-color text-center">
                        {user.industry}
                    </h2>
                </div>
                <div className="flex gap-[1rem]">
                    <div className="flex flex-col items-center">
                        <p className="text-bold text-main-yellow-color text-xl">
                            {user.employees}
                        </p>
                        <p className="font-semibold text-sm text-main-text-color text-center">
                            Total Employees
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-bold text-main-yellow-color text-xl">
                            {user.createdJobs.length}
                        </p>
                        <p className="font-semibold text-sm text-main-text-color text-center">
                            Total Offers
                        </p>
                    </div>
                </div>

                {isOwner && (
                    <>
                        {" "}
                        {!user.hasOwnProperty("description") && (
                            <>
                                <div>
                                    <p className="px-[2rem]"></p>
                                </div>
                                <Link to={"/create/profile/description"}>
                                    <Button
                                        label={"Add description"}
                                        px="px-4"
                                        py="py-2"
                                    />
                                </Link>
                            </>
                        )}
                        {user.hasOwnProperty("description") && (
                            <>
                                <div>
                                    <p className="px-[2rem]">
                                        {user.description}
                                    </p>
                                </div>
                                <Link to={"/edit/profile/description"}>
                                    <Button
                                        label={"Edit description"}
                                        px="px-4"
                                        py="py-2"
                                    />
                                </Link>
                            </>
                        )}
                    </>
                )}
            </div>
            {isOwner && (
                <div className="basis-[50%] bg-main-text-color shadow-xl">
                    <h2 className="text-center py-[2rem] text-2xl text-main-yellow-color font-bold">
                        Created Offers
                    </h2>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-4 pb-[2rem] sm:grid-cols-1">
                            {Object.values(user.createdJobs).map(
                                (data, index) => (
                                    <JobCard key={index}
                                        createdJobs={data}
                                        companyName={user.name}
                                    ></JobCard>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
