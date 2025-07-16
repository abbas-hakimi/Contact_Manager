import React from 'react';

function ContactList({ contacts, handleEdit, handleDelete }) {
  return (
    <ul>
  {contacts.map((c) => (
  <div key={c._id} className="contact-card">
    <div className="contact-info">
      <strong>{c.name}</strong><br />
      {c.email} — {c.phone}
    </div>
    <div className="contact-buttons">
      <button onClick={() => handleEdit(c)}>Edit</button>
      <button onClick={() => handleDelete(c._id)}>Delete</button>
    </div>
  </div>
))}

</ul>
  );
}

export default ContactList;
