const { response } = require('express');
const db = require('../models');
const UserDetail = db.userdetail;

exports.getAllUserDetail = (req, res) => {
    UserDetail.findAll()
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(401).send('users are empty');
            }


        }).catch(err => {
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );

        })
}