"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("../../controllers/profile.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const profile_schema_1 = require("../../schemas/profile.schema");
const router = (0, express_1.Router)();
router.get('/', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive], profile_controller_1.getProfileHandeler);
router.patch('/', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive, (0, validate_middleware_1.validate)(profile_schema_1.updateProfileSchema)], profile_controller_1.updateProfileHandler);
router.post('/password', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive, (0, validate_middleware_1.validate)(profile_schema_1.updatePasswordSchema)], profile_controller_1.updatePasswordHandler);
exports.default = router;