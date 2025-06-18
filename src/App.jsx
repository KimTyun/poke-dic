import { Route, Routes } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'
import NowPlaying from './components/NowPlaying'
import NotFound from './components/NotFound'
import GenresList from './components/GenresList'

function App() {
   return (
      <Routes>
         <Route path="/" element={<NowPlaying />}></Route>
         <Route path="/MovieDetail/:movieId" element={<MovieDetail />}></Route>
         <Route path="/MovieGenresList" element={<GenresList />}></Route>
         <Route path="/*" element={<NotFound />}></Route>
      </Routes>
   )
}

export default App
