import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MovieInfo } from './types'
import { fetchMovieInfo } from '../api/api'

type initialState = {
  movie: MovieInfo;
  status: string;
}

const initialState: initialState = {
  movie: {
    id: 666,
    externalId: {
      kpHD: '',
      imdb: '',
      tmdb: 0,
    },
    name: '',
    alternativeName: '',
    enName: '',
    names: [],
    type: '',
    typeNumber: 0,
    year: 0,
    description: '',
    shortDescription: '',
    slogan: '',
    status: '',
    rating: {
      kp: 0,
      imdb: 0,
      tmdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    votes: {
      kp: 0,
      imdb: 0,
      tmdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 0,
    ratingMpaa: '',
    ageRating: 0,
    logo: {
      url: '',
    },
    poster: {
      url: '',
      previewUrl: '',
    },
    backdrop: {
      url: '',
      previewUrl: '',
    },
    videos: {
      trailers: [],
      teasers: [],
    },
    genres: [],
    countries: [],
    persons: [],
    reviewInfo: {
      count: 0,
      positiveCount: 0,
      percentage: '',
    },
    seasonsInfo: [],
    budget: {
      value: 0,
      currency: '',
    },
    fees: {
      world: {
        value: 0,
        currency: '',
      },
      russia: {
        value: 0,
        currency: '',
      },
      usa: {
        value: 0,
        currency: '',
      },
    },
    premiere: {
      country: '',
      world: '',
      russia: '',
      digital: '',
      cinema: '',
      bluray: '',
      dvd: '',
    },
    similarMovies: [],
    sequelsAndPrequels: [],
    watchability: {
      items: [],
    },
    releaseYears: [],
    top10: 0,
    top250: 0,
    ticketsOnSale: false,
    totalSeriesLength: 0,
    seriesLength: 0,
    isSeries: false,
    audience: [],
    lists: [],
    networks: [],
    updatedAt: '',
    createdAt: '',
    facts: [],
    imagesInfo: {
      postersCount: 0,
      backdropsCount: 0,
      framesCount: 0,
    }
  },
  status: 'pending'
}

export const counterSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieInfo.pending, (state) => {
        state.status = 'pending'
      })

      .addCase(fetchMovieInfo.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.movie = action.payload
      })

      .addCase(fetchMovieInfo.rejected, (state) => {
        state.status = 'rejected'
      })
  }
  
})

export const {  } = counterSlice.actions

export default counterSlice.reducer