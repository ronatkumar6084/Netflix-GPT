import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
     const [isSigninForm, setIsSigninForm] = useState(true);
     const [errorMessage,setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm =()=>{
        setIsSigninForm(!isSigninForm);
    };

    const handleButtonClick =()=>{
        console.log(email.current.value)
        console.log(password.current.value)
        const message = checkValidData(email.current.value, password.current.value);
        console.log(message);
        setErrorMessage(message);
    };

  return (
    <div>
      <Header/>
      <div>
      <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()}
      className="p-12 bg-black absolute w-3/12 my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className='font-bold text-3xl py-4'>{isSigninForm ? "Sign In": "Sign Up"}</h1>
         
        {!isSigninForm && (<input 
        type="text" 
        placeholder="Enter full name" 
        className='p-4 my-4 w-full bg-gray-700'/>)}

        <input 
        ref={email}
        type="text" 
        placeholder="Enter email address" 
        className='p-4 my-4 w-full bg-gray-700'/>

        <input 
        ref={password}
        type="password" 
        placeholder="Enter password" 
        className='p-4 my-4 w-full bg-gray-700'/>

        <p className="text-red-600 font-bold text-bold">{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
        {isSigninForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSigninForm? "New to Netflix ? Sign Up Now" : "Already a user? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
