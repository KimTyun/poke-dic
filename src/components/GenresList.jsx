import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthMovieGenres } from '../features/nowPlayingSlice'

function GenresList() {
   const dispatch = useDispatch()
   const { genres, loading, error } = useSelector((s) => s.NowPlaying)

   useEffect(() => {
      dispatch(fecthMovieGenres())
   }, [dispatch])

   if (loading) return <p>로딩중</p>
   if (error) return <span>{error}</span>
   return (
      <>
         {genres && (
            <div>
               <h2>영화장르리스트</h2>
               <ul>
                  {genres.genres.map((e) => {
                     return <li key={e.id}>{e.name}</li>
                  })}
               </ul>
            </div>
         )}
      </>
   )
}

export default GenresList
