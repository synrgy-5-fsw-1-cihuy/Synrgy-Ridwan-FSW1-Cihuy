const formidableMiddleware = require('formidable');
const bcrypt = require('bcrypt');
const jwtTokenUtil = require('../util/jwt_util.js');
const models = require('../models');
const User = models.User;
const saltRounds = 10;


const doRegisterUserHandler = async (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, async (err, fields, files) => {
        if (err) {
            next(err);
            
            return;
        };

        try {
            // Process hashing plain password
            const hashedPassword = await bcrypt.hash(fields.password, saltRounds);
            let user = {};

            const authHeader = request.headers["authorization"];
            if(!authHeader){
                return response.status(404).json({message: "Authorized Failed"});
            }
            const token = authHeader && authHeader.split(' ')[1];
            const decodedToken = await jwtTokenUtil.checkTokenJwt(token);
            const userFindById = await User.findByPk(decodedToken.id);
            if (!userFindById) {
                return response.status(404).json({error: "User not found"});
            };

            //Register user by superadmin
            if (fields.role == "SUPERADMIN") {
                // do create admin user
                user = await User.create({
                    email: fields.email,
                    password: hashedPassword,
                    role: "ADMIN"
                });
            }

            //Register member 
            if (userFindById.role == "MEMBER") {
                user = await User.create({
                    email: fields.email,
                    password: hashedPassword,
                    role: "MEMBER"
                });
            }         

            response.status(201).json({
                message: "Registered successfully", 
                data: {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt

                }
            });
            return;
        } catch(err) {
            response.status(422).json({error: "Error created user"});

            throw err;
        }

    });
};


const doLoginHandler = async (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, async (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        try {
            const email = fields.email;

            const userByEmail = await User.findOne(
                { where: {email: email} }
            ); 

            if (userByEmail == null) {
                response.status(401).json({
                    error: "User account not found. Please register first"
                });
                return;
            };

            const checkAccountPassword = await bcrypt.compare(fields.password, userByEmail.password);

            if (checkAccountPassword == false) {
                response.status(401).json({error: "Email or password incorrect. Please check your spelling"});
                return;
            };

            const tokenGenerated = jwtTokenUtil.encodeTokenJwt({
                id: userByEmail.id,
                email: userByEmail.email,
                role: userByEmail.role
            });

            response.status(200).json({
                message: "Logged successfully",
                token: tokenGenerated,
                role: userByEmail.role
            });

            return;
        } catch(err) {
            response.status(422).json({error: "Error logged user"});
            throw err;
        };

    });
};

const doGetProfileHandler = async (request, response) => {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    const decodedToken = await jwtTokenUtil.checkTokenJwt(token);

    const userFindById = await User.findByPk(decodedToken.id);

    if (userFindById == null) {
        return response.status(404).json({error: "User not found"});
    };

    response.status(200).json({
        data: {
            id: userFindById.id,
            email: userFindById.email,
            role: userFindById.role,
            createdAt: userFindById.createdAt,
            updatedAt: userFindById.updatedAt
        }
    });
};

module.exports = { doRegisterUserHandler, doLoginHandler, doGetProfileHandler };
