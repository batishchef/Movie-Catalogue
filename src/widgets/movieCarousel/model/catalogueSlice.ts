import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MoviePages } from './types'
import { fetchListOfMovies } from '../api/api'



const initialState: MoviePages = {
  pages: [],
  currentPage: 1,
  status: 'pending'
}

export const counterSlice = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListOfMovies.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchListOfMovies.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        const newPage = action.payload
        state.pages[state.currentPage] = newPage
      })
      .addCase(fetchListOfMovies.rejected, (state) => {
        state.status = 'rejected'
      })
  }
})

// Action creators are generated for each case reducer function
export const { changePage } = counterSlice.actions

export default counterSlice.reducer