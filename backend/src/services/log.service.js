"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLog = exports.findLogById = exports.findLogByCode = exports.findLogByDate = exports.findLogByTrack = exports.findLimitLog = exports.findAllLog = void 0;
const sequelize_1 = require("sequelize");
const log_model_1 = __importDefault(require("../models/log.model"));
function findAllLog() {
    return log_model_1.default.findAll();
}
exports.findAllLog = findAllLog;
function findLimitLog(limit) {
    return log_model_1.default.findAll({
        limit: limit,
        order: [['createdAt', 'DESC']],
    });
}
exports.findLimitLog = findLimitLog;
function findLogByTrack(track) {
    return log_model_1.default.findAll({ where: { track } });
}
exports.findLogByTrack = findLogByTrack;
function findLogByDate(dateStart, dateEnd) {
    return log_model_1.default.findAll({
        where: { createdAt: { [sequelize_1.Op.between]: [dateStart, dateEnd] } },
    });
}
exports.findLogByDate = findLogByDate;
function findLogByCode(code) {
    return log_model_1.default.findAll({ where: { code } });
}
exports.findLogByCode = findLogByCode;
function findLogById(id) {
    return log_model_1.default.findByPk(id);
}
exports.findLogById = findLogById;
function createLog(log, t) {
    return log_model_1.default.create(log.toJSON(), { transaction: t });
}
exports.createLog = createLog;
