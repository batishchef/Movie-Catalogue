import { ListOfMovies, URL, Options } from "../model/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export async function fetchListOfMovies(): Promise<ListOfMovies> {
//     const URL: URL = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming'
//     const options: Options = {
//       method: 'GET',
//       params: {page: '5'},
//       headers: {
//         'X-RapidAPI-Key': 'a84cdbd36dmsh90146b354ab64a7p1477c7jsn81ad8424f262',
//         'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//       }
//     };
  
//     return await fetch(URL, options).then(response => response.json())
//   }

  export const fetchListOfMovies = createAsyncThunk(
    'catalogue/fetchListOfMovies',
    async (page: number): Promise<ListOfMovies> => {
      const URL: URL = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=5&selectFields=id&selectFields=name&selectFields=year&selectFields=shortDescription&selectFields=rating&selectFields=poster&selectFields=genres&notNullFields=shortDescription&sortField=id&sortType=1&type=movie`
      const options: Options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'TSX7RC8-Y9N4GCZ-P15P1M5-3EN1HME'}
      };
    
      return fetch(URL, options)
      .then(response => response.json())
      .catch(err => console.error(err));
    }
  )