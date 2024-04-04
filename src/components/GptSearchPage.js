import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { bg_img } from '../utils/constant';

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
      <img  src={bg_img} alt="logo" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearchPage;
