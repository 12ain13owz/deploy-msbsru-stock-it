"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogByIdSchema = exports.getLogByCodeSchema = exports.getLogByTrackSchema = exports.getLogByDateSchema = void 0;
const zod_1 = require("zod");
const id = 'ไม่พบรหัสพัสดุ';
const dateStart = 'ไม่พบวันที่เริ่มต้นในการค้นหา';
const dateEnd = 'ไม่พบวันที่สิ้นสุดในการค้นหา';
const track = 'ไม่พบเลข Track';
const code = 'ไม่พบรหัสพัสดุ';
exports.getLogByDateSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        dateStart: (0, zod_1.string)({ required_error: dateStart }).min(1, {
            message: dateStart,
        }),
        dateEnd: (0, zod_1.string)({ required_error: dateEnd }).min(1, {
            message: dateEnd,
        }),
    }),
});
exports.getLogByTrackSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        track: (0, zod_1.string)({ required_error: track }).min(1, {
            message: track,
        }),
    }),
});
exports.getLogByCodeSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        code: (0, zod_1.string)({ required_error: code }).min(1, {
            message: code,
        }),
    }),
});
exports.getLogByIdSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id }).min(1, {
            message: id,
        }),
    }),
});
