import { createSlice } from '@reduxjs/toolkit'



export const scrapSlice = createSlice({
  name: 'scrap',
  initialState: [],
  reducers: {
    post: (state, {payload}) => {
      //state.value = action.payload
      return [...state, ...payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { post } = scrapSlice.actions

export default scrapSlice.reducer