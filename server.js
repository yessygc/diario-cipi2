const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('Hello from express');
});

app.listen(3003, () => {
    console.log('server listen on port', 3003)
});

// {}