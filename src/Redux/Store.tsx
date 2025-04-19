import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice"


const Store=configureStore({
  reducer:{
   notes:noteReducer,
  }
})

export default Store