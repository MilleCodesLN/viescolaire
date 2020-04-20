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


Router.post('/', async (req, res) => {

    if (req.body.messages && req.body.messages != '') {
        Message.create({
            messages: req.body.messages,
            user_id: req.body.user_id
        })
            .then(async message => {
                res.status(200).json({ 'message': 'Le message a bien été crée!' })
            })
            .catch(erreur => {
                res.status(500).json({ 'erreur': erreur })
            });
    } else {
        res.status(500).json({ 'erreur': "Il n'y a pas assez de paramètres" });
    }
});
///////////Travail solo du 20/04

Router.get('/', (req, res, next) => {
    delete req.body._id;
    const message = new Message({
        ...req.body
    });
    message.save()
        .then(() => res.status(201).json({ message: 'Message enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

Router.put('/:id', (req, res, next) => {
    Message.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Message modifié !' }))
        .catch(error => res.status(400).json({ error }));
});

Router.delete('/:id', (req, res, next) => {
    Message.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Message supprimé !' }))
        .catch(error => res.status(400).json({ error }));
});

Router.get('/:id', (req, res, next) => {
    Message.findOne({ _id: req.params.id })
        .then(message => res.status(200).json(message))
        .catch(error => res.status(404).json({ error }));
});

module.exports = Router;