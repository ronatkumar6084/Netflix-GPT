import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesclice";

const useTopRatedMovies = () =>{

  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',api_options);
  const json = await data.json();
  console.log(json);
  dispatch(addTopRatedMovies(json.results));
};

useEffect(() => {
    getTopRatedMovies();
},[]);
};
export default useTopRatedMovies;