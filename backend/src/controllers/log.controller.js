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
exports.getLogByIdHandler = exports.getLogByTrackHandler = exports.getLogByDateHandler = exports.getInitialLogHandler = exports.getAllLogHandler = void 0;
const log_service_1 = require("../services/log.service");
const helper_1 = require("../utils/helper");
function getAllLogHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getAllLogHandler';
        try {
            const resLogs = yield (0, log_service_1.findAllLog)();
            res.json(resLogs);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getAllLogHandler = getAllLogHandler;
function getInitialLogHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getInitialLogHandler';
        try {
            const logs = yield (0, log_service_1.findLimitLog)(50);
            const resLogs = logs.sort((a, b) => a.id - b.id);
            res.json(resLogs);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getInitialLogHandler = getInitialLogHandler;
function getLogByDateHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getLogByDateHandler';
        try {
            const dateStart = new Date(req.params.dateStart);
            const dateEnd = new Date(req.params.dateEnd);
            if (isNaN(dateStart.getTime()) || isNaN(dateEnd.getTime()))
                throw (0, helper_1.newError)(400, 'รูปแบบวันที่ไม่ถูกต้อง');
            dateStart.setHours(0, 0, 0, 0);
            dateEnd.setHours(23, 59, 59, 999);
            const resLogs = yield (0, log_service_1.findLogByDate)(dateStart, dateEnd);
            res.json(resLogs);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getLogByDateHandler = getLogByDateHandler;
function getLogByTrackHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getLogByTrackHandler';
        try {
            const track = req.params.track;
            const resLogs = yield (0, log_service_1.findLogByTrack)(track);
            res.json(resLogs);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getLogByTrackHandler = getLogByTrackHandler;
function getLogByIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.locals.func = 'getLogByIdHandler';
        try {
            const id = +req.params.id;
            const resLog = yield (0, log_service_1.findLogById)(id);
            res.json(resLog);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getLogByIdHandler = getLogByIdHandler;
