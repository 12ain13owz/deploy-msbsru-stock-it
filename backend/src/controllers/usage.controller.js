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
exports.deleteUsageController = exports.updateUsageController = exports.createUsageController = exports.findAllUsageController = void 0;
const lodash_1 = require("lodash");
const helper_1 = require("../utils/helper");
const usage_model_1 = require("../models/usage.model");
const usage_service_1 = require("../services/usage.service");
function findAllUsageController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'findAllUsageController';
        try {
            const usages = yield usage_service_1.usageService.findAll();
            res.json(usages);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findAllUsageController = findAllUsageController;
function createUsageController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'createUsageController';
        try {
            const name = (0, helper_1.removeWhitespace)(req.body.name);
            const usage = yield usage_service_1.usageService.findByName(name);
            if (usage)
                throw (0, helper_1.newError)(400, `สถานะครุภัณฑ์ ${name} ซ้ำ`);
            const payload = new usage_model_1.Usage({
                name: name,
                active: req.body.active,
                remark: req.body.remark || '',
            });
            const result = yield usage_service_1.usageService.create(payload);
            const newUsage = (0, lodash_1.omit)(result.toJSON(), helper_1.privateFields);
            res.json({
                message: `เพิ่มสถานะครุภัณฑ์ ${name} สำเร็จ`,
                usage: newUsage,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.createUsageController = createUsageController;
function updateUsageController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'updateUsageController';
        try {
            const id = +req.params.id;
            const name = (0, helper_1.removeWhitespace)(req.body.name);
            const existingUsage = yield usage_service_1.usageService.findByName(name);
            if (existingUsage && existingUsage.id !== id)
                throw (0, helper_1.newError)(400, `ชื่อสถานะครุภัณฑ์ ${name} ซ้ำ`);
            const payload = {
                name: name,
                active: req.body.active,
                remark: req.body.remark || '',
            };
            const [result] = yield usage_service_1.usageService.update(id, payload);
            if (!result)
                throw (0, helper_1.newError)(400, `แก้ไขสถานะครุภัณฑ์ ${name} ไม่สำเร็จ`);
            res.json({
                message: `แก้ไขสถานะครุภัณฑ์ ${name} สำเร็จ`,
                usage: payload,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.updateUsageController = updateUsageController;
function deleteUsageController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'deleteUsageController';
        try {
            const id = +req.params.id;
            const usage = yield usage_service_1.usageService.findById(id);
            if (!usage)
                throw (0, helper_1.newError)(400, 'ไม่พบสถานะครุภัณฑ์');
            const name = usage.name;
            const result = yield usage_service_1.usageService.delete(id);
            if (!result)
                throw (0, helper_1.newError)(400, `ลบสถานะครุภัณฑ์ ${name} ไม่สำเร็จ`);
            res.json({ message: `ลบสถานะครุภัณฑ์ ${name} สำเร็จ` });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.deleteUsageController = deleteUsageController;
