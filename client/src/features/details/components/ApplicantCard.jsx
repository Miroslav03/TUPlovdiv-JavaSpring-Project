import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useDeclineOffer } from "../../../hooks/useOffers";

export default function ApplicantCard({ freelancerData }) {
    const { declineOffer } = useDeclineOffer();
    const { id } = useParams();
    const navigate = useNavigate()

    const handleApply = async () => {
      try {
          await declineOffer(id, freelancerData._id);
          navigate("/");
      } catch (error) {
          console.log(error);
      }
  };

    return (
        <div className="h-[20rem] w-[20rem] bg-main-text-color py-4 px-4 flex flex-col gap-3 shadow-xl justify-center items-center hover:scale-[1.02] transition duration-300 cursor-pointer">
            <img
                src={freelancerData.imgUrl}
                alt="person-img"
                className="h-[7rem] w-[7rem] rounded-[50%] border-4 border-main-yellow-color"
            />
            <h1 className="font-bold text-xl text-white">
                {freelancerData.name}
            </h1>
            <p className="font-semibold text-main-yellow-color text-lg">
                {freelancerData.title}
            </p>
            <p className="text-white font-semibold">
                ${freelancerData.hourRate}/hr
            </p>
            <div className="flex gap-4">
                <Button label={"Accept"} px="px-3" py="py-2" onClick={handleApply} />
                <Button label={"Decline"} px="px-3" py="py-2" onClick={handleApply} />
                <Link to={`/profile/freelancer/${freelancerData._id}`}>
                    <Button label={"See more"} px="px-3" py="py-2" />
                </Link>
            </div>
        </div>
    );
}
