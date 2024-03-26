export const checkValidData=(email,password)=>{
    // const isValidName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValidate =/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/i.test(email);
    const isPasswordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isValidName) return "Name is not valid";
    if(!isEmailValidate) return "Email id is not valid";
    if(!isPasswordValidate) return "Password is not valid";

    return null;
}