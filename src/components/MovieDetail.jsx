import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fecthMovieDetail } from '../features/nowPlayingSlice'

function MovieDetail() {
   /*
    movies: [],
      movieDetail: null,
      loading: true,
      error: null, 
    */
   const movieId = useParams().movieId
   const dispatch = useDispatch()
   const { movieDetail, loading, error } = useSelector((s) => s.NowPlaying)

   useEffect(() => {
      dispatch(fecthMovieDetail(movieId))
   }, [movieId, dispatch])

   if (loading) return <p>로딩중</p>
   if (error) return <span>{error}</span>

   return (
      <>
         {movieDetail && (
            <div>
               <h2>{movieDetail.title}</h2>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetail.poster_path}`} alt={movieDetail.title} />
               </div>
               <h3>줄거리</h3>
               <p>{movieDetail.overview}</p>
               <h3>개봉일</h3>
               <p>{movieDetail.release_date}</p>
               <h3>장르</h3>
               <p>{movieDetail.genres.map((e) => e.name).join(', ')}</p>
               <h3>평점</h3>
               <p>{movieDetail.vote_average.toFixed(2)}</p>
            </div>
         )}
      </>
   )
}

export default MovieDetail
