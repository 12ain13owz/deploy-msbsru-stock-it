"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../utils/sequelize"));
class Log extends sequelize_1.Model {
}
exports.Log = Log;
exports.default = Log.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    track: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    code: { type: sequelize_1.DataTypes.STRING },
    oldCode: { type: sequelize_1.DataTypes.STRING },
    receivedDate: { type: sequelize_1.DataTypes.DATEONLY },
    detail: { type: sequelize_1.DataTypes.STRING },
    quantity: { type: sequelize_1.DataTypes.NUMBER },
    modifyQuantity: { type: sequelize_1.DataTypes.NUMBER },
    firstname: { type: sequelize_1.DataTypes.STRING },
    lastname: { type: sequelize_1.DataTypes.STRING },
    categoryName: { type: sequelize_1.DataTypes.STRING },
    statusName: { type: sequelize_1.DataTypes.TEXT },
    remark: { type: sequelize_1.DataTypes.STRING },
    image: { type: sequelize_1.DataTypes.STRING },
    newParcel: { type: sequelize_1.DataTypes.BOOLEAN },
    editParcel: { type: sequelize_1.DataTypes.BOOLEAN },
    increaseQuantity: { type: sequelize_1.DataTypes.BOOLEAN },
    decreaseQuantity: { type: sequelize_1.DataTypes.BOOLEAN },
    print: { type: sequelize_1.DataTypes.BOOLEAN },
    printCount: { type: sequelize_1.DataTypes.NUMBER },
    detailLog: { type: sequelize_1.DataTypes.STRING },
    createdAt: { type: sequelize_1.DataTypes.DATE },
}, {
    indexes: [{ fields: ['track'] }, { fields: ['createdAt'] }],
    sequelize: sequelize_2.default,
    modelName: 'Log',
    timestamps: true,
    updatedAt: false,
});
