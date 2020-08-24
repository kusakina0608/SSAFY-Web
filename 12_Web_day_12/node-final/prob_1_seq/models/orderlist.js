const Sequelize = require("sequelize");

module.exports = class OrderList extends Sequelize.Model {
    // 테이블 정의
    static init(sequelize){
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true
            },
            type: {
                type: Sequelize.STRING(20)
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: "order_list",
            tableName: "order_list",
            paranoid: false,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        })
    }
    // join 등 관계를 설정해 줄 때 사용한다.
    static associate(db){
    }
}