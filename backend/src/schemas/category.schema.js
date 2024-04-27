"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategorySchema = exports.updateCategorySchema = exports.creatCategorySchema = void 0;
const zod_1 = require("zod");
const id = 'ไม่พบข้อมูลรหัสประเภทของอุปกรณ์';
const name = 'ไม่พบข้อมูลชื่อประเภทของอุปกรณ์';
const active = 'ไม่พบข้อมูลสถานะการใช้งาน';
const regexId = new RegExp(/^[0-9]\d*$/);
exports.creatCategorySchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({ required_error: name }).min(1, {
            message: name,
        }),
        active: (0, zod_1.boolean)({ required_error: active }),
        remark: (0, zod_1.string)().optional().nullable(),
    }),
});
exports.updateCategorySchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id })
            .min(1, { message: id })
            .regex(regexId, { message: id }),
    }),
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({ required_error: id }).min(1, {
            message: id,
        }),
        active: (0, zod_1.boolean)({ required_error: active }),
        remark: (0, zod_1.string)().optional().nullable(),
    }),
});
exports.deleteCategorySchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id })
            .min(1, { message: id })
            .regex(regexId, { message: id }),
    }),
});
