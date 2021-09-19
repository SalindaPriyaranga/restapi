const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require("./app/models");
const userRoute= require('./app/routes/user.route');
const vehicleRoute= require('./app/routes/vehicle.route');


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


//database coonect start

db.sequelize.sync({ force: false })
    .then(() => {
        console.log(`db table created`);
    });

app.get('/', (req, res) => {
    res.send("Welcome to my ec")
})

//routes
app.use('/user', userRoute );
app.use('/vehicle', vehicleRoute );

const PORT = 3003;


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});