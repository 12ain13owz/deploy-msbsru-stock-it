"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usage = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../utils/sequelize"));
class Usage extends sequelize_1.Model {
}
exports.Usage = Usage;
exports.default = Usage.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    active: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    remark: { type: sequelize_1.DataTypes.TEXT },
    createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
}, {
    indexes: [{ fields: ['name'] }],
    sequelize: sequelize_2.default,
    modelName: 'Usage',
    timestamps: true,
});