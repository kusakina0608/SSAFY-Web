const Sequelize = require("sequelize");

module.exports = class Member extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true
            },
            address: {
                type: Sequelize.STRING(50),
            },
            phone: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            agree: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: false,
            paranoid: false,
            modelName: "member",
            tableName: "member",
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }
    static associate(db){
    }
}