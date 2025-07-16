const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/contacts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/contacts', contactRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
