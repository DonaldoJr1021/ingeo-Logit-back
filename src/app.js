const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
require("dotenv").config({ path: path.join(__dirname, './.env') });
const mongoConnect = require('./config/index.db');
const app = express();

// Middelwares Config
app.use(cors());
app.use(function (req, res, next) {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyparser.json());


// Configure port of server with .env or 4000 by default
app.set('port', process.env.PORT || 4000);

app.use(require('./routers/cliente.routes'));

app.use((err, req, res, next) => {
    console.error('Error no controlado:', err);
    res.status(500).json({ message: 'Error interno del servidor.' });
});


if (!mongoConnect.helper.isConnected()) {
    mongoConnect.helper.conectWithMongo();
}


module.exports = app;