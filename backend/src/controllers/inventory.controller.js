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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInventoryController = exports.updateInventoryController = exports.createInventoryController = exports.findInventoryByCodeController = exports.findInventoryByIdController = exports.findInventoryByTrackController = exports.findInventoryByDateController = exports.initialInventoryController = exports.findAllInventoryController = void 0;
const inventory_service_1 = require("../services/inventory.service");
const helper_1 = require("../utils/helper");
const sequelize_1 = __importDefault(require("../utils/sequelize"));
const track_1 = require("../utils/track");
const track_service_1 = require("../services/track.service");
const log_service_1 = require("../services/log.service");
const inventory_model_1 = require("../models/inventory.model");
const log_model_1 = require("../models/log.model");
function findAllInventoryController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'findAllInventoryController';
        try {
            const resInventories = yield inventory_service_1.inventoryService.findAll();
            res.json(resInventories);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findAllInventoryController = findAllInventoryController;
function initialInventoryController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'initialInventoryController';
        try {
            const inventories = yield inventory_service_1.inventoryService.findLimit(30);
            const resInventories = inventories.sort((a, b) => a.id - b.id);
            res.json(resInventories);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.initialInventoryController = initialInventoryController;
function findInventoryByDateController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'findInventoryByDateController';
        try {
            const dateStart = new Date(req.params.dateStart);
            const dateEnd = new Date(req.params.dateEnd);
            if (isNaN(dateStart.getTime()) || isNaN(dateEnd.getTime()))
                throw (0, helper_1.newError)(400, 'รูปแบบวันที่ไม่ถูกต้อง');
            dateStart.setHours(0, 0, 0, 0);
            dateEnd.setHours(23, 59, 59, 999);
            const resInventories = yield inventory_service_1.inventoryService.findByDate(dateStart, dateEnd);
            res.json(resInventories);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findInventoryByDateController = findInventoryByDateController;
function findInventoryByTrackController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'findInventoryByTrackController';
        try {
            const track = req.params.track;
            const resInventory = yield inventory_service_1.inventoryService.findByTrack(track);
            res.json(resInventory === null || resInventory === void 0 ? void 0 : resInventory.toJSON());
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findInventoryByTrackController = findInventoryByTrackController;
function findInventoryByIdController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'findInventoryByIdController';
        try {
            const id = +req.params.id;
            const resInventory = yield inventory_service_1.inventoryService.findById(id);
            res.json(resInventory === null || resInventory === void 0 ? void 0 : resInventory.toJSON());
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findInventoryByIdController = findInventoryByIdController;
function findInventoryByCodeController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'findInventoryByCodeController';
        try {
            const code = (0, helper_1.removeWhitespace)(req.params.code);
            const resInventory = yield inventory_service_1.inventoryService.findByCode(code);
            res.json(resInventory === null || resInventory === void 0 ? void 0 : resInventory.toJSON());
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findInventoryByCodeController = findInventoryByCodeController;
function createInventoryController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'createInventoryController';
        const t = yield sequelize_1.default.transaction();
        try {
            const code = (0, helper_1.removeWhitespace)(req.body.code);
            const existingInventory = yield inventory_service_1.inventoryService.findByCode(code);
            if (existingInventory)
                throw (0, helper_1.newError)(400, `รหัสครุภัณฑ์ ${code} ซ้ำ'`);
            const sequence = yield track_service_1.trackService.create(t);
            const track = yield (0, track_1.generateTrack)(sequence.id);
            const value = parseFloat(req.body.value.replace(/,/g, ''));
            const receivedDate = new Date(req.body.receivedDate);
            const image = req.body.image === 'null' ? null : req.body.image;
            const payloadInventory = new inventory_model_1.Inventory({
                track: track,
                code: code,
                oldCode: req.body.oldCode || '',
                description: req.body.description,
                unit: req.body.unit,
                value: value,
                receivedDate: receivedDate,
                fundingSource: req.body.fundingSource,
                location: req.body.location,
                remark: req.body.remark || '',
                image: image || '',
                userId: res.locals.userId,
                categoryId: +req.body.categoryId,
                statusId: +req.body.statusId,
                usageId: +req.body.usageId,
            });
            const propertyLog = {
                track: track,
                value: value,
                receivedDate: receivedDate,
                image: image || '',
                isCreated: true,
                firstname: res.locals.user.firstname,
                lastname: res.locals.user.lastname,
                categoryName: req.body.categoryName,
                statusName: req.body.statusName,
                usageName: req.body.usageName,
            };
            const payloadLog = generateLog(req.body, propertyLog);
            const resultInventory = yield inventory_service_1.inventoryService.create(payloadInventory, t);
            const resultLog = yield log_service_1.logService.create(payloadLog, t);
            yield t.commit();
            const resInventory = yield inventory_service_1.inventoryService.findById(resultInventory.id);
            const resLog = resultLog.toJSON();
            res.json({
                message: `เพิ่มครุภัณฑ์ ${code} สำเร็จ`,
                inventory: resInventory,
                log: resLog,
            });
        }
        catch (error) {
            yield t.rollback();
            next(error);
        }
    });
}
exports.createInventoryController = createInventoryController;
function updateInventoryController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'updateInventoryController';
        const t = yield sequelize_1.default.transaction();
        try {
            const id = +req.params.id;
            const inventory = yield inventory_service_1.inventoryService.findById(id);
            if (!inventory)
                throw (0, helper_1.newError)(404, 'ไม่พบครุภัณฑ์');
            const code = (0, helper_1.removeWhitespace)(req.body.code);
            const existingInventory = yield inventory_service_1.inventoryService.findByCode(code);
            if (existingInventory && existingInventory.id !== id)
                throw (0, helper_1.newError)(400, `รหัสครุภัณฑ์ ${code} ซ้ำ'`);
            const track = inventory.track;
            const value = parseFloat(req.body.value.replace(/,/g, ''));
            const imageEdit = req.body.imageEdit === 'true' ? true : false;
            const file = req.body.image === 'null' ? null : req.body.image;
            const image = imageEdit ? file : inventory.image;
            const receivedDate = new Date(req.body.receivedDate);
            const payloadInventory = {
                code: code,
                oldCode: req.body.oldCode || '',
                description: req.body.description,
                unit: req.body.unit,
                value: value,
                receivedDate: receivedDate,
                fundingSource: req.body.fundingSource,
                location: req.body.location,
                remark: req.body.remark || '',
                image: image || '',
                userId: res.locals.userId,
                categoryId: +req.body.categoryId,
                statusId: +req.body.statusId,
                usageId: +req.body.usageId,
            };
            const propertyLog = {
                track: track,
                value: value,
                receivedDate: receivedDate,
                image: image || '',
                isCreated: false,
                firstname: res.locals.user.firstname,
                lastname: res.locals.user.lastname,
                categoryName: req.body.categoryName,
                statusName: req.body.statusName,
                usageName: req.body.usageName,
            };
            const payloadLog = generateLog(req.body, propertyLog);
            const [result] = yield inventory_service_1.inventoryService.update(id, payloadInventory, t);
            if (!result)
                throw (0, helper_1.newError)(400, `แก้ไขครุภัณฑ์ ${code} ไม่สำเร็จ`);
            const resultLog = yield log_service_1.logService.create(payloadLog, t);
            yield t.commit();
            const resInventory = yield inventory_service_1.inventoryService.findById(id);
            const resLog = resultLog.toJSON();
            res.json({
                message: `แก้ไขครุภัณฑ์ ${code} สำเร็จ`,
                inventory: resInventory,
                log: resLog,
            });
        }
        catch (error) {
            yield t.rollback();
            next(error);
        }
    });
}
exports.updateInventoryController = updateInventoryController;
function deleteInventoryController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'deleteInventoryController';
        try {
            const id = +req.params.id;
            const inventory = yield inventory_service_1.inventoryService.findById(id);
            if (!inventory)
                throw (0, helper_1.newError)(400, 'ไม่พบครุภัณฑ์');
            const code = inventory.code;
            const result = yield inventory_service_1.inventoryService.delete(id);
            if (!result)
                throw (0, helper_1.newError)(400, `ลบครุภัณฑ์ ${code} ไม่สำเร็จ`);
            res.json({ message: `ลบครุภัณฑ์ ${code} สำเร็จ` });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.deleteInventoryController = deleteInventoryController;
function generateLog(body, property) {
    return new log_model_1.Log({
        track: property.track,
        code: body.code,
        oldCode: body.oldCode || '',
        description: body.description,
        unit: body.unit,
        value: property.value,
        receivedDate: property.receivedDate,
        fundingSource: body.fundingSource,
        location: body.location,
        remark: body.remark || '',
        image: property.image || '',
        isCreated: property.isCreated,
        firstname: property.firstname,
        lastname: property.lastname,
        categoryName: property.categoryName,
        statusName: property.statusName,
        usageName: property.usageName,
    });
}
