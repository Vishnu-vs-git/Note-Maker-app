export interface NoteType{
   id:string;
   title:string,
   content:string,
   subject:string,
   date:string
}

export interface NoteState{
  notes:NoteType[]
}