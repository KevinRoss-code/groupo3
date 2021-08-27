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
const authJwt = {
    verifyToken: verifyToken,
    authorized: authorized

};
module.exports = authJwt;