import { Link } from "react-router-dom";
import { industryCategories } from "../../shared/constants/categories";
import CategoryCard from "./components/CategoryCard";

export default function Categories() {
    return (
        <div className="h-full py-16 bg-main-background-color flex flex-col justify-start items-center gap-6">
            <h1 className="text-main-text-color text-center text-2xl font-bold">
                Browse by category
            </h1>
            <div className="grid grid-cols-4 grid-rows-2 gap-y-[1rem] gap-x-[2rem] sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%]">
                {Object.values(industryCategories).map((category, index) => (
                    <option key={index} value={category}>
                        <Link to={`/catalog/all/${category}`}>
                            <CategoryCard category={category} />
                        </Link>
                    </option>
                ))}
            </div>
        </div>
    );
}
