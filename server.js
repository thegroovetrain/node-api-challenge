const express = require('express');
const logger = require('./middleware/logger');
const projects = require('./routes/projects');
const actions = require('./routes/actions');

const server = express();
server.use(express.json());
server.use(logger());

server.use('/api/projects', projects);
server.use('/api/actions', actions);

server.get('/', (req, res) => {
    res.send(`Shit works yo`);
});

module.exports = server;