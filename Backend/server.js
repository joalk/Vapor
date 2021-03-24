const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './Backend/config/config.env' })

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express')
})

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));