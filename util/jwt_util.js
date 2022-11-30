const dotenv= require('dotenv');
const jwt = require('jsonwebtoken');

//load info env
dotenv.config();

const encodeTokenJWT = (user) => {
        return jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: '12h'});
}

module.exports = {encodeTokenJWT}