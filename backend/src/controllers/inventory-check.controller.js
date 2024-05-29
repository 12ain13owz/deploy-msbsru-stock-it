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
exports.createInventoryCheckController = exports.findInventoryCheckByIdController = exports.findInventoryCheckByYearController = exports.findAllInventoryCheckController = void 0;
const inventory_check_service_1 = require("../services/inventory-check.service");
const inventory_check_model_1 = require("../models/inventory-check.model");
const inventory_service_1 = require("../services/inventory.service");
const helper_1 = require("../utils/helper");
const log_model_1 = require("../models/log.model");
const sequelize_1 = __importDefault(require("../utils/sequelize"));
const log_service_1 = require("../services/log.service");
function findAllInventoryCheckController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'findAllInventoryCheckController';
        try {
            const resInventoriesCheck = yield inventory_check_service_1.inventoryCheckService.findAll();
            res.json(resInventoriesCheck);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findAllInventoryCheckController = findAllInventoryCheckController;
function findInventoryCheckByYearController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'findInventoryCheckByYearController';
        try {
            const year = +req.params.year;
            const resInventoryCheck = yield inventory_check_service_1.inventoryCheckService.findByYear(year);
            res.json(resInventoryCheck);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findInventoryCheckByYearController = findInventoryCheckByYearController;
function findInventoryCheckByIdController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'findInventoryCheckByIdController';
        try {
            const id = +req.params.id;
            const resInventoryCheck = yield inventory_check_service_1.inventoryCheckService.findById(id);
            res.json(resInventoryCheck === null || resInventoryCheck === void 0 ? void 0 : resInventoryCheck.toJSON());
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findInventoryCheckByIdController = findInventoryCheckByIdController;
function createInventoryCheckController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'createInventoryCheckController';
        const t = yield sequelize_1.default.transaction();
        try {
            const { inventoryId, inventoryStatusId, inventoryStatusName } = req.body;
            const currentYear = new Date().getFullYear();
            const inventoryCheck = yield inventory_check_service_1.inventoryCheckService.findByInventoryId(inventoryId, currentYear);
            const inventory = yield inventory_service_1.inventoryService.findByIdDetails(inventoryId);
            if (!inventory)
                throw (0, helper_1.newError)(404, 'ไม่พบครุภัณฑ์');
            if (inventory.statusId !== inventoryStatusId) {
                const payloadInventory = {
                    statusId: inventoryStatusId,
                };
                const payloadLog = new log_model_1.Log({
                    track: inventory.track,
                    code: inventory.code,
                    oldCode: inventory.oldCode,
                    description: inventory.description,
                    unit: inventory.unit,
                    value: inventory.value,
                    receivedDate: inventory.receivedDate,
                    remark: inventory.remark,
                    image: inventory.image,
                    isCreated: false,
                    firstname: res.locals.user.firstname,
                    lastname: res.locals.user.lastname,
                    categoryName: inventory.Category.name,
                    statusName: inventoryStatusName,
                    fundName: inventory.Fund.name,
                    locationName: inventory.Location.name,
                });
                const [result] = yield inventory_service_1.inventoryService.update(inventoryId, payloadInventory, t);
                if (!result)
                    throw (0, helper_1.newError)(400, `แก้ไขครุภัณฑ์ ${inventory.code} ไม่สำเร็จ`);
                yield log_service_1.logService.create(payloadLog, t);
            }
            if (inventoryCheck) {
                yield t.commit();
                return res.json({
                    message: 'ตรวจสอบครุภัณฑ์ สำเร็จ',
                    item: inventoryCheck.toJSON(),
                });
            }
            const payload = new inventory_check_model_1.InventoryCheck({ inventoryId, year: currentYear });
            const result = yield inventory_check_service_1.inventoryCheckService.create(payload, t);
            yield t.commit();
            const resInvenroryCheck = yield inventory_check_service_1.inventoryCheckService.findById(result.id);
            res.json({
                message: 'ตรวจสอบครุภัณฑ์ สำเร็จ',
                item: resInvenroryCheck,
            });
        }
        catch (error) {
            yield t.rollback();
            next(error);
        }
    });
}
exports.createInventoryCheckController = createInventoryCheckController;
