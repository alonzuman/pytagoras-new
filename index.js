const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const path = require('path');


connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/videos', require('./routes/api/videos'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, console.log(`Listening on ${PORT}`));