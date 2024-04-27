"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteParcel = exports.updatePrintParcel = exports.updateQuantityParcel = exports.updateParcel = exports.createParcel = exports.findParcelByDate = exports.findParcelByCode = exports.findParcelByTrack = exports.findParcelById = exports.findLimitParcel = exports.findAllParcel = void 0;
const sequelize_1 = require("sequelize");
const parcel_model_1 = __importDefault(require("../models/parcel.model"));
const category_model_1 = require("../models/category.model");
const status_model_1 = require("../models/status.model");
const user_model_1 = require("../models/user.model");
function findAllParcel() {
    return parcel_model_1.default.findAll(getParcelQueryOptions());
}
exports.findAllParcel = findAllParcel;
function findLimitParcel(limit) {
    return parcel_model_1.default.findAll(Object.assign({ limit: limit, order: [['createdAt', 'DESC']] }, getParcelQueryOptions()));
}
exports.findLimitParcel = findLimitParcel;
function findParcelById(id) {
    return parcel_model_1.default.findByPk(id, Object.assign({}, getParcelQueryOptions()));
}
exports.findParcelById = findParcelById;
function findParcelByTrack(track) {
    return parcel_model_1.default.findOne(Object.assign({ where: { track } }, getParcelQueryOptions()));
}
exports.findParcelByTrack = findParcelByTrack;
function findParcelByCode(code) {
    return parcel_model_1.default.findOne(Object.assign({ where: { code } }, getParcelQueryOptions()));
}
exports.findParcelByCode = findParcelByCode;
function findParcelByDate(dateStart, dateEnd) {
    return parcel_model_1.default.findAll(Object.assign({ where: { createdAt: { [sequelize_1.Op.between]: [dateStart, dateEnd] } } }, getParcelQueryOptions()));
}
exports.findParcelByDate = findParcelByDate;
function createParcel(parcel, t) {
    return parcel_model_1.default.create(parcel.toJSON(), { transaction: t });
}
exports.createParcel = createParcel;
function updateParcel(id, parcel, t) {
    return parcel_model_1.default.update(parcel, { where: { id }, transaction: t });
}
exports.updateParcel = updateParcel;
function updateQuantityParcel(id, quantity, t) {
    return parcel_model_1.default.update({ quantity }, { where: { id }, transaction: t });
}
exports.updateQuantityParcel = updateQuantityParcel;
function updatePrintParcel(id, t) {
    return parcel_model_1.default.update({ print: true }, { where: { id }, transaction: t });
}
exports.updatePrintParcel = updatePrintParcel;
function deleteParcel(id) {
    return parcel_model_1.default.destroy({ where: { id } });
}
exports.deleteParcel = deleteParcel;
function getParcelQueryOptions() {
    return {
        attributes: { exclude: ['UserId', 'CategoryId', 'StatusId'] },
        include: [
            { model: user_model_1.User, attributes: ['firstname', 'lastname'] },
            { model: category_model_1.Category, attributes: ['id', 'name'] },
            { model: status_model_1.Status, attributes: ['id', 'name'] },
        ],
    };
}
