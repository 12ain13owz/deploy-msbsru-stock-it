"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogByIdSchema = exports.getLogByTrackSchema = exports.getLogByDateSchema = void 0;
const zod_1 = require("zod");
const id = 'ไม่พบข้อมูลรหัสพัสดุ';
const dateStart = 'ไม่พบวันที่เริ่มต้นในการค้นหา';
const dateEnd = 'ไม่พบวันที่สิ้นสุดในการค้นหา';
const track = 'ไม่พบเลข Track';
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
exports.getLogByIdSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id }).min(1, {
            message: id,
        }),
    }),
});
