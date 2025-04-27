import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NoteType } from '../types/types'
import { toast } from 'react-toastify'; 
import axios from 'axios'

const EditNote = () => {
  const { _id = '' } = useParams<{ _id: string }>()
  const navigate = useNavigate()
  const [note, setNote] = useState<NoteType>({
    _id: '',
    subject: '',
    title: '',
    content: '',
    date: ''
  })

  const fetchNote = async () => {
    try {
      const { data } = await axios.get(`/api/notes/edit/${_id}`)
      setNote(data.note)
    } catch (err) {
      console.error('Fetch error', err)
    }
  }

  useEffect(() => {
    fetchNote()
  }, [_id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setNote({ ...note, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.put(`/api/notes/edit/${_id}`, {
        subject: note.subject,
        title: note.title,
        content: note.content
      })
      toast.success("Note Edited successfully")
      navigate('/')
    } catch (err) {
      console.error('Update error', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white p-10 rounded-3xl shadow-2xl border border-transparent hover:border-gradient-to-r hover:from-pink-500 hover:to-yellow-400 transition-all">
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-pink-400 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity"></div>
        <h1 className="relative text-5xl font-extrabold text-gray-800 text-center mb-8">
          ✏️ Edit Note
        </h1>

        <form onSubmit={handleSubmit} className="relative space-y-8">
          {/** Floating Label Input **/}
          {[['subject', 'Subject'], ['title', 'Title']].map(([name, label]) => (
            <div key={name} className="relative">
              <input
                id={name}
                name={name}
                type="text"
                value={(note as any)[name]}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 pb-2 placeholder-transparent focus:outline-none focus:border-pink-500 transition"
                placeholder={label}
              />
              <label
                htmlFor={name}
                className="absolute left-0 -top-3 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-pink-500 peer-focus:text-sm transition-all"
              >
                {label}
              </label>
            </div>
          ))}

          {/** Floating Label Textarea **/}
          <div className="relative">
            <textarea
              id="content"
              name="content"
              rows={6}
              value={note.content}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 pb-2 placeholder-transparent focus:outline-none focus:border-pink-500 transition resize-none"
              placeholder="Content"
            />
            <label
              htmlFor="content"
              className="absolute left-0 -top-3 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-pink-500 peer-focus:text-sm transition-all"
            >
              Content
            </label>
          </div>

          {/** Gradient Button **/}
          <div className="text-center">
            <button
              type="submit"
              className="relative inline-block px-12 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 shadow-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition"></span>
              Update Note
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditNote
