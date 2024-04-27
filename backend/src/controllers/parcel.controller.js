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
exports.deleteParcelHandler = exports.updatePrintParcelHandler = exports.decrementQuantityParcelHandler = exports.incrementQuantityParcelHandler = exports.updateParcelHandler = exports.createParcelHandler = exports.getParcelByIdHandler = exports.getParcelByTrackHandler = exports.getParcelByDateHandler = exports.getInitialParcelsHandler = exports.getAllParcelHandler = void 0;
const parcel_service_1 = require("../services/parcel.service");
const sequelize_1 = __importDefault(require("../utils/sequelize"));
const track_service_1 = require("../services/track.service");
const helper_1 = require("../utils/helper");
const track_1 = require("../utils/track");
const parcel_model_1 = require("../models/parcel.model");
const log_model_1 = require("../models/log.model");
const log_service_1 = require("../services/log.service");
function getAllParcelHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getAllPercelHandler';
        try {
            const resParcels = yield (0, parcel_service_1.findAllParcel)();
            res.json(resParcels);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getAllParcelHandler = getAllParcelHandler;
function getInitialParcelsHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getInitialParcelsHandler';
        try {
            const parcels = yield (0, parcel_service_1.findLimitParcel)(30);
            const resParcels = parcels.sort((a, b) => a.id - b.id);
            res.json(resParcels);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getInitialParcelsHandler = getInitialParcelsHandler;
function getParcelByDateHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getParcelByDateHandler';
        try {
            const dateStart = new Date(req.params.dateStart);
            const dateEnd = new Date(req.params.dateEnd);
            if (isNaN(dateStart.getTime()) || isNaN(dateEnd.getTime()))
                throw (0, helper_1.newError)(400, 'รูปแบบวันที่ไม่ถูกต้อง');
            dateStart.setHours(0, 0, 0, 0);
            dateEnd.setHours(23, 59, 59, 999);
            const resParcels = yield (0, parcel_service_1.findParcelByDate)(dateStart, dateEnd);
            res.json(resParcels);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getParcelByDateHandler = getParcelByDateHandler;
function getParcelByTrackHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getParcelByTrackHandler';
        try {
            const track = req.params.track;
            const resParcel = yield (0, parcel_service_1.findParcelByTrack)(track);
            res.json(resParcel === null || resParcel === void 0 ? void 0 : resParcel.toJSON());
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getParcelByTrackHandler = getParcelByTrackHandler;
function getParcelByIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getParcelByTrackHandler';
        try {
            const id = +req.params.id;
            const resParcel = yield (0, parcel_service_1.findParcelById)(id);
            res.json(resParcel === null || resParcel === void 0 ? void 0 : resParcel.toJSON());
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getParcelByIdHandler = getParcelByIdHandler;
function createParcelHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'createPercelHandler';
        const t = yield sequelize_1.default.transaction();
        try {
            const code = (0, helper_1.removeWhitespace)(req.body.code);
            const existingParcel = yield (0, parcel_service_1.findParcelByCode)(code);
            if (existingParcel)
                throw (0, helper_1.newError)(400, `รหัสพัสดุ ${code} ซ้ำ`);
            const sequence = yield (0, track_service_1.createTrack)(t);
            const track = yield (0, track_1.generateTrack)(sequence.id);
            const receivedDate = new Date(req.body.receivedDate);
            const image = req.body.image === 'null' ? null : req.body.image;
            const payloadParcel = new parcel_model_1.Parcel({
                track: track,
                code: code,
                oldCode: req.body.oldCode || '',
                receivedDate: receivedDate,
                detail: req.body.detail || '',
                quantity: +req.body.quantity || 0,
                print: false,
                remark: req.body.remark || '',
                image: image || '',
                UserId: res.locals.userId,
                CategoryId: +req.body.categoryId,
                StatusId: +req.body.statusId,
            });
            const payloadLog = new log_model_1.Log({
                track: track,
                code: code,
                oldCode: req.body.oldCode || '',
                receivedDate: receivedDate,
                detail: req.body.detail || '',
                quantity: +req.body.quantity || 0,
                modifyQuantity: +req.body.quantity,
                firstname: res.locals.user.firstname,
                lastname: res.locals.user.lastname,
                categoryName: req.body.categoryName || '',
                statusName: req.body.statusName || '',
                remark: req.body.remark || '',
                image: image || '',
                newParcel: true,
                editParcel: false,
                increaseQuantity: false,
                decreaseQuantity: false,
                print: false,
                printCount: 0,
                detailLog: 'สร้างพัสดุ',
            });
            const resultParcel = yield (0, parcel_service_1.createParcel)(payloadParcel, t);
            const resultLog = yield (0, log_service_1.createLog)(payloadLog, t);
            yield t.commit();
            const resParcel = yield (0, parcel_service_1.findParcelById)(resultParcel.id);
            const resLog = resultLog.toJSON();
            res.json({
                message: `เพิ่ม ${track} พัสดุสำเร็จ`,
                parcel: resParcel,
                log: resLog,
            });
        }
        catch (error) {
            yield t.rollback();
            next(error);
        }
    });
}
exports.createParcelHandler = createParcelHandler;
function updateParcelHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'updateParcelHandler';
        const t = yield sequelize_1.default.transaction();
        try {
            const id = +req.params.id;
            const parcel = yield (0, parcel_service_1.findParcelById)(id);
            if (!parcel)
                throw (0, helper_1.newError)(404, 'ไม่พบพัสดุ');
            const track = parcel.track;
            const code = (0, helper_1.removeWhitespace)(req.body.code);
            const existingParcel = yield (0, parcel_service_1.findParcelByCode)(code);
            if (existingParcel && existingParcel.id !== id)
                throw (0, helper_1.newError)(400, `รหัสพัสดุ ${code} ซ้ำ`);
            const imageEdit = req.body.imageEdit === 'true' ? true : false;
            const file = req.body.image === 'null' ? null : req.body.image;
            const image = imageEdit ? file : parcel.image;
            const receivedDate = new Date(req.body.receivedDate);
            const payloadParcel = {
                code: code,
                oldCode: req.body.oldCode || '',
                receivedDate: receivedDate,
                detail: req.body.detail || '',
                remark: req.body.remark || '',
                image: image || '',
                UserId: res.locals.userId,
                CategoryId: +req.body.categoryId,
                StatusId: +req.body.statusId,
            };
            const payloadLog = new log_model_1.Log({
                track: track,
                code: code,
                oldCode: req.body.oldCode || '',
                receivedDate: receivedDate,
                detail: req.body.detail || '',
                quantity: parcel.quantity,
                modifyQuantity: 0,
                firstname: res.locals.user.firstname,
                lastname: res.locals.user.lastname,
                categoryName: req.body.categoryName || '',
                statusName: req.body.statusName || '',
                remark: req.body.remark || '',
                image: image || '',
                newParcel: false,
                editParcel: true,
                increaseQuantity: false,
                decreaseQuantity: false,
                print: false,
                printCount: 0,
                detailLog: 'แก้ไขพัสดุ',
            });
            const resultParcel = yield (0, parcel_service_1.updateParcel)(id, payloadParcel, t);
            if (!resultParcel[0])
                throw (0, helper_1.newError)(400, `แก้ไขพัสดุ ${track} ไม่สำเร็จ`);
            const resultLog = yield (0, log_service_1.createLog)(payloadLog, t);
            yield t.commit();
            const resParcel = yield (0, parcel_service_1.findParcelById)(id);
            const resLog = resultLog.toJSON();
            res.json({
                message: `แก้ไขพัสดุ ${track} สำเร็จ`,
                parcel: resParcel,
                log: resLog,
            });
        }
        catch (error) {
            yield t.rollback();
            next(error);
        }
    });
}
exports.updateParcelHandler = updateParcelHandler;
function incrementQuantityParcelHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'incrementQuantityParcelHandler';
        const t = yield sequelize_1.default.transaction();
        try {
            const id = +req.params.id;
            const parcel = yield (0, parcel_service_1.findParcelById)(id);
            if (!parcel)
                throw (0, helper_1.newError)(404, 'ไม่พบพัสดุ');
            const quantity = parcel.quantity + req.body.stock;
            const payloadLog = new log_model_1.Log({
                track: parcel.track,
                code: parcel.code,
                oldCode: parcel.oldCode,
                receivedDate: parcel.receivedDate,
                detail: parcel.detail,
                quantity: quantity,
                modifyQuantity: req.body.stock,
                firstname: res.locals.user.firstname,
                lastname: res.locals.user.lastname,
                categoryName: parcel.Category.name,
                statusName: parcel.Status.name,
                remark: parcel.remark,
                image: parcel.image,
                newParcel: false,
                editParcel: false,
                increaseQuantity: true,
                decreaseQuantity: false,
                print: false,
                printCount: 0,
                detailLog: 'เพิ่มสต็อก',
            });
            const resultParcel = yield (0, parcel_service_1.updateQuantityParcel)(id, quantity, t);
            if (!resultParcel[0])
                throw (0, helper_1.newError)(400, `เพิ่มสต็อก ${parcel.track} ไม่สำเร็จ`);
            const resultLog = yield (0, log_service_1.createLog)(payloadLog, t);
            yield t.commit();
            const resLog = resultLog.toJSON();
            res.json({
                message: `เพิ่มสต็อก ${parcel.track} สำเร็จ`,
                id: id,
                quantity: quantity,
                log: resLog,
            });
        }
        catch (error) {
            yield t.rollback();
            next(error);
        }
    });
}
exports.incrementQuantityParcelHandler = incrementQuantityParcelHandler;
function decrementQuantityParcelHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'decrementQuantityParcelHandler';
        const t = yield sequelize_1.default.transaction();
        try {
            const id = +req.params.id;
            const parcel = yield (0, parcel_service_1.findParcelById)(id);
            if (!parcel)
                throw (0, helper_1.newError)(404, 'ไม่พบพัสดุ');
            if (parcel.quantity === 0)
                throw (0, helper_1.newError)(400, `ไม่สามารถตัดสต็อก ${parcel.track} ได้เนื่องจากจำนวนของพัสดุเหลือ 0`);
            const quantity = Math.max(parcel.quantity - req.body.stock, 0);
            const payloadLog = new log_model_1.Log({
                track: parcel.track,
                code: parcel.code,
                oldCode: parcel.oldCode,
                receivedDate: parcel.receivedDate,
                detail: parcel.detail,
                quantity: quantity,
                modifyQuantity: req.body.stock,
                firstname: res.locals.user.firstname,
                lastname: res.locals.user.lastname,
                categoryName: parcel.Category.name,
                statusName: parcel.Status.name,
                remark: parcel.remark,
                image: parcel.image,
                newParcel: false,
                editParcel: false,
                increaseQuantity: false,
                decreaseQuantity: true,
                print: false,
                printCount: 0,
                detailLog: 'ตัดสต็อก',
            });
            const resultParcel = yield (0, parcel_service_1.updateQuantityParcel)(id, quantity, t);
            if (!resultParcel[0])
                throw (0, helper_1.newError)(400, `ตัดสต็อก ${parcel.track} ไม่สำเร็จ`);
            const resultLog = yield (0, log_service_1.createLog)(payloadLog, t);
            yield t.commit();
            const resLog = resultLog.toJSON();
            res.json({
                message: `ตัดสต็อก ${parcel.track} สำเร็จ`,
                id: id,
                quantity: quantity,
                log: resLog,
            });
        }
        catch (error) {
            yield t.rollback();
            next(error);
        }
    });
}
exports.decrementQuantityParcelHandler = decrementQuantityParcelHandler;
function updatePrintParcelHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'updatePrintParcelHandler';
        const t = yield sequelize_1.default.transaction();
        try {
            const id = +req.params.id;
            const parcel = yield (0, parcel_service_1.findParcelById)(id);
            if (!parcel)
                throw (0, helper_1.newError)(404, 'ไม่พบพัสดุ');
            const payloadLog = new log_model_1.Log({
                track: parcel.track,
                code: parcel.code,
                oldCode: parcel.oldCode,
                receivedDate: parcel.receivedDate,
                detail: parcel.detail,
                quantity: parcel.quantity,
                modifyQuantity: 0,
                firstname: res.locals.user.firstname,
                lastname: res.locals.user.lastname,
                categoryName: parcel.Category.name,
                statusName: parcel.Status.name,
                remark: parcel.remark,
                image: parcel.image,
                newParcel: false,
                editParcel: false,
                increaseQuantity: false,
                decreaseQuantity: false,
                print: true,
                printCount: req.body.printCount,
                detailLog: req.body.detailLog || '',
            });
            if (!parcel.print) {
                const resultParcel = yield (0, parcel_service_1.updatePrintParcel)(id, t);
                if (!resultParcel[0])
                    throw (0, helper_1.newError)(400, `แก้ไขข้อมูลปริ้น ${parcel.track} ไม่สำเร็จ`);
            }
            const resultLog = yield (0, log_service_1.createLog)(payloadLog, t);
            yield t.commit();
            const resLog = resultLog.toJSON();
            res.json({
                message: `ปริ้น ${parcel.track} สำเร็จ`,
                id: id,
                log: resLog,
            });
        }
        catch (error) {
            yield t.rollback();
            next(error);
        }
    });
}
exports.updatePrintParcelHandler = updatePrintParcelHandler;
function deleteParcelHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'deleteParcelHandler';
        try {
            const id = +req.params.id;
            const parcel = yield (0, parcel_service_1.findParcelById)(id);
            if (!parcel)
                throw (0, helper_1.newError)(400, 'ไม่พบพัสดุ');
            const track = parcel.track;
            const result = yield (0, parcel_service_1.deleteParcel)(id);
            if (!result)
                throw (0, helper_1.newError)(400, `ลบ ${track} ไม่สำเร็จ`);
            res.json({ message: `ลบ ${track} สำเร็จ` });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.deleteParcelHandler = deleteParcelHandler;
