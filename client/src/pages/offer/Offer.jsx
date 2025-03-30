import { useLocation, useNavigate, useParams } from "react-router-dom";

import Button from "../../components/ui/Button";
import { useAuthContext } from "../../contexts/AuthContext";
import { useDeclineFreelancerOffer } from "../../hooks/useOffers";

export default function Offer() {
    const { declineOffer } = useDeclineFreelancerOffer();
    const location = useLocation();
    const { data, description } = location.state || {};

    const { id:offerId } = useParams();
    const { id: userId } = useAuthContext();
    const navigate = useNavigate();

    const handleDecline = async () => {
        try {
            await declineOffer(offerId, userId);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="h-auto pb-[5rem] pt-[3rem] bg-main-background-color flex items-center flex-col justify-center">
            <div className="h-auto w-[50%] flex flex-col sm:flex-col rounded-sm sm:w-[85%]">
                <div className="flex flex-col items-center gap-[1rem] bg-main-background basis-[50%] justify-center shadow-xl pb-[4rem]">
                    <div className="h-[100%] w-[100%]  bg-cover bg-center rounded-sm">
                        <img
                            src={data.imgUrl}
                            alt=""
                            className="w-[100%] h-[100%] "
                        />
                    </div>
                    <div className="flex flex-col ">
                        <h1 className="font-bold text-3xl text-main-text-color">
                            {data.name}
                        </h1>
                    </div>
                    <div>
                        <p className="px-[15rem] sm:px-[1rem]">{description}</p>
                    </div>
                    <div className="flex gap-6">
                        <Button
                            label={"Accept"}
                            px="px-4"
                            py="py-2"
                            onClick={handleDecline}
                        />
                        <Button
                            label={"Decline"}
                            px="px-4"
                            py="py-2"
                            onClick={handleDecline}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
