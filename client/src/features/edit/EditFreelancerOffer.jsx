import React from "react";
import { useOfferEdit, useOfferInfo } from "../../hooks/useOffers";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorTypes, UserTypes } from "../../shared/types/user-types";
import { useForm } from "../../hooks/useForm";
import { freelancerOfferEdit } from "../../shared/forms/initialValues";
import Input from "../../components/ui/Input";
import { InputTypes } from "../../shared/types/input-types";
import { formNames } from "../../shared/forms/names";
import { industryCategories } from "../../shared/constants/categories";
import Button from "../../components/ui/Button";

export default function EditFreelancerOffer() {
    const edit = useOfferEdit(UserTypes.Freelancer);
    const navigate = useNavigate();
    const { id } = useParams();
    const { offer, loading, error } = useOfferInfo(UserTypes.Freelancer, id);
    const initialValues = freelancerOfferEdit;

    const EditFreelancerOfferHandler = async (data) => {
        try {
            await edit(id, data);
            navigate(`/details/freelancer/offer/${id}`);
        } catch (error) {}
    };

    const { values, errors, changeHandler, submitHandler } = useForm(
        Object.assign(initialValues, {
            title: offer.title,
            industry: offer.industry,
            imgUrl: offer.imgUrl,
            description: offer.description,
        }),
        EditFreelancerOfferHandler,
        ErrorTypes.FreelancerOffer
    );

    return (
        <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[29rem] shadow-xl rounded-sm">
            <h1 className="text-2xl font-bold text-center text-white">
                Edit Offer
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                    <label
                        htmlFor="title"
                        className="block mb-2 text-base font-semibold text-main-yellow-color"
                    >
                        Title
                    </label>
                    <Input
                        type={InputTypes.Text}
                        placeholder={"JavaScript Front-End Developer"}
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
                        htmlFor="industry"
                        className="block mb-2 text-base font-semibold text-main-yellow-color"
                    >
                        Industry
                    </label>
                    <select
                        name="industry"
                        onChange={changeHandler}
                        value={values.industry}
                        className="bg-white w-full px-[0.5rem] py-3"
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
                    <div>
                        <label
                            htmlFor="imgUrl"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            ImageUrl
                        </label>
                        <Input
                            type={InputTypes.Text}
                            placeholder={"https://"}
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
                </div>
                <div>
                    <label
                        htmlFor="description"
                        className="block mb-2 text-base font-semibold text-main-yellow-color"
                    >
                        Description
                    </label>
                    <Input
                        type={InputTypes.Text}
                        placeholder={"I am a passionate Front-End Developer..."}
                        pb={"pb-[6rem]"}
                        valueName={formNames.description}
                        value={values.description}
                        changeHandler={changeHandler}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.description}
                        </p>
                    )}
                </div>
                <div className="pt-[0.5rem] text-center">
                    <Button label={"Edit"} px="px-6" py="py-2" submit={true} />
                </div>
            </form>
        </div>
    );
}
