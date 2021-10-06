const express = require('express');
const cors = require('cors');
const app = express();
const allowedOrigins= ['*'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));

    if(allowedOrigins.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
        console.log("true");
    }
    else {
        corsOptions = { origin: false };
        console.log("false");
    }
    
    callback(null, corsOptions);
};
exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);