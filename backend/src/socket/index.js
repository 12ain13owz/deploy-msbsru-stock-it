"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const connect_socket_1 = __importDefault(require("./connect.socket"));
const inventory_socket_1 = __importDefault(require("./inventory.socket"));
const log_socket_1 = __importDefault(require("./log.socket"));
exports.default = (io) => {
    io.on('connection', (socket) => {
        logger_1.default.info(`Socket connected: ${socket.id}`);
        (0, connect_socket_1.default)(io, socket);
        (0, inventory_socket_1.default)(io, socket);
        (0, log_socket_1.default)(io, socket);
    });
};
