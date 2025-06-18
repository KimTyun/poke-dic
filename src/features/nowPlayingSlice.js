import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovieDetails, getNowPlaying, getMovieGenres } from '../api/api'

export const fecthNowPlaying = createAsyncThunk('nowPlayingSlice/fecthNowPlaying', async () => {
   const response = await getNowPlaying()
   return response.data.results
})

export const fecthMovieDetail = createAsyncThunk('nowPlayingSlice/fecthMovieDetail', async function (movieId) {
   const response = await getMovieDetails(movieId)

   return response.data
})
export const fecthMovieGenres = createAsyncThunk('nowPlayingSlice/fecthMovieList', async function () {
   const response = await getMovieGenres()
   return response.data
})

const nowPlayingSlice = createSlice({
   name: 'nowPlaying',
   initialState: {
      movies: [],
      movieDetail: null,
      genres: null,
      loading: true,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fecthNowPlaying.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fecthNowPlaying.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload
         })
         .addCase(fecthNowPlaying.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fecthMovieDetail.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fecthMovieDetail.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetail = action.payload
         })
         .addCase(fecthMovieDetail.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fecthMovieGenres.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fecthMovieGenres.fulfilled, (state, action) => {
            state.loading = false
            state.genres = action.payload
         })
         .addCase(fecthMovieGenres.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default nowPlayingSlice.reducer
