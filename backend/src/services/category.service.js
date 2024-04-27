"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.findCategoryByName = exports.findCategoryById = exports.findAllCategory = void 0;
const sequelize_1 = require("sequelize");
const category_model_1 = __importDefault(require("../models/category.model"));
function findAllCategory() {
    return category_model_1.default.findAll(Object.assign({}, getCategoryQueryOptions()));
}
exports.findAllCategory = findAllCategory;
function findCategoryById(id) {
    return category_model_1.default.findByPk(id, Object.assign({}, getCategoryQueryOptions()));
}
exports.findCategoryById = findCategoryById;
function findCategoryByName(name) {
    return category_model_1.default.findOne(Object.assign({ where: { name: { [sequelize_1.Op.like]: name } } }, getCategoryQueryOptions()));
}
exports.findCategoryByName = findCategoryByName;
function createCategory(category) {
    return category_model_1.default.create(category.toJSON());
}
exports.createCategory = createCategory;
function updateCategory(id, category) {
    return category_model_1.default.update(category, { where: { id } });
}
exports.updateCategory = updateCategory;
function deleteCategory(id) {
    return category_model_1.default.destroy({ where: { id } });
}
exports.deleteCategory = deleteCategory;
function getCategoryQueryOptions() {
    return {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    };
}
