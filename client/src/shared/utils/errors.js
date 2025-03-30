export function registerFreelancerErrors(values, ErrorTypes) {
    const errors = {};
    const validateLength = (field, minLength, errorMessage) => {
        if (!values[field] || values[field].length < minLength) {
            errors[field] = errorMessage;
        }
    };

    if (ErrorTypes === "message") {
        validateLength("message", 20, "Message must be more than 20 letters!");
        return errors;
    }

    if (ErrorTypes === "clientOffer") {
        validateLength("title", 5, "Title must be more than 5 letters!");
        if (!values.industry) {
            errors.industry = "You must select an industry!";
        }
        validateLength("salary", 1, "Salary must be higher than 0!");
        validateLength(
            "description",
            50,
            "Description must be at least 50 words"
        );

        return errors;
    }
    if (ErrorTypes === "description") {
        validateLength(
            "description",
            50,
            "Description must be at least 50 words"
        );
        return errors;
    }
    if (ErrorTypes === "guest") {
        return errors;
    }
    if (ErrorTypes === "freelancerOffer") {
        validateLength("title", 5, "Title must be more than 5 letters!");
        if (!values.industry) {
            errors.industry = "You must select an industry!";
        }
        validateLength("imgUrl", 15, "ImgUrl must be more than 15 letters!");
        validateLength(
            "description",
            50,
            "Description must be at least 50 words"
        );
        return errors;
    }
    if (
        (values.password &&
            values.confirmPassword &&
            values.password !== values.confirmPassword) ||
        values.confirmPassword == ""
    ) {
        errors.confirmPassword = "Passwords do not match";
    }

    if (ErrorTypes === "client") {
        validateLength("employees", 1, "Employees must be more 1!");
    }
    validateLength("name", 3, "Name must be more than 3 letters!");
    validateLength("email", 6, "Email must be more than 6 letters!");
    validateLength("imgUrl", 15, "ImgUrl must be more than 15 letters!");
    validateLength("password", 6, "Password must be more than 6 letters!");

    if (ErrorTypes === "freelancer") {
        validateLength("title", 5, "Title must be more than 5 letters!");
        validateLength("skills", 10, "Skills must be more than 10 letters!");

        if (isNaN(values.hourRate) || values.hourRate <= 0) {
            errors.hourRate = "HourRate must be a number higher than 0!";
        }
    }

    if (!values.industry) {
        errors.industry = "You must select an industry!";
    }

    return errors;
}
