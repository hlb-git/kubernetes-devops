const express = require('express');

const app = express();
const port = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) {
            console.error("Error sending index.html:", err);
            res.status(500).send("Internal Server Error");
        }});
});

app.listen(port, () => {
    console.log(`Server application started in port ${port}...`);
});
