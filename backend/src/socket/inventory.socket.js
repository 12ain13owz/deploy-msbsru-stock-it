"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (io, socket) => {
    socket.on('inventory:create', (inventory) => {
        socket.broadcast.emit('inventory:create', inventory);
    });
    socket.on('inventory:update', (id, inventory) => {
        socket.broadcast.emit('inventory:update', id, inventory);
    });
};
