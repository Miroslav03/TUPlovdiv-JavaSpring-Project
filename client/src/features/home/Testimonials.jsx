import TestemonialCard from "./components/TestemonialCard";
import person1 from "../../assets/person-1.jpg";
import person2 from "../../assets/person-2.jpg";
import person3 from "../../assets/person-3.jpg";

export default function Testimonials() {
    return (
        <div className="h-full bg-main-background-color py-16 sm:py-12 flex flex-col gap-8 items-center">
            <h1 className="text-main-text-color text-center text-2xl font-bold">
                Testimonials
            </h1>
            <div className="grid grid-rows-1 grid-cols-3 gap-x-6 sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%] sm:gap-y-6">
                <TestemonialCard
                    img={person1}
                    name={"James Anderson"}
                    title={"UX Designer"}
                    description={
                        "The platform has transformed the way we manage our projects. The intuitive design and seamless functionality allow our team to collaborate effortlessly."
                    }
                />
                <TestemonialCard
                    img={person2}
                    name={"Ethan Murphy"}
                    title={"Web Developer"}
                    description={
                        "I am thoroughly impressed with the user experience this website provides. The layout is clean, and navigating through the features is a breeze."
                    }
                />
                <TestemonialCard
                    img={person3}
                    name={"Liam Carter"}
                    title={"Hardware Engineer"}
                    description={
                        "This website offers an exceptional interface that makes project management easy and enjoyable."
                    }
                />
            </div>
        </div>
    );
}
