"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrack = void 0;
const track_model_1 = __importDefault(require("../models/track.model"));
function createTrack(t) {
    return track_model_1.default.create({}, { transaction: t });
}
exports.createTrack = createTrack;
