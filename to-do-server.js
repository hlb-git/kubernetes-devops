const express = require('express');

const app = express();
let port = null;
if (process.env.PORT) {
    port = process.env.PORT;
} else {
    port = 5000;
};

app.listen(port, () => {
    console.log(`Server started in port ${port}`);
});
