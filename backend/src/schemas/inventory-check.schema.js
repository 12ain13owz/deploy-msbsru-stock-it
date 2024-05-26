"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryCheckSehema = void 0;
const zod_1 = require("zod");
const regexNumber = new RegExp(/^[0-9]\d*$/);
const id = 'ไม่พบข้อมูลที่ต้องการตรวจสอบ';
const year = 'ไม่พบปีที่ต้องการค้นหา';
const inventoryId = 'ไม่พบครุภัณฑ์';
exports.inventoryCheckSehema = {
    findByYear: (0, zod_1.object)({
        params: (0, zod_1.object)({
            year: (0, zod_1.string)({ required_error: year })
                .min(1, { message: year })
                .regex(regexNumber, { message: year }),
        }),
    }),
    findById: (0, zod_1.object)({
        params: (0, zod_1.object)({
            id: (0, zod_1.string)({ required_error: id })
                .min(1, { message: id })
                .regex(regexNumber, { message: year }),
        }),
    }),
    create: (0, zod_1.object)({
        body: (0, zod_1.object)({
            inventoryId: (0, zod_1.number)({ required_error: inventoryId }).min(1, {
                message: inventoryId,
            }),
        }),
    }),
};
