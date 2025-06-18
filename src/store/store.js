import { configureStore } from '@reduxjs/toolkit'
import NowPlayingSlice from '../features/nowPlayingSlice'
const store = configureStore({
   reducer: {
      NowPlaying: NowPlayingSlice,
   },
})

export default store
