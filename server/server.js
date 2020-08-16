require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');

const PORT = process.env.port || 4000
const blogRouter = require('./Article/router');


mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB connection established"));

server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use('/api/articles', blogRouter);


server.listen(PORT, () =>
    console.log(`Server is running open port: ${PORT}`)
);