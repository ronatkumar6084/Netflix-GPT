import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userslice';
import { useEffect } from 'react';
import { LOGO, supported_languages } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptslice';
import { changeLanguage } from '../utils/configslice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    navigate("/");
    }).catch((error) => {
    navigate("/error");
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({
            uid:uid, 
            email:email, 
            displayName:displayName, 
            photoURL:photoURL}));
            navigate("/browse");
        } else {
           dispatch(removeUser());
           navigate("/");
        }
      });
        return ()=> unsubscribe();
  },[]);

  const handleGptSearchClick = ()=>{
      dispatch(toggleGptSearchView());
  }

  const handleLanguageChange =(e)=>{
      console.log(e.target.value);
      dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

      <img className='w-44' src={LOGO} alt="logo"/>

    { user && <div className='flex p-2'>
      { showGptSearch && 
      (<select className='p-2 m-2 bg-slate-700 text-white' 
        onChange={handleLanguageChange}>
        {supported_languages.map((lang) => (
          <option key={lang.identifier} 
          value={lang.identifier}>
          {lang.name}</option>
        ))}
      </select>)};
      <button className='py-2 px-4 mx-4 my-2 bg-red-800 text-white rounded-lg' 
      onClick={handleGptSearchClick}>
      {showGptSearch ? "Home Page":"GPT Search"}       
        </button>

        <img className="w-12 h-12" src={user?.photoURL}  alt="usericon" />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
    </div>}

    </div>
  )
}

export default Header;

// src={user?.photoURL}  
//src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"