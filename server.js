const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');

app.use(express.static('public'));

app.use(express.json()); // for parsing application/json


const PORT = process.env.PORT || 3000;
connectDB();



// Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});