import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addTrendingMovies } from "../utils/moviesclice";

const useTrendingMovies = () =>{

  const dispatch = useDispatch();

  const getTrendingingMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1',api_options);
  const json = await data.json();
  console.log(json);
  dispatch(addTrendingMovies(json.results));
};

useEffect(() => {
    getTrendingingMovies();
},[]);
};
export default useTrendingMovies;