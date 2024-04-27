"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteParcelSchema = exports.updatePrintParcelSchema = exports.updateQuantityParcelSchema = exports.updateParcelSchema = exports.createParcelSchema = exports.getParcelByIdSchema = exports.getParcelByTrackSchema = exports.getParcelByDateSchema = void 0;
const zod_1 = require("zod");
const id = 'ไม่พบข้อมูลรหัสพัสดุ';
const code = 'ไม่พบข้อมูลรหัสพัสดุ';
const receivedDate = 'ไม่พบวันที่ได้รับพัสดุ';
const detail = 'ไม่พบรายละเอียดพัสดุ';
const quantity = 'ไม่พบจำนวนของพัสดุ';
const reduce = 'ไม่พบจำนวนของพัสดุที่ต้องการตัด stock ';
const categoryId = 'ไม่พบประเภทพัสดุ';
const categoryName = 'ไม่พบชื่อของประเภทพัสดุ';
const statusId = 'ไม่พบสถานะพัสดุ';
const statusName = 'ไม่พบชื่อของสถานะพัสดุ';
const dateStart = 'ไม่พบวันที่เริ่มต้นในการค้นหา';
const dateEnd = 'ไม่พบวันที่สิ้นสุดในการค้นหา';
const track = 'ไม่พบเลข Track';
const imageEdit = 'ไม่พบข้อมูล การยืนยันแก้ไขรูปภาพ';
const printCount = 'ไม่พบจำนวนที่ต้องการปริ้น';
const regexId = new RegExp(/^[0-9]\d*$/);
exports.getParcelByDateSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        dateStart: (0, zod_1.string)({ required_error: dateStart }).min(1, {
            message: dateStart,
        }),
        dateEnd: (0, zod_1.string)({ required_error: dateEnd }).min(1, {
            message: dateEnd,
        }),
    }),
});
exports.getParcelByTrackSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        track: (0, zod_1.string)({ required_error: track }).min(1, {
            message: track,
        }),
    }),
});
exports.getParcelByIdSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id }).min(1, {
            message: id,
        }),
    }),
});
exports.createParcelSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        code: (0, zod_1.string)({ required_error: code }).min(1, {
            message: code,
        }),
        oldCode: (0, zod_1.string)().optional().nullable(),
        receivedDate: (0, zod_1.string)({ required_error: receivedDate }),
        detail: (0, zod_1.string)({ required_error: detail }).min(1, {
            message: detail,
        }),
        quantity: (0, zod_1.string)({ required_error: quantity }).min(1, {
            message: quantity,
        }),
        remark: (0, zod_1.string)().optional().nullable(),
        image: (0, zod_1.string)().optional().nullable(),
        categoryId: (0, zod_1.string)({ required_error: categoryId }).min(1, {
            message: categoryId,
        }),
        categoryName: (0, zod_1.string)({ required_error: categoryName }).min(1, {
            message: categoryName,
        }),
        statusId: (0, zod_1.string)({ required_error: statusId }).min(1, {
            message: statusId,
        }),
        statusName: (0, zod_1.string)({ required_error: statusName }).min(1, {
            message: statusName,
        }),
    }),
});
exports.updateParcelSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id })
            .min(1, { message: id })
            .regex(regexId, { message: id }),
    }),
    body: (0, zod_1.object)({
        code: (0, zod_1.string)({ required_error: code }).min(1, {
            message: code,
        }),
        oldCode: (0, zod_1.string)().optional().nullable(),
        receivedDate: (0, zod_1.string)({ required_error: receivedDate }),
        detail: (0, zod_1.string)({ required_error: detail }).min(1, {
            message: detail,
        }),
        remark: (0, zod_1.string)().optional().nullable(),
        image: (0, zod_1.string)().optional().nullable(),
        imageEdit: (0, zod_1.string)({ required_error: imageEdit }).min(1, {
            message: imageEdit,
        }),
        categoryId: (0, zod_1.string)({ required_error: categoryId }).min(1, {
            message: categoryId,
        }),
        categoryName: (0, zod_1.string)({ required_error: categoryName }).min(1, {
            message: categoryName,
        }),
        statusId: (0, zod_1.string)({ required_error: statusId }).min(1, {
            message: statusId,
        }),
        statusName: (0, zod_1.string)({ required_error: statusName }).min(1, {
            message: statusName,
        }),
    }),
});
exports.updateQuantityParcelSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id })
            .min(1, { message: id })
            .regex(regexId, { message: id }),
    }),
    body: (0, zod_1.object)({
        stock: (0, zod_1.number)({ required_error: reduce }).min(1, {
            message: reduce,
        }),
    }),
});
exports.updatePrintParcelSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id })
            .min(1, { message: id })
            .regex(regexId, { message: id }),
    }),
    body: (0, zod_1.object)({
        printCount: (0, zod_1.number)({ required_error: printCount }).min(1, {
            message: printCount,
        }),
        detailLog: (0, zod_1.string)().optional().nullable(),
    }),
});
exports.deleteParcelSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id })
            .min(1, { message: id })
            .regex(regexId, { message: id }),
    }),
});
