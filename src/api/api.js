import axios from 'axios'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
   baseURL: 'https://api.themoviedb.org/3',
   headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

export async function getNowPlaying(page = 1) {
   const response = await tmdbApi.get('/movie/now_playing', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}

export const getMovieDetails = async function (movieID) {
   const response = await tmdbApi.get(`/movie/${movieID}`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

export const getMovieGenres = async function () {
   const response = await tmdbApi.get(`/genre/movie/list`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

export default tmdbApi
