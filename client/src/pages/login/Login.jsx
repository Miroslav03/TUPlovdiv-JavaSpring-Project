import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useLogin } from "../../hooks/useAuth";
import { InputTypes } from "../../shared/types/input-types";
import { freelancerLogin } from "../../shared/forms/initialValues";
import { formNames } from "../../shared/forms/names";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { UserTypes } from "../../shared/types/user-types";

export default function Login() {
    const [error, setError] = useState(null);
    const login = useLogin();
    const navigate = useNavigate();
    const initialValues = freelancerLogin;

    const freelancerLoginHandler = async (data) => {
        try {
            await login(data);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        freelancerLoginHandler,
        UserTypes.Guest
    );

    return (
        <div className="bg-main-background-color flex justify-center items-center h-[50rem]">
            <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[25rem] shadow-xl rounded-sm">
                <h1 className="text-2xl font-bold text-center text-white">
                    Log In
                </h1>
                <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={submitHandler}
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Your Email:
                        </label>
                        <Input
                            type={InputTypes.Email}
                            placeholder={"example@gmail.com"}
                            valueName={formNames.email}
                            value={values.email}
                            changeHandler={changeHandler}
                        />
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
                            placeholder={".........."}
                            valueName={formNames.password}
                            value={values.password}
                            changeHandler={changeHandler}
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 text-center">{error}</div>
                    )}
                    <div className="pt-[0.5rem] text-center">
                        <Button
                            label={"Log In"}
                            px="px-6"
                            py="py-2"
                            submit={true}
                        />
                    </div>
                    <p className="text-base text-center text-white">
                        Dont't have an account?{" "}
                        <a
                            href="#"
                            className=" text-primary-600 hover:underline dark:text-primary-500 text-main-yellow-color font-semibold"
                        >
                            Register here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
