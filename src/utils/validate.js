
export const checkValidData = (name,email, password) => {
    const isNameValid = /^[a-zA-Z\s]+$/.test(name);

    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isNameValid) return "Name is not valid";

    return null;
};

