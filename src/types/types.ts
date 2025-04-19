export interface NoteType{
   id:string;
   title:string,
   content:string,
   date:string
}

export interface NoteState{
  notes:NoteType[]
}