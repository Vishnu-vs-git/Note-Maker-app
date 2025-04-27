export interface NoteType{
   _id:string;
   title:string,
   content:string,
   subject:string,
   date:string
}

export interface NoteState{
  notes:NoteType[]
}