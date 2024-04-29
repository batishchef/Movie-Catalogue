import { configureStore } from '@reduxjs/toolkit'
import catalogueSlice from '../../widgets/movieCarousel/model/catalogueSlice'
import movieSlice from '../../pages/Movie/model/movieSlice'


export const store = configureStore({
  reducer: {
    catalogue: catalogueSlice,
    movie: movieSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



