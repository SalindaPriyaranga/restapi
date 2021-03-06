const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require("./app/models");
const userRoute = require('./app/routes/user.route');
const vehicleRoute = require('./app/routes/vehicle.route');
const roleRoute = require('./app/routes/role.route');
const userDetailRoute = require('./app/routes/userdetail.route');
const authRoute = require('./app/routes/auth.route');

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
//middleware
const { veryfyToken } = require ('./app/middlewares/auth.middleware')

//routes
app.use('/user', userRoute );
app.use('/vehicle',veryfyToken ,vehicleRoute );
app.use('/role', veryfyToken,roleRoute );
app.use('/userdetail', userDetailRoute );
app.use('/auth', authRoute );

const PORT = 3003;


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});