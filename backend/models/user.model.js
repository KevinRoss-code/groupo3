
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
        },
        surname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        job:{
            type: DataTypes.STRING
        },
        // isAdmin: {
        //     type: DataTypes.BOOLEAN
        // }
    });

    return User;
}