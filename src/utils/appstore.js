import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import moviesReducer from "./moviesclice"

const appstore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
        },
    }
)
export default appstore;