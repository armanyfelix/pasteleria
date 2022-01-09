require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const pastelesRoutes = require('./routes/pastelesRoutes');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/pasteles', pastelesRoutes)

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});