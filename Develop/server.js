const express = require('express');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get('/api/notes', (req,res) => {
    res.readFile(path.join(__dirname, "./db/db.json"), 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});


app.listen(PORT, () => console.log(`The server is now listening on PORT ${PORT}`));