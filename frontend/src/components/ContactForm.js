import React from 'react';

function ContactForm({ form, setForm, handleSubmit, editId }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <button type="submit">{editId ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
}

export default ContactForm;
