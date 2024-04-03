import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesclice";

const useUpcomingMovies = () =>{

  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',api_options);
  const json = await data.json();
  console.log(json);
  dispatch(addUpcomingMovies(json.results));
};

useEffect(() => {
    getUpcomingMovies();
},[]);
};
export default useUpcomingMovies;