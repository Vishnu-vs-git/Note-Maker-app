import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { NoteType } from '../types/types';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewNotes = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null); // ⭐

  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (_id: string) => {
    try {
      await axios.delete(`/api/notes/delete/${_id}`);
      toast.success("Note deleted successfully!");
      setNotes(notes.filter(note => note._id !== _id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEdit = (_id: string) => {
    navigate(`/edit-note/${_id}`);
  };

  const toggleExpand = (id: string) => {
    setExpandedNoteId(prevId => (prevId === id ? null : id));
  };

  const subjectColors = {
    Work: "bg-yellow-400",
    Personal: "bg-pink-300",
    Health: "bg-green-300",
    Study: "bg-purple-300",
    Reminder: "bg-red-300",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700">📚 Your Notes</h1>

          <Link
            to="/add-note"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-5 rounded-lg shadow-md transition-transform hover:scale-105"
          >
            ➕ Add Note
          </Link>
        </div>

        {/* Notes Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map(note => {
            const badgeColor = subjectColors[note.subject as keyof typeof subjectColors] || "bg-blue-300";
            const isExpanded = expandedNoteId === note._id;

            return (
              <div
                key={note._id}
                className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-200"
              >
                {/* Subject badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${badgeColor}`}>
                    {note.subject}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {note.title}
                </h2>

                {/* Content */}
                <p className={`text-gray-500 text-sm mb-4 ${isExpanded ? '' : 'line-clamp-4'}`}>
                  {note.content}
                </p>

                {/* Read More / Show Less Button */}
                {note.content.length > 150 && (
                  <button
                    onClick={() => toggleExpand(note._id)}
                    className="text-indigo-500 hover:underline text-xs font-semibold mb-6"
                  >
                    {isExpanded ? 'Show Less ▲' : 'Read More ▼'}
                  </button>
                )}

                {/* Actions */}
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                  <button
                    onClick={() => handleEdit(note._id)}
                    className="text-indigo-500 hover:text-indigo-600 text-sm font-semibold transition"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="text-rose-500 hover:text-rose-600 text-sm font-semibold transition"
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
