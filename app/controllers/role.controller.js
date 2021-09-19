const { response } = require('express');
const db = require('../models');
const Role = db.role;


exports.getAllRole = ( req, res) => {
    Role.findAll()
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(401).send('role are empty');
            }


        }).catch(err => {
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );


        });
}