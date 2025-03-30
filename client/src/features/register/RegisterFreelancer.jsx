import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { InputTypes } from "../../shared/types/input-types";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { freelancerRegister } from "../../shared/forms/initialValues";
import { formNames } from "../../shared/forms/names";
import { UserTypes } from "../../shared/types/user-types";
import { industryCategories } from "../../shared/constants/categories";

export default function RegisterFreelancer() {
    const register = useRegister(UserTypes.Freelancer);
    const navigate = useNavigate();
    const initialValues = freelancerRegister;

    const registerFreelancerHandler = async (data) => {
        try {
            await register(data);
            navigate("/");
        } catch (error) {}
    };

    const { values, errors, changeHandler, submitHandler } = useForm(
        initialValues,
        registerFreelancerHandler,
        UserTypes.Freelancer
    );

    return (
        <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[29rem] shadow-xl rounded-sm">
            <h1 className="text-2xl font-bold text-center text-white">
                Register as a Freelancer
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div className="grid grid-cols-2 sm:grid-cols-1 grid-rows-3 gap-6 gap-y-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Name
                        </label>
                        <Input
                            type={InputTypes.Text}
                            placeholder={"Devin Perez"}
                            valueName={formNames.name}
                            value={values.name}
                            changeHandler={changeHandler}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="title"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Professional Title
                        </label>
                        <Input
                            type={InputTypes.Text}
                            placeholder={"Web Developer"}
                            valueName={formNames.title}
                            value={values.title}
                            changeHandler={changeHandler}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="skills"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Skills
                        </label>
                        <Input
                            type={InputTypes.Text}
                            placeholder={"Write them by space"}
                            valueName={formNames.skills}
                            value={values.skills}
                            changeHandler={changeHandler}
                        />
                        {errors.skills && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.skills}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="hourRate"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Hourly Rate
                        </label>
                        <Input
                            type={InputTypes.Number}
                            placeholder={"Must be a number"}
                            valueName={formNames.hourRate}
                            value={values.hourRate}
                            changeHandler={changeHandler}
                        />
                        {errors.hourRate && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.hourRate}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Email
                        </label>
                        <Input
                            type={InputTypes.Email}
                            placeholder={"email@adress.com"}
                            valueName={formNames.email}
                            value={values.email}
                            changeHandler={changeHandler}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="industry"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Industry
                        </label>
                        <select
                            name="industry"
                            onChange={changeHandler}
                            value={values.industry}
                            className="bg-white w-full h-[57%] px-[0.5rem]"
                        >
                            <option value="">Select an industry</option>
                            {Object.values(industryCategories).map(
                                (category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                )
                            )}
                        </select>
                        {errors.industry && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.industry}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <div>
                        <label
                            htmlFor="imgUrl"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            ImageUrl
                        </label>
                        <Input
                            type={InputTypes.Text}
                            placeholder={"Must start with https://"}
                            valueName={formNames.imgUrl}
                            value={values.imgUrl}
                            changeHandler={changeHandler}
                        />
                        {errors.imgUrl && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.imgUrl}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Password:
                        </label>
                        <Input
                            type={InputTypes.Password}
                            placeholder={"Password (6 or more characters)"}
                            valueName={formNames.password}
                            value={values.password}
                            changeHandler={changeHandler}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="confirm-password"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Confirm password:
                        </label>
                        <Input
                            type={InputTypes.Password}
                            placeholder={"Password (6 or more characters)"}
                            valueName={formNames.confirmPassword}
                            value={values.confirmPassword}
                            changeHandler={changeHandler}
                        />
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>
                <div className="pt-[0.5rem] text-center">
                    <Button
                        label={"Register"}
                        px="px-6"
                        py="py-2"
                        submit={true}
                    />
                </div>
                <p className="text-base text-center text-white">
                    Already have an account?{" "}
                    <a
                        href="#"
                        className=" text-primary-600 hover:underline dark:text-primary-500 text-main-yellow-color font-semibold"
                    >
                        Log In
                    </a>
                </p>
            </form>
        </div>
    );
}
