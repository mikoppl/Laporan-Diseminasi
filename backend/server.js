'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/api/laporan', (req, res) => {
    // Logic for retrieving laporan data
    res.send('Laporan data');
});

app.get('/api/laporan/export/pdf', (req, res) => {
    // Logic for exporting laporan to PDF
    res.send('Exporting laporan to PDF');
});

app.get('/api/laporan/export/excel', (req, res) => {
    // Logic for exporting laporan to Excel
    res.send('Exporting laporan to Excel');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
