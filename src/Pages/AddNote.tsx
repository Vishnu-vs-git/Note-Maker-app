import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddNote = () => {
  const navigate = useNavigate();

  const [note, setNote] = useState({
    subject: '',
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/notes/add', note);
      toast.success("Note added Successfully");
      navigate('/');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  // Helper for floating label
  const isFilled = (field) => note[field].length > 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-lg bg-white/60 border border-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-10 relative">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-i-700 via-fuchsia-600 to-pink-500 mb-10 text-center tracking-tight drop-shadow-lg">
          Add New Note
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Subject */}
          <div className="relative">
            <input
              id="subject"
              type="text"
              name="subject"
              value={note.subject}
              onChange={handleChange}
              className="peer w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition placeholder-transparent"
              required
              autoFocus
              placeholder="Subject"
            />
            <label
              htmlFor="subject"
              className={`absolute left-4 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-indigo-600
                ${isFilled('subject') ? '-top-4 text-sm text-indigo-600' : ''}
              `}
            >
              Subject
            </label>
          </div>
          {/* Title */}
          <div className="relative">
            <input
              id="title"
              type="text"
              name="title"
              value={note.title}
              onChange={handleChange}
              className="peer w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition placeholder-transparent"
              required
              placeholder="Title"
            />
            <label
              htmlFor="title"
              className={`absolute left-4 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-indigo-600
                ${isFilled('title') ? '-top-4 text-sm text-indigo-600' : ''}
              `}
            >
              Title
            </label>
          </div>
          {/* Content */}
          <div className="relative">
            <textarea
              id="content"
              name="content"
              value={note.content}
              onChange={handleChange}
              rows={6}
              className="peer w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition placeholder-transparent resize-none"
              required
              placeholder="Content"
            ></textarea>
            <label
              htmlFor="content"
              className={`absolute left-4 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-indigo-600
                ${isFilled('content') ? '-top-4 text-sm text-indigo-600' : ''}
              `}
            >
              Content
            </label>
          </div>
          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 active:scale-95"
          >
            Add Note
          </button>
        </form>
        {/* Glassmorphism effect */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/30" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'}}></div>
      </div>
    </div>
  );
};

export default AddNote;