"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
const category_model_1 = __importDefault(require("./category.model"));
const status_model_1 = __importDefault(require("./status.model"));
const parcel_model_1 = __importDefault(require("./parcel.model"));
require("./track.model");
require("./log.model");
user_model_1.default.hasMany(parcel_model_1.default);
category_model_1.default.hasMany(parcel_model_1.default);
status_model_1.default.hasMany(parcel_model_1.default);
parcel_model_1.default.belongsTo(user_model_1.default);
parcel_model_1.default.belongsTo(category_model_1.default);
parcel_model_1.default.belongsTo(status_model_1.default);
