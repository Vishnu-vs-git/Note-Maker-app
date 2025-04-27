import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNote = () => {
  const navigate = useNavigate();

  const [note, setNote] = useState({
    subject: '',
    title: '',
    content: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/notes/add', {
        subject: note.subject,
        title: note.title,
        content: note.content
      });
      navigate('/view-notes'); // after adding, go to View Notes
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Add New Note</h1>

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
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Content</label>
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
