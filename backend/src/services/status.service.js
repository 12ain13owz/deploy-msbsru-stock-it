"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatus = exports.updateStatus = exports.createStatus = exports.findStatusByName = exports.findStatusById = exports.findAllStatus = void 0;
const sequelize_1 = require("sequelize");
const status_model_1 = __importDefault(require("../models/status.model"));
function findAllStatus() {
    return status_model_1.default.findAll(Object.assign({}, getStatusQueryOptions()));
}
exports.findAllStatus = findAllStatus;
function findStatusById(id) {
    return status_model_1.default.findByPk(id, Object.assign({}, getStatusQueryOptions()));
}
exports.findStatusById = findStatusById;
function findStatusByName(name) {
    return status_model_1.default.findOne(Object.assign({ where: { name: { [sequelize_1.Op.like]: name } } }, getStatusQueryOptions()));
}
exports.findStatusByName = findStatusByName;
function createStatus(status) {
    return status_model_1.default.create(status.toJSON());
}
exports.createStatus = createStatus;
function updateStatus(id, status) {
    return status_model_1.default.update(status, { where: { id } });
}
exports.updateStatus = updateStatus;
function deleteStatus(id) {
    return status_model_1.default.destroy({ where: { id } });
}
exports.deleteStatus = deleteStatus;
function getStatusQueryOptions() {
    return {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    };
}
