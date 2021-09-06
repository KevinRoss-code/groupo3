const db = require('../models');
const Commentaire = db.commentaires;

exports.create = (req, res) => {
    let userId = req.userId;
    let articleId = req.body.articleId;
    const commentaire = {
        text: req.body.text,
        userId: userId,
        articleId: articleId,
    };
    Commentaire.create(commentaire)
        .then((commentaire) => {
            console.log(`>> commentaire crée ${JSON.stringify(commentaire, null, 4)}`);
            res.send(commentaire);
        }).catch((err) => {
            console.log(">>Erreur lors de la création du commentaire:" + err);
            res.status(500).send({
                message: err.message
            })
        });

};
exports.findAll = (req, res) => {
    const text = req.body.text;
    let condition = text ? {
        text: {
            [Op.like]: `%${text}%`
        }
    } : null;
    Commentaire.findAll({
        where: condition,
        include: [{
            all: true,
            nested: true
        }],
        order: [
            ['id', 'DESC']
        ]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findById = (id) => {
    return Commentaire.findByPk(id, { include: ['article'] })
        .then((commentaire) => {
            return commentaire;
        }).catch((err) => {
            console.log("Erreur impossible de voir le commentaire " + err);
        });
};

exports.delete = (req, res) => {

    const id = req.params.id;
    try {
        Commentaire.findByPk(id).then(commentaire => {
            if (!req.isAdmin && commentaire.userId !== req.userId) { throw new Error("Don't have access") }
            Commentaire.destroy({
                where: {
                    id: id
                }
            }).then(num => {   
                    if (num == 1) {
                        res.send({
                            message: "Commentaire bien supprimé"
                        });
                    } else {
                        res.send({
                            message: `Impossible de trouver le commentaire ${id}`
                        });
                    }
            }).catch(err => {
                console.log(err)
                res.status(500).send({
                    message: "erreur lors de la suppression" + id
                });
            });
        })
    
} catch {
    res.status(403).send({
        message: "Acces Refuse"
    })
}
};

exports.update = (req, res) => {
    const id = req.params.id;
    const commentaire = {
        text: req.body.data.text,
        id: req.params.id
    };
    console.log(req.body)
    try {
    Commentaire.findOne({ where: { id: id } }).then(function (commentaire) {
        if (!req.isAdmin && commentaire.userId !== req.userId) { throw new Error("Don't have access") }
    });

    Commentaire.update(commentaire, {
        where: {
            id: id
        }
    }).then((num) => {
        if (num == 1) {
                res.send({
                    message: "Commentaire est bien modifié"
                });
            } else {
                res.send({
                    message: `Impossible de modier le commentaire ${id}`
                })
            }
        
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            message: "Erreur lors de la modification" + id
        });
    });
} catch {
    res.status(403).send({
        message: "Acces Refuse"
    })
}
};