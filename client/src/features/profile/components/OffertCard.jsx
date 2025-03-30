import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

export default function OffertCard({ data, description }) {
    return (
        <div
            className="h-[10rem] w-[30rem] sm:w-[23rem] sm:h-[8rem] rounded-sm flex flex-col gap-3 hover:scale-[1.02] transition duration-300 cursor-pointer shadow-xl hover:shadow-main-text-color"
            style={{
                backgroundImage: `linear-gradient(105deg, rgba(239, 239, 239, 1) 0%, rgba(239, 239, 239, 1) 50%, transparent 50%), url(${data.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
            }}
        >
            <div className="flex flex-col gap-4  p-4">
                <div className="basis-[80%] flex  flex-col">
                    <h1 className="font-bold text-xl text-main-text-color">
                        {data.name}
                    </h1>
                    <p className="text-main-text-color text-lg font-medium sm:text-sm">
                        {" "}
                        wants to connect with you!
                    </p>
                    <div className="pt-[2rem] sm:pt-[1rem]">
                        <Link
                            to={`/offer/${data._id}`}
                            state={{
                                description: description,
                                data: data,
                            }}
                        >
                            <Button label={"More"} px="px-6" py="py-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
