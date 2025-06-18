import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthNowPlaying } from '../features/nowPlayingSlice'
import { Link } from 'react-router-dom'

function NowPlaying() {
   const dispatch = useDispatch()
   //   movies: [],
   // loading: true,
   // error: null,
   const { movies, loading, error } = useSelector((state) => state.NowPlaying)

   useEffect(() => {
      dispatch(fecthNowPlaying())
   }, [dispatch])

   if (loading) <p>로딩중</p>
   if (error) <p>{error}</p>

   return (
      <>
         <h2>상영중인 영화 목록</h2>
         <ul>
            {movies.map((e) => {
               return (
                  <li key={e.id}>
                     <Link to={`/movieDetail/${e.id}`}>{e.title}</Link>
                  </li>
               )
            })}
         </ul>
         <h3>
            <Link to={'/MovieGenresList'}>영화 장르 목록</Link>
         </h3>
      </>
   )
}

export default NowPlaying
