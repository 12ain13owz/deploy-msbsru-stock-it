"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventorySchema = void 0;
const zod_1 = require("zod");
const regexNumber = new RegExp(/^[0-9]\d*$/);
const id = 'ไม่พบครุภัณฑ์';
const code = 'ไม่พบรหัสครุภัณฑ์';
const description = 'ไม่พบรายการครุภัณฑ์';
const unit = 'ไม่พบหน่วยนับ';
const value = 'ไม่พบมูลค่าครุภัณฑ์';
const receivedDate = 'ไม่พบวันที่ได้รับมา';
const fundingSource = 'ไม่พบแหล่งเงิน';
const location = 'ไม่พบสถานที่ตั้ง/จัดเก็บ';
const categoryId = 'ไม่พบคุณสมบัติ (ยี่ห้อ/รุ่น)';
const categoryName = 'ไม่พบคุณสมบัติ (ยี่ห้อ/รุ่น)';
const statusId = 'ไม่พบสถานะครุภัณฑ์';
const statusName = 'ไม่พบสถานะครุภัณฑ์';
const usageId = 'ไม่พบการใช้งานครุภัณฑ์';
const usageName = 'ไม่พบการใช้งานครุภัณฑ์';
const dateStart = 'ไม่พบวันที่เริ่มต้นในการค้นหา';
const dateEnd = 'ไม่พบวันที่สิ้นสุดในการค้นหา';
const track = 'ไม่พบเลข Track';
const imageEdit = 'ไม่พบข้อมูล การยืนยันแก้ไขรูปภาพ';
exports.inventorySchema = {
    findByDate: (0, zod_1.object)({
        params: (0, zod_1.object)({
            dateStart: (0, zod_1.string)({ required_error: dateStart }).min(1, {
                message: dateStart,
            }),
            dateEnd: (0, zod_1.string)({ required_error: dateEnd }).min(1, {
                message: dateEnd,
            }),
        }),
    }),
    findByTrack: (0, zod_1.object)({
        params: (0, zod_1.object)({
            track: (0, zod_1.string)({ required_error: track }).min(1, { message: track }),
        }),
    }),
    findById: (0, zod_1.object)({
        params: (0, zod_1.object)({
            id: (0, zod_1.string)({ required_error: id })
                .min(1, { message: id })
                .regex(regexNumber, { message: id }),
        }),
    }),
    findByCode: (0, zod_1.object)({
        params: (0, zod_1.object)({
            code: (0, zod_1.string)({ required_error: code }).min(1, { message: code }),
        }),
    }),
    create: (0, zod_1.object)({
        body: (0, zod_1.object)({
            code: (0, zod_1.string)({ required_error: code }).min(1, {
                message: code,
            }),
            oldCode: (0, zod_1.string)().optional().nullable(),
            description: (0, zod_1.string)({ required_error: description }).min(1, {
                message: description,
            }),
            unit: (0, zod_1.string)({ required_error: unit }).min(1, { message: unit }),
            value: (0, zod_1.string)({ required_error: value }),
            receivedDate: (0, zod_1.string)({ required_error: receivedDate }),
            fundingSource: (0, zod_1.string)({ required_error: fundingSource }).min(1, {
                message: fundingSource,
            }),
            location: (0, zod_1.string)({ required_error: location }).min(1, {
                message: location,
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
            usageId: (0, zod_1.string)({ required_error: usageId }).min(1, {
                message: usageId,
            }),
            usageName: (0, zod_1.string)({ required_error: usageName }).min(1, {
                message: usageName,
            }),
        }),
    }),
    update: (0, zod_1.object)({
        params: (0, zod_1.object)({
            id: (0, zod_1.string)({ required_error: id })
                .min(1, { message: id })
                .regex(regexNumber, { message: id }),
        }),
        body: (0, zod_1.object)({
            code: (0, zod_1.string)({ required_error: code }).min(1, {
                message: code,
            }),
            oldCode: (0, zod_1.string)().optional().nullable(),
            description: (0, zod_1.string)({ required_error: description }).min(1, {
                message: description,
            }),
            unit: (0, zod_1.string)({ required_error: unit }).min(1, { message: unit }),
            value: (0, zod_1.string)({ required_error: value }),
            receivedDate: (0, zod_1.string)({ required_error: receivedDate }),
            fundingSource: (0, zod_1.string)({ required_error: fundingSource }).min(1, {
                message: fundingSource,
            }),
            location: (0, zod_1.string)({ required_error: location }).min(1, {
                message: location,
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
            usageId: (0, zod_1.string)({ required_error: usageId }).min(1, {
                message: usageId,
            }),
            usageName: (0, zod_1.string)({ required_error: usageName }).min(1, {
                message: usageName,
            }),
        }),
    }),
    delete: (0, zod_1.object)({
        params: (0, zod_1.object)({
            id: (0, zod_1.string)({ required_error: id })
                .min(1, { message: id })
                .regex(regexNumber, { message: id }),
        }),
    }),
};
