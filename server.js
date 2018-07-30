'use strict';

// INSERT EXPRESS APP CODE HERE...

const express = require('express');

const data = require('./db/notes');

const app = express();

// ADD STATIC SERVER HERE
app.use(express.static('public'));

// GET ROUTES 

// Display all notes and search functionality
app.get('/api/notes', (req, res) => {
    const {searchTerm} = req.query;
    res.json(searchTerm ? data.filter(item => item.title.includes(searchTerm)) : data);
  });

  // Display full note
app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    res.json(data.find(item => item.id === Number(id)))
});


// Listen for incoming connections
app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});


