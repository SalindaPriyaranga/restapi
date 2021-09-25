require('dotenv').config();
const db = require('../models');
const User = db.user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateAccessToken = (uid) => {
    const accessToken = jwt.sign({ id: uid }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_TIME })
    return accessToken;

}
// exports.signout

exports.signin = async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;


    try {
        await User.findOne({ where: { username: username } })
            .then(data => {
                // check data is null

                bcrypt.compare(password, data.password, function (err, result) {
                    if (result == true) {
                        //pasword are matching
                        const accessToken = generateAccessToken(data.id);
                        res.status(200).send({
                            id: data.id,
                            username: data.username,
                            access_token: accessToken,
                        });
                    } else {

                        //pasword are not match
                        res.status(401)
                            .send({ status: false, message: "pasword NOT valid" });

                    }
                });

            }).catch(err => {
                res.status(402)
                    .send({ status: false, message: "username NOT valid" });
            });
    }
    catch (error) {
        res.status(403).send({ status: false, message: "username or password NOT valid" });
    }
}

