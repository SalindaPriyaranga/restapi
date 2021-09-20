const { response } = require('express');
const db = require('../models');
const UserDetail = db.userdetail;

exports.getAllUserDetail = (req, res) => {
    UserDetail.findAll()
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(401).send('user detail are empty');
            }


        }).catch(err => {
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );

        });
}
exports.getSingleUserDetail = (req, res) => {
    const id = req.params.id;
    // console.log(id);
    UserDetail.findByPk(id)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            }
            else {
                res.status(401).send('no user');
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || 'NOT FOUND'
            });
        });
}
exports.createUserDetail = async (req, res) => {
    const userdetail = {
        nameen: req.body.nameen,
        namesi: req.body.namesi,
        nameta: req.body.nameta,
        dob: req.body.dob,
        salary: req.body.salary,
        specialreq: req.body.specialreq,

    }
    await UserDetail.create(userdetail)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            }
            else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || 'NOT FOUND'
            });
        });
}
exports.updateUserDetail = async (req, res) => {
    const userdetail = {
        nameen: req.body.nameen,
        namesi: req.body.namesi,
        nameta: req.body.nameta,
        dob: req.body.dob,
        salary: req.body.salary,
        specialreq: req.body.specialreq,

    }
    await UserDetail.update(userdetail, {
        where: { id: req.body.id, }
    })
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            }
            else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || 'NOT FOUND'
            });
        });
}