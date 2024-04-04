import { configureStore } from '@reduxjs/toolkit'
import initReducer from './slice/initReducer'
const store = configureStore({
  reducer: {
    initReducer,
  }
})

export default store