import { createSlice } from '@reduxjs/toolkit'


// User Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: {value: ""},
  reducers: {
    user: (state, action) => {
        state.value = action.payload
        localStorage.setItem("userName", JSON.stringify(action.payload))
    },
    logout: (state, action) => {
      state.value = action.payload
      localStorage.removeItem("userName")
    }
  },
})

// Action creators are generated for each case reducer function
export const { user, logout } = loginSlice.actions

export default loginSlice.reducer