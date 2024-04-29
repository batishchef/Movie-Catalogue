import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieInfo } from "../model/types";



export const fetchMovieInfo = createAsyncThunk(
    'movie/fetchMovieInfo',
    async (id: number): Promise<MovieInfo> => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'X-API-KEY': 'TSX7RC8-Y9N4GCZ-P15P1M5-3EN1HME'}
          };
          
          return fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, options)
            .then(response => response.json())
            .catch(err => console.error(err));
    }
)