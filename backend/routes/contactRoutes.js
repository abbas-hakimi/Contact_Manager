const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// Add a new contact
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.send(contact);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.send(updated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


// Delete a contact
router.delete('/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted' });
});

module.exports = router;
