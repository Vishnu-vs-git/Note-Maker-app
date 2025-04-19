import {createSlice,PayloadAction}from "@reduxjs/toolkit"
interface SubjectType{
  subjects:string[]
}
const initialState: SubjectType = {
  subjects: ["Javascript", "React"]
};



const subjectSlice=createSlice({

  name:'subjects',
  initialState,
  reducers:{
    addSubjects:(state,action:PayloadAction<string>)=>{
      const subject:string=action.payload.trim();
      if(subject&&!state.subjects.includes(subject)){
        state.subjects.push(subject)
      }
    }
  }
 

})

export const{addSubjects}=subjectSlice.actions;
export default subjectSlice.reducer