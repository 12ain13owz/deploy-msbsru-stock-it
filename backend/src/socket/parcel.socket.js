"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (io, socket) => {
    socket.on('parcel:create', (parcel) => {
        socket.broadcast.emit('parcel:create', parcel);
    });
    socket.on('parcel:update', (id, parcel) => {
        socket.broadcast.emit('parcel:update', id, parcel);
    });
    socket.on('parcel:modifyQuantity', (id, quantity) => {
        socket.broadcast.emit('parcel:modifyQuantity', id, quantity);
    });
    socket.on('parcel:print', (id, print) => {
        socket.broadcast.emit('parcel:print', id, print);
    });
};
