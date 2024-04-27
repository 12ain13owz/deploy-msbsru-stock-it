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
exports.deleteCategoryHandler = exports.updateCategoryHandler = exports.createCategoryHandler = exports.getAllCategoryHandler = void 0;
const lodash_1 = require("lodash");
const helper_1 = require("../utils/helper");
const category_model_1 = require("../models/category.model");
const category_service_1 = require("../services/category.service");
function getAllCategoryHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getAllCategoryHandler';
        try {
            const resCategories = yield (0, category_service_1.findAllCategory)();
            res.json(resCategories);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getAllCategoryHandler = getAllCategoryHandler;
function createCategoryHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'createCategoryHandler';
        try {
            const name = (0, helper_1.removeWhitespace)(req.body.name);
            const category = yield (0, category_service_1.findCategoryByName)(name);
            if (category)
                throw (0, helper_1.newError)(400, `ชื่อประเภทพัสดุ ${name} ซ้ำ'`);
            const payload = new category_model_1.Category({
                name: name,
                active: req.body.active,
                remark: req.body.remark || '',
            });
            const result = yield (0, category_service_1.createCategory)(payload);
            const newCagegory = (0, lodash_1.omit)(result.toJSON(), helper_1.privateFields);
            res.json({
                message: `เพิ่มประเภทพัสดุ ${name} สำเร็จ`,
                category: newCagegory,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.createCategoryHandler = createCategoryHandler;
function updateCategoryHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'updateCategoryHandler';
        try {
            const id = +req.params.id;
            const name = (0, helper_1.removeWhitespace)(req.body.name);
            const existingCategory = yield (0, category_service_1.findCategoryByName)(name);
            if (existingCategory && existingCategory.id !== id)
                throw (0, helper_1.newError)(400, `ชื่อประเภท ${name} พัสดุซ้ำ`);
            const payload = {
                name: name,
                active: req.body.active,
                remark: req.body.remark || '',
            };
            const result = yield (0, category_service_1.updateCategory)(id, payload);
            if (!result[0])
                throw (0, helper_1.newError)(400, `แก้ไขประเภทพัสดุ ${name} ไม่สำเร็จ`);
            res.json({
                message: `แก้ไขประเภทพัสดุ ${name} สำเร็จ`,
                category: payload,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.updateCategoryHandler = updateCategoryHandler;
function deleteCategoryHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'deleteCategoryHandler';
        try {
            const id = +req.params.id;
            const category = yield (0, category_service_1.findCategoryById)(id);
            if (!category)
                throw (0, helper_1.newError)(400, 'ไม่พบประเภทพัสดุ');
            const name = category.name;
            const result = yield (0, category_service_1.deleteCategory)(id);
            if (!result)
                throw (0, helper_1.newError)(400, `ลบประเภทพัสดุ ${name} ไม่สำเร็จ`);
            res.json({ message: `ลบประเภทพัสดุ ${name} สำเร็จ` });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.deleteCategoryHandler = deleteCategoryHandler;
