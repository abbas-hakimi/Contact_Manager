import React, { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await axios.get('http://localhost:5000/contacts');
    setContacts(res.data);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Client-side validation
  if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
   toast.error("All fields are required!");
  return;
  }

  try {
    if (editId) {
      await axios.put(`http://localhost:5000/contacts/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/contacts", form);
    }
    setForm({ name: '', email: '', phone: '' });
    fetchContacts();
  } catch (error) {
    alert("Server validation failed: " + error.response?.data?.message || error.message);
  }
};

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    fetchContacts();
  };

  const handleEdit = (contact) => {
    setForm({ name: contact.name, email: contact.email, phone: contact.phone });
    setEditId(contact._id);
  };

  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <ContactForm form={form} setForm={setForm} handleSubmit={handleSubmit} editId={editId} />
      <ToastContainer  position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        closeOnClick
                        pauseOnHover/>

      <ContactList contacts={contacts} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
