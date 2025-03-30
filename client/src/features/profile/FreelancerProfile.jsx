import JobCard from "../catalog/components/JobCard";
import OffertCard from "./components/OffertCard";
import Button from "../../components/ui/Button";
import { useUserInfo } from "../../hooks/useUsers";
import { UserTypes } from "../../shared/types/user-types";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function FreelancerProfile() {
    const { id } = useParams();
    const { user, loading, error } = useUserInfo(UserTypes.Freelancer, id);

    const { id: userId } = useAuthContext();

    const isOwner = userId === user?._id;

    if (loading)
        return (
            <div class="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-main-text-color via-main-yellow-color to-white md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
                <div class="rounded-full h-full w-full bg-slate-100 dark:bg-main-background-color background-blur-md"></div>
            </div>
        );
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="h-auto w-[90%] flex sm:flex-col rounded-sm">
            <div
                className={`flex flex-col items-center gap-[1rem] bg-main-background ${
                    isOwner ? "basis-[30%]" : "basis-[100%]"
                } justify-center shadow-xl py-[4rem]`}
            >
                <div className="h-[9rem] w-[9rem]">
                    <img
                        src={user.imgUrl}
                        alt=""
                        className="w-[100%] h-[100%] rounded-[50%] border-main-yellow-color border-[0.2rem]"
                    />
                </div>
                <div className="flex flex-col ">
                    <h1 className="font-bold text-3xl text-main-text-color text-center">
                        {user.name}
                    </h1>
                    <h2 className="font-semibold text-lg text-main-text-color text-center">
                        {user.title}
                    </h2>
                </div>
                <div className="flex gap-[1rem]">
                    <div className="flex flex-col items-center">
                        <p className="text-bold text-main-yellow-color text-xl">
                            ${user.hourRate}/hr
                        </p>
                        <p className="font-semibold text-sm text-main-text-color text-center">
                            Payment per hour
                        </p>
                    </div>
                </div>
                {isOwner && (
                    <>
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
                <div>
                    <p className="px-[2rem] text-center">{user.description}</p>
                </div>
            </div>
            {isOwner && (
                <>
                    <div className="basis-[35%] bg-main-text-color shadow-xl item-center">
                        <h2 className="text-center py-[2rem] text-2xl text-main-yellow-color font-bold">
                            Applied Jobs
                        </h2>
                        <div className="flex flex-col gap-6 items-center">
                            {Object.values(user.applied).map(
                                (category, index) => (
                                    <JobCard
                                        createdJobs={category}
                                        companyName={category.owner.name}
                                    ></JobCard>
                                )
                            )}
                        </div>
                    </div>
                    <div className="basis-[35%] bg-main-yellow-color shadow-xl flex flex-col pb-[2rem] items-center">
                        <h2 className="text-center py-[2rem] text-2xl text-main-text-color font-bold">
                            New Offers
                        </h2>
                        <div className="flex flex-col gap-4 sm:gap-4 item-center">
                            {Object.values(user.recived).map(
                                ({ user, description }, index) => (
                                    <OffertCard
                                        data={user}
                                        key={index}
                                        description={description}
                                    ></OffertCard>
                                )
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
