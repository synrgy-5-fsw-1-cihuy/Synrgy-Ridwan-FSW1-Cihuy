const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function authToken(request, response, next) {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return response.status(401).json({error: "Unauthorized access"});

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        if (decoded == null) {
            response.status(401).json({error: "Unautorized access"});
        };
        console.log(decoded);

        if (decoded.role == "ADMIN" || decoded.role == "SUPERADMIN") {
            next();
            return;
        }

        if (decoded.role == "MEMBER") {
            if (request.method == "POST" || request.method == "PUT" || request.method == "DELETE") {
                return response.status(401).json({error: "You cannot doing this operation"});
            }
        }

        next();
    } catch(err) {
        response.status(401).json({error: "Unauthorized access"});
        throw err;
        return;
    };
    
}

module.exports = authToken;