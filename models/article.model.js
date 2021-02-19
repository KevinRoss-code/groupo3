
module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("article", {
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        datePublication: {
            type: DataTypes.BOOLEAN
        }
    });

    return Article;
}