"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../utils/sequelize"));
const user_model_1 = require("./user.model");
const category_model_1 = require("./category.model");
const status_model_1 = require("./status.model");
const usage_model_1 = require("./usage.model");
class Inventory extends sequelize_1.Model {
}
exports.Inventory = Inventory;
exports.default = Inventory.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    track: { type: sequelize_1.DataTypes.STRING(12), allowNull: false, unique: true },
    code: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    oldCode: { type: sequelize_1.DataTypes.STRING },
    description: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    unit: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    value: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
    receivedDate: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
    fundingSource: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    location: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    remark: { type: sequelize_1.DataTypes.TEXT },
    image: { type: sequelize_1.DataTypes.TEXT },
    createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: user_model_1.User, key: 'id' },
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: category_model_1.Category, key: 'id' },
    },
    statusId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: status_model_1.Status, key: 'id' },
    },
    usageId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: usage_model_1.Usage, key: 'id' },
    },
}, {
    indexes: [
        { fields: ['track'] },
        { fields: ['code'] },
        { fields: ['createdAt'] },
    ],
    sequelize: sequelize_2.default,
    modelName: 'Inventory',
    timestamps: true,
});
