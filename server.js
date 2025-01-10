const express = require('express');
const app = express();

// Route to return a name
app.get('/', (req, res) => {
    res.send('John Doe');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
