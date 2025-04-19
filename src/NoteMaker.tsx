import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote,deleteNotes } from './Redux/noteSlice'

const NoteMaker = () => {
 const dispatcher=useDispatch()
 const titleRef= useRef(null);
 const contentRef= useRef(null);
 const [title,setTitle]=useState<string>("")
 const [content,setContent]=useState<string>("")
 const Notes= useSelector((state)=>{
     return state.notes.notes
 })
 const handleSubmit=()=>{}


  return (
    <div  className="min-h-screen bg-amber-600 p-5">
      <div className="max-w-md mx-auto bg-white p-6 rounded-b-lg shadow-lg "></div>
      <h1 className='text-2xl font-semibold text-center mb-4'>Note maker</h1>

      < form onSubmit={handleSubmit}>
         <input
            ref={titleRef}
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className='w-full p-2 mb-2 border rounded-md'
            />

            <textarea 
              ref={contentRef}
              placeholder='Note content'
              value={content}
              onChange={(e)=>setContent(e.target.value)}
              className='w-full p-2 mb-2 border rounded-md'
              />

            
      
      </form>

    </div>
  )
}

export default NoteMaker