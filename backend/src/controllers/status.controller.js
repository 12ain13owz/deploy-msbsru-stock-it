"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusHandler = exports.updateStatusHandler = exports.createStatusHandler = exports.getAllStatusHandler = void 0;
const lodash_1 = require("lodash");
const helper_1 = require("../utils/helper");
const status_model_1 = require("../models/status.model");
const status_service_1 = require("../services/status.service");
function getAllStatusHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getAllStatusHandler';
        try {
            const statuses = yield (0, status_service_1.findAllStatus)();
            res.json(statuses);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getAllStatusHandler = getAllStatusHandler;
function createStatusHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'createStatusHandler';
        try {
            const name = (0, helper_1.removeWhitespace)(req.body.name);
            const status = yield (0, status_service_1.findStatusByName)(name);
            if (status)
                throw (0, helper_1.newError)(400, `ชื่อสถานะพัสดุ ${name} ซ้ำ`);
            const payload = new status_model_1.Status({
                name: name,
                active: req.body.active,
                remark: req.body.remark || '',
            });
            const result = yield (0, status_service_1.createStatus)(payload);
            const newStatus = (0, lodash_1.omit)(result.toJSON(), helper_1.privateFields);
            res.json({
                message: `เพิ่มสถานะพัสดุ ${name} สำเร็จ`,
                status: newStatus,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.createStatusHandler = createStatusHandler;
function updateStatusHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'updateStatusHandler';
        try {
            const id = +req.params.id;
            const name = (0, helper_1.removeWhitespace)(req.body.name);
            const existingStatus = yield (0, status_service_1.findStatusByName)(name);
            if (existingStatus && existingStatus.id !== id)
                throw (0, helper_1.newError)(400, `ชื่อสถานะพัสดุ ${name} ซ้ำ`);
            const payload = {
                name: name,
                active: req.body.active,
                remark: req.body.remark || '',
            };
            const result = yield (0, status_service_1.updateStatus)(id, payload);
            if (!result[0])
                throw (0, helper_1.newError)(400, `แก้ไขสถานะพัสดุ ${name} ไม่สำเร็จ`);
            res.json({ message: `แก้ไขสถานะพัสดุ ${name} สำเร็จ`, status: payload });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.updateStatusHandler = updateStatusHandler;
function deleteStatusHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'deleteStatusHandler';
        try {
            const id = +req.params.id;
            const status = yield (0, status_service_1.findStatusById)(id);
            if (!status)
                throw (0, helper_1.newError)(400, 'ไม่พบสถานะพัสดุ');
            const name = status.name;
            const result = yield (0, status_service_1.deleteStatus)(+req.params.id);
            if (!result)
                throw (0, helper_1.newError)(400, `ลบสถานะพัสดุ ${name} ไม่สำเร็จ`);
            res.json({ message: `ลบสถานะพัสดุ ${name} สำเร็จ` });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.deleteStatusHandler = deleteStatusHandler;
