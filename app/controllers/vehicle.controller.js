const { response } = require('express');
const db = require('../models');

const Vehicle = db.vehicle;

exports.getAllVehicle = async (req, res) => {
    Vehicle.findAll()
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(401).send('vehicles are empty');
            }


        }).catch(err => {
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );

        });
}
exports.getSingleVehicle = (req, res) => {
    const id = req.params.id;

    console.log(id);
    Vehicle.findByPk(id)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            }
            else {
                res.status(401).send('no vehicle found');
            }
        })
        .catch(err => {
            // console.log(err);
            res.status(500).send({
                message: err.message || 'NOT FOUND'
            });
        });
}
exports.updateVehicle = async (req, res) => {
    const vehicle = {
        vehicletype: req.body.vehicletype,
        status: req.body.status,

    }
    await Vehicle.update(vehicle, {
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
exports.createVehicle = async (req, res) => {

    const vehicle = {
        vehicletype: req.body.vehicletype,
        status: req.body.status,

    }

    await Vehicle.create(vehicle)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            }
            else {
                res.status(404);
            }
        })
        .catch(err => {
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );

        })

}