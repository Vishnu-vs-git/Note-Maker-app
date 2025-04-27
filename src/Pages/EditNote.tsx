import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NoteType } from '../types/types';
import axios from 'axios';

const EditNote = () => {
  const {id=""} =useParams<{id:string}>();
  const navigate=useNavigate();
 const [note,setNote] = useState<NoteType>({
   id:"",
   subject:"",
   title:"",
   content:"",
   date:""

 });
 const fetchNote =async () =>{
  try{
    const response = await axios.get(`/api/notes/${id}`);
    setNote(response.data.note);
  }catch(error){
    console.error("Error in fetching note",error);
  }
 }

 useEffect(()=>{
  fetchNote()
 },[id]);

 const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
      setNote({...note,[e.target.name]:e.target.value});
 }

 const handleSubmit = async (e:React.FormEvent)=>{
  e.preventDefault();
  try{
     await axios.put(`/api/notes/${id}`,{
      subject:note.subject,
      title:note.title,
      content:note.content
     })
     navigate("/view-notes");

  }catch(error){
     console.error("Error updating note:",error);
  }
 }

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <h1 className='text-3xl font-bold mb-6'>Edit Notes</h1>

       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
             <div className="mb-4">
               <label className="block font-semibold mb-1">Subject</label>
                <input 
                     type="text"
                     name="subject"
                     value={note.subject}
                     onChange={handleChange}
                     className="w-full border border-gray-300 rounded px-3 py-2"
                     required
                     />
             </div>

             <div className="mb-4">
                <label className="block font-semibold mb-1">Title</label>
                  <input 
                     type="text"
                     name="title"
                     value={note.title}
                     onChange={handleChange}
                     className="w-full border-gray-300 rounded px-3 py-2"
                     />
             </div>
             <div className="mb-4">
                  <label className="block font-semibold mb-1">Contentt</label>
                   <textarea
                      name="content"
                      value={note.content}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required></textarea>
                      
             </div>
             <button 
                type="submit"
                className="bg-gree roundedn-500 hover:bg-green-600 text-white px-4 py-2">Update Note</button>

       </form>

    </div>
  )
}

export default EditNote