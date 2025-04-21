import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../Redux/noteSlice'
import { addSubjects } from '../Redux/subjectSlice'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../Redux/Store'

const AddNote = () => {
 const dispatch=useDispatch()
 const titleRef= useRef(null);
 const contentRef= useRef(null);
 const navigate=useNavigate()
 const [title,setTitle]=useState<string>("")
 const [content,setContent]=useState<string>("")
 const subjects= useSelector((state:RootState)=>{
   return state.subjects.subjects
 })
 const[subject,setsubject]=useState(subjects[0]||"")
 const[newSubject,setNewSubject]=useState("")

 const Notes= useSelector((state:RootState)=>{
     return state.notes.notes
 })
 const handleSubmit=(e:React.FormEvent)=>{
  e.preventDefault();

   const selectedSubject=newSubject||subject
if(!selectedSubject||!title||!content) return
  
if(newSubject) dispatch(addSubjects(newSubject))

 
     dispatch(addNote(title,content,selectedSubject))
     setTitle("")
     setContent("")
     navigate("/notes")
  
 }


  return (
    <div  className="min-h-screen bg-amber-600 p-5">
      <div className="max-w-md mx-auto bg-white p-6 rounded-b-lg shadow-lg "></div>
      <h1 className='text-2xl font-semibold text-center mb-4'>Add Note</h1>

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

              <select
                 value={subject}
                 onChange={(e)=>setsubject(e.target.value)}
                 className="w-full p-2 mb-2 border rounded"
                 >
                  {subjects.map((sub,index)=>(
                    <option key={index} value={sub}>
                      {sub}
                    </option>
                  ))}
                 </select>

                 <input 
                   type="text"
                   placeholder='Add new subjects'
                   value={newSubject}
                   onChange={(e)=>setNewSubject(e.target.value)}
                   className='w-full p-2 mb-2 border rounded'
                   />

                   <button 
                     type="submit"
                     className="bg-blue-600 text-white w-full py-2 rounded mt-2"
                     >
                       Save Note
                     </button>
            
      
      </form>

    </div>
  )
}

export default AddNote