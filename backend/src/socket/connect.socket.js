"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
exports.default = (io, socket) => {
    logger_1.default.info('User connected');
    socket.on('disconnect', () => console.warn('user disconnected'));
    const count = io.engine.clientsCount;
    logger_1.default.info('User count: ' + count);
};
