const db = require('../models');
const Article = db.articles;
const Commentaire = db.commentaires;

exports.create = (articleId, commentaire) => {
    return Commentaire.create({
        name: commentaire.name,
        text: commentaire.text,
        articleId: articleId,
    }).then((commentaire) => {
        console.log(`>> Creation d'un commentaire ${JSON.stringify(commentaire, null, 4)}`);
        return commentaire;
    }).catch((err)=> {
        console.log('erreur lors de la création de commentaire ' + err);
    });
};

exports.findById =(id) => {
    return Commentaire.findByPk(id, { include: ['article'] })
    .then((commentaire) => {
        return commentaire;
    }).catch((err) => {
        console.log("Erreur impossible de voir le commentaire " + err);
    });
};