const express = require('express');
const Message = require('../models/message');

const Router = express.Router();

Router.get('/', async (req, res) =>
    Message.findAll()
        .then(async messages => {
            res.status(200).json(messages);

        })
        .catch(erreur => {
            res.status(500).json({ 'erreur': erreur });
        })
);

module.exports = Router;