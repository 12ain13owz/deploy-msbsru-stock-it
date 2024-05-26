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
exports.createInventoryCheckController = exports.findInventoryCheckByIdController = exports.findInventoryCheckByYearController = exports.findAllInventoryCheckController = void 0;
const inventory_check_service_1 = require("../services/inventory-check.service");
const inventory_check_model_1 = require("../models/inventory-check.model");
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
        try {
            const inventoryId = req.body.inventoryId;
            const currentYear = new Date().getFullYear();
            const inventoryCheck = yield inventory_check_service_1.inventoryCheckService.findByInventoryId(inventoryId, currentYear);
            if (inventoryCheck)
                return res.json({
                    message: 'ตรวจสอบครุภัณฑ์ สำเร็จ',
                    inventoryCheck: inventoryCheck.toJSON(),
                });
            const payload = new inventory_check_model_1.InventoryCheck({ inventoryId, year: currentYear });
            const result = yield inventory_check_service_1.inventoryCheckService.create(payload);
            const resInvenroryCheck = yield inventory_check_service_1.inventoryCheckService.findById(result.id);
            res.json({
                message: 'ตรวจสอบครุภัณฑ์ สำเร็จ',
                inventoryCheck: resInvenroryCheck,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.createInventoryCheckController = createInventoryCheckController;
