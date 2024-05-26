"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const profile_routes_1 = __importDefault(require("./profile.routes"));
const category_routes_1 = __importDefault(require("./category.routes"));
const status_routes_1 = __importDefault(require("./status.routes"));
const usage_routes_1 = __importDefault(require("./usage.routes"));
const inventory_routes_1 = __importDefault(require("./inventory.routes"));
const inventory_check_routes_1 = __importDefault(require("./inventory-check.routes"));
const log_routes_1 = __importDefault(require("./log.routes"));
const router = (0, express_1.Router)();
router.use('/api/v1/auth', auth_routes_1.default);
router.use('/api/v1/profile', profile_routes_1.default);
router.use('/api/v1/user', user_routes_1.default);
router.use('/api/v1/category', category_routes_1.default);
router.use('/api/v1/status', status_routes_1.default);
router.use('/api/v1/usage', usage_routes_1.default);
router.use('/api/v1/inventory', inventory_routes_1.default);
router.use('/api/v1/inventory-check', inventory_check_routes_1.default);
router.use('/api/v1/log', log_routes_1.default);
exports.default = router;
