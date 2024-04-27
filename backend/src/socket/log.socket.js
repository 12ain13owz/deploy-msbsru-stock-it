"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (io, socket) => {
    socket.on('log:create', (log) => {
        socket.broadcast.emit('log:create', log);
    });
};
