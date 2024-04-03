import {api_options} from '../utils/constant';
import {addTrailerVideo} from '../utils/moviesclice'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    // const [trailerId, setTrailerId] = useState(null);
    const getMovieVideos = async ()=>{
          const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", api_options);
          const json = await data.json();
          console.log(json.results);
          const filterTrailer = json.results.filter((video)=> video.type === 'Trailer');
          console.log(filterTrailer);
          const trailer = filterTrailer.length ? filterTrailer[0]:json.results[0];
          // const trailer = filterTrailer[0];
          console.log(trailer);
          // setTrailerId(trailer.key);
          dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
      getMovieVideos();
    },[]);
};
export default useMovieTrailer;