const db = require('../models');
const Article = db.articles;
const Commentaire = db.commentaires;

exports.create = (req, res) => {
    let userId = req.userId;
    let articleId = req.articleId;
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

    /*return Commentaire.create({
        text: commentaire.text,
        articleId: articleId,
        userId: userId,
    }).then((commentaire) => {
        console.log(`>> Creation d'un commentaire ${JSON.stringify(commentaire, null, 4)}`);
        return commentaire;
    }).catch((err)=> {
        console.log('erreur lors de la création de commentaire ' + err);
    });*/
};

exports.findById =(id) => {
    return Commentaire.findByPk(id, { include: ['article'] })
    .then((commentaire) => {
        return commentaire;
    }).catch((err) => {
        console.log("Erreur impossible de voir le commentaire " + err);
    });
};