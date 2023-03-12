import { configureStore } from '@reduxjs/toolkit'
import scrapSlice from './scrapSlice'
import loginSlice from './loginSlice'

export const store = configureStore({
  reducer: {
    scrap: scrapSlice,
    login: loginSlice,
    logout: loginSlice
  },
})