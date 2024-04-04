import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userslice';
import { bg_img } from '../utils/constant';
import { user_image } from '../utils/constant';

const Login = () => {
     const [isSigninForm, setIsSigninForm] = useState(true);
     const [errorMessage,setErrorMessage] = useState(null);
    //  const navigate = useNavigate()
     const dispatch = useDispatch()

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm =()=>{
        setIsSigninForm(!isSigninForm);
    };

    const handleButtonClick =()=>{
        // console.log(name.current.value)
        // console.log(email.current.value)
        // console.log(password.current.value)
        const message = checkValidData(email.current.value, password.current.value);
        console.log(message);
        setErrorMessage(message);
        if(message) return;
         
        //Signin Signup logic
        if(!isSigninForm){
            //Signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            // navigate("/browse");
            updateProfile(user, {
              displayName: name.current.value,
              photoURL:user_image,
             })
              .then(() => {
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(
                  addUser({
                  uid:uid, 
                  email:email, 
                  displayName:displayName, 
                  photoURL:photoURL,
                })
              );
                // navigate("/browse");
            })
             .catch((error) => {
              setErrorMessage(error.message);
              console.log(error);
            });
          })
           .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setErrorMessage(errorCode + "---" + errorMessage);
             });
        }
        else{
            //Signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
           .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            // navigate("/browse")
            })
           .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode + "---" + errorMessage);
           });
        }
    };

  return (
    <div>
      <Header/>
      <div>
      <img className='absolute' src={bg_img} alt="logo" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()}
      className="p-12 bg-black absolute w-3/12 my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className='font-bold text-3xl py-4'>{isSigninForm ? "Sign In": "Sign Up"}</h1>
         
        {!isSigninForm && (<input
        ref={name}
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
//https://media.licdn.com/dms/image/D5635AQEUDzUWjqFrHw/profile-framedphoto-shrink_100_100/0/1704266259018?e=1712160000&v=beta&t=ASbTpLHNwoHQiNvFJa--cJwWy4fAsafHHQjJwLLLEMw2
