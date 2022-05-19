const express = require('express');
const bodyParse = require('body-parser');
const jwt = require('jsonwebtoken');
const { config } = require('./config');

const cors = require('cors');
const corsOptions = { origin: "http://exampledomain.com" };

const app = express();

app.use(cors(corsOptions));



//body parser
app.use(bodyParse.json());

app.post('/api/auth/token', function(req, res){
    const { email, username, name } = req.body;
    const token = jwt.sign({ sub: username, email, name }, config.authJwtSecret);
    res.json({ access_token: token});

});

app.get('/api/auth/verify', function(req, res, next){
    const { access_token } = req.query;
   
    try {
        const decoded = jwt.verify(access_token, config.authJwtSecret);
        res.json({ message: "The access token is valid", username: decoded.sub });
    } catch (error) {
        next(error);
    }
});

const server = app.listen(5000, function(){
    console.log(`Listening http:localhost:${server.address().port}`);
});

