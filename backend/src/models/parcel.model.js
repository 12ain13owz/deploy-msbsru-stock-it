"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parcel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../utils/sequelize"));
class Parcel extends sequelize_1.Model {
}
exports.Parcel = Parcel;
exports.default = Parcel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    track: {
        type: sequelize_1.DataTypes.STRING(12),
        allowNull: false,
        unique: true,
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    oldCode: {
        type: sequelize_1.DataTypes.STRING,
    },
    receivedDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    detail: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    print: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    remark: {
        type: sequelize_1.DataTypes.TEXT,
    },
    image: {
        type: sequelize_1.DataTypes.TEXT,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    indexes: [
        { unique: true, fields: ['track'] },
        { fields: ['code'] },
        { fields: ['createdAt'] },
    ],
    sequelize: sequelize_2.default,
    modelName: 'Parcel',
    timestamps: true,
});
