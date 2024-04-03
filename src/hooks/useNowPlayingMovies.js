import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesclice";

const useNowPlayingMovies = () =>{

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',api_options);
  const json = await data.json();
  console.log(json);
  dispatch(addNowPlayingMovies(json.results));
};

useEffect(() => {
  getNowPlayingMovies();
},[]);
};
export default useNowPlayingMovies;