"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const parcel_controller_1 = require("../../controllers/parcel.controller");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const parcel_schema_1 = require("../../schemas/parcel.schema");
const file_middlerware_1 = require("../../middlewares/file.middlerware");
const router = (0, express_1.Router)();
router.get('/', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive], parcel_controller_1.getAllParcelHandler);
router.get('/init', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive], parcel_controller_1.getInitialParcelsHandler);
router.get('/date/:dateStart/:dateEnd', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive, (0, validate_middleware_1.validate)(parcel_schema_1.getParcelByDateSchema)], parcel_controller_1.getParcelByDateHandler);
router.get('/track/:track', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive, (0, validate_middleware_1.validate)(parcel_schema_1.getParcelByTrackSchema)], parcel_controller_1.getParcelByTrackHandler);
router.get('/id/:id', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive, (0, validate_middleware_1.validate)(parcel_schema_1.getParcelByIdSchema)], parcel_controller_1.getParcelByIdHandler);
router.post('/', [
    auth_middleware_1.verifyToken,
    auth_middleware_1.isUserActive,
    file_middlerware_1.upload,
    file_middlerware_1.reduceQualityImage,
    (0, validate_middleware_1.validate)(parcel_schema_1.createParcelSchema),
], parcel_controller_1.createParcelHandler);
router.put('/:id', [
    auth_middleware_1.verifyToken,
    auth_middleware_1.isUserActive,
    file_middlerware_1.upload,
    file_middlerware_1.reduceQualityImage,
    (0, validate_middleware_1.validate)(parcel_schema_1.updateParcelSchema),
], parcel_controller_1.updateParcelHandler);
router.patch('/increment/:id', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive, (0, validate_middleware_1.validate)(parcel_schema_1.updateQuantityParcelSchema)], parcel_controller_1.incrementQuantityParcelHandler);
router.patch('/decrement/:id', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive, (0, validate_middleware_1.validate)(parcel_schema_1.updateQuantityParcelSchema)], parcel_controller_1.decrementQuantityParcelHandler);
router.patch('/print/:id', [auth_middleware_1.verifyToken, auth_middleware_1.isUserActive, (0, validate_middleware_1.validate)(parcel_schema_1.updatePrintParcelSchema)], parcel_controller_1.updatePrintParcelHandler);
// router.delete(
//   '/:id',
//   [validate(deleteParcelSchema), verifyToken, isUserActive],
//   deleteParcelHandler
// );
exports.default = router;
