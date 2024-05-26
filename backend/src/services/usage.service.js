"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usageService = void 0;
const sequelize_1 = require("sequelize");
const usage_model_1 = __importDefault(require("../models/usage.model"));
exports.usageService = {
    findAll() {
        return usage_model_1.default.findAll(Object.assign({}, queryOptions()));
    },
    findById(id) {
        return usage_model_1.default.findByPk(id, Object.assign({}, queryOptions()));
    },
    findByName(name) {
        return usage_model_1.default.findOne(Object.assign({ where: { name: { [sequelize_1.Op.like]: name } } }, queryOptions()));
    },
    create(usage) {
        return usage_model_1.default.create(usage.toJSON());
    },
    update(id, usage) {
        return usage_model_1.default.update(usage, { where: { id } });
    },
    delete(id) {
        return usage_model_1.default.destroy({ where: { id } });
    },
};
function queryOptions() {
    return { attributes: { exclude: ['createdAt', 'updatedAt'] } };
}
