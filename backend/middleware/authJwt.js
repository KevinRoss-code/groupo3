const jwt = require("jsonwebtoken");
const config = require('../config/auth.config');
const db = require("../models");
const User = db.users;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if(!token){
        return res.status(403).send({
            message: "token non approuvé"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(401).send({
                message: "Pas authorisé"
            });
        }
        req.userId = decoded.id;
        next();
    });
};
authorized = (req, res, next) =>{

    User.findByPk(req.userId).then(user => {
        req.isAdmin = user.isAdmin
        next();
    })
}

// isAdmin = (req, res, next) => {
//     User.findByPk(req.userId).then(user => {
//         user.getRoles().the(roles => {
//             for (let i = 0; i < roles.length; i++) {
//                 if(roles[i].name === "admin") {
//                     next();
//                     return;
//                 }
//             }

//             res.status(403).send({
//                 message: "Pas les droits"
//             });
//             return;
//         })
//     })
// };

const authJwt = {
    verifyToken: verifyToken,
    authorized: authorized
    // isAdmin: isAdmin
};
module.exports = authJwt;