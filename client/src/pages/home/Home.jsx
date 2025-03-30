import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Categories from "../../features/home/Categories";
import Faq from "../../features/home/Faq";
import Subscribe from "../../features/home/Subscribe";
import Testimonials from "../../features/home/Testimonials";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Home() {
    const { isGuest, isAuthenticated } = useAuthContext();
    return (
        <>
            <div className="hero bg-base-200 min-h-screen bg-main-background bg-center bg-cover">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-main-text-color">
                            Unlock Your Business Potential
                        </h1>
                        <p className="py-6 text-main-text-color font-medium">
                            Empower your enterprise by partnering with the
                            perfect specialist.
                        </p>

                        {!isGuest && !isAuthenticated && (
                            <Link to="/choose/register">
                                <Button
                                    label={"Get Started"}
                                    px="px-4"
                                    py="py-2"
                                />
                            </Link>
                        )}
                        {isAuthenticated && (
                            <Link to="/catalog/all">
                                <Button
                                    label={"Start Now"}
                                    px="px-4"
                                    py="py-2"
                                />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <Categories />
            <Subscribe />
            <Testimonials />
            <Faq />
        </>
    );
}
