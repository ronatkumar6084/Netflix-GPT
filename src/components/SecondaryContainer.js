import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className='-mt-40 relative z-20'>
      <Movielist title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
      <Movielist title={"Top Rated"} movies={movies.topRatedMovies}/>
      <Movielist title={"Popular"} movies={movies.popularMovies}/>
      <Movielist title={"Up Coming Movies"} movies={movies.upComingMovies}/>
      <Movielist title={"Trending"} movies={movies.trendingMovies}/>
      {/* <Movielist title={"Comedy"} movies={movies.nowPlayingMovies}/>
      <Movielist title={"Thriller"} movies={movies.nowPlayingMovies}/>
      <Movielist title={"Romantic"} movies={movies.nowPlayingMovies}/>
      <Movielist title={"Kids"} movies={movies.nowPlayingMovies}/>  */}
      </div>     
    </div>
    )
  )
}

export default SecondaryContainer;
