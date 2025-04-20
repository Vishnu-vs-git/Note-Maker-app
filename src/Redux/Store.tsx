import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice"
import subjectReducer from "./subjectSlice"


const Store=configureStore({
  reducer:{
   notes:noteReducer,
   subjects:subjectReducer
  }
})

 export type RootState = ReturnType<typeof Store.getState>
 export type AppDispatch= typeof Store.dispatch
export default Store