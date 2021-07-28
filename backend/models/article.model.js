
module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("article", {
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        imageUrl: {
            type: DataTypes.STRING
        }
    });

    return Article;
}