const express = require('express');
const server = express();
server.use(express.json());
const port = 3000;
server.listen(port, () => console.log(`Express departing now from http://localhost:${port}`))

const cors = require('cors');
server.use(cors());


server.get('/', (req, res) => res.send('hello there'));

