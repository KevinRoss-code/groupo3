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

const verifySignUp = {
    userExisteDeja : userExisteDeja
};

module.exports = verifySignUp;