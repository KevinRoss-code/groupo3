

module.exports = (sequelize, DataTypes) => {
    const Commentaire = sequelize.define('commentaire', {
        name: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        }
    });

    return Commentaire;
}