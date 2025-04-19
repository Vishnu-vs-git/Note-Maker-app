import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice"
import subjectReducer from "./subjectSlice"


const Store=configureStore({
  reducer:{
   notes:noteReducer,
   subjects:subjectReducer
  }
})

export default Store