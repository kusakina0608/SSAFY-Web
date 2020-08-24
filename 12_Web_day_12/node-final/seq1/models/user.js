const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
    // 테이블 정의
    static init(sequelize){
        return super.init({
            // VARCHAR는 STRING으로 표현한다.
            // INT는 INTEGER로 표현한다.
            // TINYINT는 BOOLEAN
            // DATETIME은 DATE
            // NOT NULL은 allowNull: false
            // UNIQUE는 unique: true
            // DEFAULT now()는 defaultValue: Sequelize.NOW
            // ID는 Sequelize에서 알아서 만들어준다.
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED
            }
        }, {
            sequelize,
            timestamps: true, // timestamps를 true로 하면 createAt, updateAt이 생성된다.
            underscored: false, // 기본적으로 테이블명과 컬럼명을 CamelCase로 바꿔주는데, false로 지정할 경우 snakecase로 지정된다.
            modelName: "User",
            tableName: "User",
            paranoid: false, // true로 설정하면 deletedAt 컬럼이 생긴다. 만약 삭제할 경우 deletedAt 컬럼만 변경이 되고, 실제 데이터는 삭제하지 않는다.
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        })
    }
    // join 등 관계를 설정해 줄 때 사용한다.
    static associate(db){
        db.User.hasMany(db.Comment, {foreignKey: "commenter", sourceKey: "id"})
    }
}