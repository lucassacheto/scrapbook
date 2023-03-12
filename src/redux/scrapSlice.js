import { createSlice } from '@reduxjs/toolkit'
import {firebaseConnection} from '../connection'
import {addDoc} from 'firebase/firestore'

import {fetchData} from '../redux/loginSlice'
let userLocalStorage = fetchData("userName")
if(userLocalStorage ==  null){userLocalStorage = " "}

const colRef = firebaseConnection(userLocalStorage);
//console.log(colRef);

export const scrapSlice = createSlice({
  name: 'scrap',
  initialState: [],
  reducers: {
    post: (state, {payload}) => {
      //state.value = action.payload
     //return [...state, ...payload]
      try{
        addDoc(colRef, {
            message: payload,
        }).then( () => {
            console.log("saved");
            
        })
      }catch(err){
        console.log(err);
      }
      return [...state, ...payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { post } = scrapSlice.actions

export default scrapSlice.reducer