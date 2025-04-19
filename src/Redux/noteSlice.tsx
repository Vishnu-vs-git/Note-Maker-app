import{createSlice, nanoid,PayloadAction} from "@reduxjs/toolkit"
import { NoteType,NoteState } from "../types/types";




const initialState:NoteState={
  notes:[]
}


const noteSlice=createSlice({
  name:"notes",
  initialState,
  reducers:{
    addNote:{
      reducer:(state,action:PayloadAction<NoteType>)=>{
        state.notes.push(action.payload);
      },
      prepare:(title:string,content:string)=>{
        
        return {
          payload:{
            id:nanoid(),
            title,
            content,
            date:new Date().toLocaleString(),
          } as NoteType,
        }
      }
    },
    deleteNotes:(state,action:PayloadAction<string>)=>{
      state.notes=state.notes.filter(note=>note.id !=action.payload)
    }
    

    

  }
})

export const {addNote,deleteNotes} = noteSlice.actions;
export default noteSlice.reducer;


