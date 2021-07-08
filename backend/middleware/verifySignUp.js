
// const { ROLES } = require('../models');
const db = require('../models');
const User = db.users;

userExisteDeja = (req, res, next) => {
    User.findOne({
        where: {
            name: req.body.name
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message : "Utilisateur déjà connu"
            });
            return;
        }

        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message : "Utilisateur déjà connu"
                });
                return;
            }

            next();
    });
});
};

// roleExisteDeja = (req, res, next) => {
//     if( req.body.roles) {
//         for (let i = 0; i < req.body.roles.length; i++) {
//             if (!ROLES.includes(req.body.roles[i])) {
//                 res.status(400).send({
//                     message : "le role existe déjà = " + req.body.roles[i]
//                 });
//                 return;
//             }
//         }
//     }
//     next();
// }

const verifySignUp = {
    userExisteDeja : userExisteDeja,
    // roleExisteDeja : roleExisteDeja
};

module.exports = verifySignUp;