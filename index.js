const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`REST API is running at http://localhost:${PORT}`);
});
