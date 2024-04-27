"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetUserPassword = exports.updateUserPassword = exports.updateUser = exports.createUser = exports.findUserByEmail = exports.findUserById = exports.findAllUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
function findAllUser() {
    return user_model_1.default.findAll({
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
}
exports.findAllUser = findAllUser;
function findUserById(id) {
    return user_model_1.default.findByPk(id);
}
exports.findUserById = findUserById;
function findUserByEmail(email) {
    return user_model_1.default.findOne({ where: { email } });
}
exports.findUserByEmail = findUserByEmail;
function createUser(user) {
    return user_model_1.default.create(user.toJSON());
}
exports.createUser = createUser;
function updateUser(id, user) {
    return user_model_1.default.update(user, { where: { id } });
}
exports.updateUser = updateUser;
function updateUserPassword(id, password) {
    return user_model_1.default.update({ password }, { where: { id } });
}
exports.updateUserPassword = updateUserPassword;
function resetUserPassword(id, password) {
    return user_model_1.default.update({ password: password, passwordResetCode: null, passwordExpired: null }, { where: { id } });
}
exports.resetUserPassword = resetUserPassword;
