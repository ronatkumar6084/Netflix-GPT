import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    },
});
export const {addNowPlayingMovies,addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrendingMovies, addTrailerVideo} = movieslice.actions;
export default movieslice.reducer;