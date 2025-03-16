// Import Express framework
const express = require('express');
// Create Express application instance
const app = express();

// Serve static files from 'public' directory (CSS/images/etc)
app.use(express.static('public'));

// Set server port
const port = 3000;

// Handle root path GET request
app.get('/', (req, res) => {
    // Return simple HTML content
    res.send('<h1>Welcome to my Node.js and Express Site!</h1>');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
