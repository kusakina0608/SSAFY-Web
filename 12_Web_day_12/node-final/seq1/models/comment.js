const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
    // 테이블 정의
    static init(sequelize){
        return super.init({
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: "Comment",
            tableName: "Comments",
            paranoid: false,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        })
    }
    // join 등 관계를 설정해 줄 때 사용한다.
    static associate(db){
        db.Comment.belongsTo(db.User, {foreignKey: "commenter", targetKey: "id"})
    }
}