import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { NoteType } from '../types/types';
import axios from 'axios';

const ViewNotes = () => {
  

  const [notes, setNotes] = useState<NoteType[]>([]);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes');
      console.log(response)
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);
console.log(notes)






  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNotes(notes.filter(note => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/edit-note/${id}`);
  };

  const subjectColors = {
    Work: "bg-orange-400",
    Personal: "bg-pink-400",
    Health: "bg-green-400",
    Study: "bg-purple-400",
    Reminder: "bg-red-400",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">My Notes</h1>

          <Link 
            to="/add-note"
            className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 text-lg font-semibold"
          >
            + Add Note
          </Link>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map(note => {
            const badgeColor = subjectColors[note.subject as keyof typeof subjectColors] || "bg-orange-400";

            return (
              <div
                key={note.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-200"
              >
                {/* Badge */}
                <div className="flex items-center mb-4">
                  <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${badgeColor}`}>
                    {note.subject}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{note.title}</h2>

                {/* Content */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{note.content}</p>

                {/* Actions */}
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleEdit(note.id)}
                    className="text-indigo-500 hover:text-indigo-600 font-semibold text-sm transition"
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => handleDelete(note.id)}
                    className="text-rose-500 hover:text-rose-600 font-semibold text-sm transition"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ViewNotes;
