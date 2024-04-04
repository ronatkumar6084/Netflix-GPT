import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header/>
      {showGptSearch ? (
      <GptSearchPage/>
      ) : ( 
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      )}
    </div>
  )
};

export default Browse;
