const express = require('express');
const dotenv = require('dotenv');
const puffs = require('./routes/puffs')

dotenv.config({ path: './Backend/config/config.env' })

const app = express();

app.use('/api/v1/puffs', puffs);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));