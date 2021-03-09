const db = require("../models");
const userId = require("../middleware/authJwt");
const Article = db.articles;
const Commentaire = db.commentaires;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if(!req.body.title){
        res.status(400).send({
            message: "titre vide"
        });
        return;
    }
    let userId = req.userId;
    const article = {
        
        title: req.body.title,
        content: req.body.content,
        userId: userId,
        
    };
    Article.create(article)
    .then((article) => {
        console.log(`>> Article crée ${JSON.stringify(article, null, 4)}`);
        res.send(article);
    }).catch((err) => {
        console.log(">>Erreur lors de la création de l'article:" + err);
        res.status(500).send({
            message: err.message
        })
    });
}

exports.findAll = (req, res) => {
    const title = req.body.title;
    let condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Article.findAll({
        where: condition, 
        include: [{
            model: Commentaire,
            as: 'commentaires'
        }],
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findAllContent = (req, res) => {
    Article.findAll({
        where: {
            content: true
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findById = (req, res) => {
    const id = req.params.id;

    Article.findByPk(id, {
        include: [{
            model: Commentaire,
            as: "commentaires"
        }]
    }).then((article) => {
        res.send(tutorial);
    }).catch((err) => {
        console.log("Erreur lors de la recherche de l'article" + err);
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Article.update(req.body, {
        where: {
            id:id
        }
    }).then((num) => {
        if (num == 1) {
            res.send({
                message: "Article est bien modifié"
            });
        }else{
            res.send({
                message: `Impossible de modier l'article ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Erreur lors de la modification" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Article.destroy({
        where: {
            id:id
        }
    }).then(num => {
        if(num == 1) {
            res.send({
                message : "Article bien supprimé"
            });
        }else{
            res.send({
                message: `Impossible de trouver l'article ${id}`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "erreur lors de la suppression" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    Article.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({
            message: 'Articles bien supprimés'
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
