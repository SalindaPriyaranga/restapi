const { response } = require('express');
const db = require('../models');
const User = db.user;

//DBObject.method(where,sort,order).then().catch()
exports.getAllUser = (req, res) => {
    User.findAll()
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
exports.getSingleUser = (req, res) => {
    const id = req.params.id;
    // console.log(id);
    User.findByPk(id)
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
exports.createUser = async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        status: req.body.status,
    }

    await User.create(user)
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
exports.updateUser = async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        status: req.body.status,
    }
    await User.update(user, {
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
exports.deleteUser = async(req, res) => {
    const id = req.params.id;
    await User.destroy({
        where: {
             id: id 
        }
    })
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
}
