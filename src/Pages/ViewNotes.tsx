import React, { useEffect, useState } from 'react'
import { UseSelector } from 'react-redux'
import { NoteType } from '../types/types'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'





const ViewNotes = () => {
  const[notes,setNotes]=useState<NoteType[]>([])
  const navigate=useNavigate()
 
  const fetchNotes=async () =>{
    try{
      const response=await axios.get("http://localhost:7000/api/notes")
        setNotes(response.data.notes);
       
    }catch(error){
        console.error("Error fetching notes",error);
    }
  }

  useEffect(()=>{
    fetchNotes();
  },[])

    const handleDelete = async (id:string)=>{
        
      
      try{
        await axios.delete(`http://localhost:5000/api/notes/${id}`)
        setNotes(notes.filter(note=>note.id !==id));

      }catch(error){
            console.error("Error deleting note:" ,error)
      }

    }

    const handleEdit = async (id:string) =>{
      navigate(`/edit-note/${id}`)
    }



  return (
    <div className='min-h-screen bg-gray-100 p-8' >
       <h1 className='text-3xl font-bold mb-6'>Your Notes</h1>

       <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap 6'>
             {notes.map((note)=>(

               <div key={note.id} className='bg-white p-6 rounded shadow-md relative'>
                     <h2 className="text-xl font-semibold mb-2">{note.subject}</h2>
                     <h3 className="text-lg text-gray-700 mb-2">{note.title}</h3>
                     <p className='text-gray-600'  >{note.content}</p>
                     <div className="flex space-x-2">
                        <button
                           onClick={()=>handleEdit(note.id)}
                           className='bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded'>
                             Edit
                           </button>
                           <button 
                              onClick={()=>handleDelete(note.id)}
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                                Delete
                              </button>
                     </div>

               </div>

             ))}
       </div>
       <div className="mt-8">
          <Link 
              to ="/add-note"
              className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
                Add New Note
              </Link>

       </div>

    </div>
  )
}

export default ViewNotes