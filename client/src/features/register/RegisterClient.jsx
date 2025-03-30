import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { industryCategories } from "../../shared/constants/categories";
import { InputTypes } from "../../shared/types/input-types";
import { useRegister } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { UserTypes } from "../../shared/types/user-types";
import { clientRegister } from "../../shared/forms/initialValues";
import { formNames } from "../../shared/forms/names";
import { useForm } from "../../hooks/useForm";

export default function RegisterClient() {
    const register = useRegister(UserTypes.Client);
    const navigate = useNavigate();
    const initialValues = clientRegister;

    const registerClientHandler = async (data) => {
        try {
            await register(data);
            navigate("/");
        } catch (error) {}
    };

    const { values, errors, changeHandler, submitHandler } = useForm(
        initialValues,
        registerClientHandler,
        UserTypes.Client
    );

    return (
        <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[29rem] shadow-xl rounded-sm">
            <h1 className="text-2xl font-bold text-center text-white">
                Register as a Client
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div className="grid grid-cols-2 sm:grid-cols-1 grid-rows-2 gap-6 gap-y-2">
                    <div>
                        <label className="block mb-2 text-base font-semibold text-main-yellow-color">
                            Name
                        </label>
                        <Input
                            type={InputTypes.Text}
                            placeholder={"GameHub"}
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

                    <div>
                        <label className="block mb-2 text-base font-semibold text-main-yellow-color">
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
                            htmlFor="employees"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Employees
                        </label>
                        <Input
                            type={InputTypes.Number}
                            placeholder={"Must be a number"}
                            valueName={formNames.employees}
                            value={values.employees}
                            changeHandler={changeHandler}
                        />
                        {errors.employees && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.employees}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block mb-2 text-base font-semibold text-main-yellow-color">
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
