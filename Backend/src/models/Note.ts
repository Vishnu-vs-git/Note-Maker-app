import mongoose,{Document,Schema}from "mongoose"
export interface INote extends Document {
  title: string;
  content: string;
  subject:string;
  date:Date
}


const noteSchema= new Schema<INote>({
 title:{
  type:String,required:true
 },
 content:{
  type:String,
  required:true
 },
 subject:{
  type:String,required:true
 },
 date:{
  type:Date,
  default:Date.now()
 }

});

export default mongoose.model<INote>("Note",noteSchema)