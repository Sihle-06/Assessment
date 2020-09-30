const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/eblock', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection

db.once('open', () => {
    console.log('Database connection established!')
})

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users',usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})