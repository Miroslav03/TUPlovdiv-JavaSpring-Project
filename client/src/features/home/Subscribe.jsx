import Button from "../../components/ui/Button";

export default function Subscribe() {
    return (
        <div className="h-full bg-main-background-color py-16 px-[25rem] flex items-center sm:items-center justify-center sm:flex-col sm:px-4 sm:gap-[2rem]">
            <h1 className="text-5xl text-main-text-color font-bold sm:text-4xl sm:text-center">
                Subscribe to recive more specific jobs.
            </h1>
            <div>
                <form className="flex gap-2 sm:flex-col sm:gap-4">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-main-text-color w-[20rem] sm:w-[18rem] px-4 font-semibold sm:h-[2.5rem]"
                        placeholder="Enter your email"
                    />
                    <div className="sm:text-center">
                        <Button label={"Subscribe"} px="px-4" py="py-2" />
                    </div>
                </form>
                <p className="font-normal text-main-text-color sm:text-center">
                    We care about your data!
                </p>
            </div>
        </div>
    );
}
