"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.updateUserPasswordSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const id = 'ไม่พบข้อมูลผู้ใช้ในระบบ';
const email = 'ไม่พบข้อมูล E-mail';
const emailInvalid = 'รูปแบบ E-mail ไม่ถูกต้อง';
const firstname = 'ไม่พบข้อมูลชื่อผู้ใช้งาน';
const lastname = 'ไม่พบข้อมูลนามสกุลผู้ใช้งาน';
const role = 'ไม่พบข้อมูลสิทธิผู้ใช้งาน';
const roleAccess = 'กรุณาเลือกสิทธิ admin หรือ user';
const active = 'ไม่พบข้อมูลสถานะการใช้งาน';
const password = 'ไม่พบข้อมูลรหัสผ่าน';
const oldPassword = 'ไม่พบข้อมูลรหัสผ่านเก่า';
const newPassword = 'ไม่พบข้อมูลรหัสผ่านใหม่';
const confirmPassword = 'ไม่พบข้อมูลยืนยันรหัสผ่าน';
const regexInValid = 'รูปแบบรหัสผ่านไม่ถูกต้อง! ต้องมีตัวเล็ก, ตัวใหญ่, ตัวเลข, อักษรพิเศษ และไม่ต่ำกว่า 8 ตัวอักษร';
const comparePassword = 'รหัสผ่านไม่ตรงกัน';
const passwordResetCode = 'ไม่พบรหัสยืนยัน';
const regexPassword = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/);
const regexId = new RegExp(/^[0-9]\d*$/);
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: email }).email({ message: emailInvalid }),
        password: (0, zod_1.string)({ required_error: password }).regex(regexPassword, {
            message: regexInValid,
        }),
        confirmPassword: (0, zod_1.string)({ required_error: confirmPassword }),
        firstname: (0, zod_1.string)({ required_error: firstname }).min(1, {
            message: firstname,
        }),
        lastname: (0, zod_1.string)({ required_error: lastname }).min(1, {
            message: lastname,
        }),
        role: (0, zod_1.string)({ required_error: role })
            .min(1, { message: role })
            .refine((value) => value === 'admin' || value === 'user', {
            message: roleAccess,
        }),
        active: (0, zod_1.boolean)({ required_error: active }),
        remark: (0, zod_1.string)().optional().nullable(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: comparePassword,
        path: ['confirmPassword'],
    }),
});
exports.updateUserSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id })
            .min(1, { message: id })
            .regex(regexId, { message: id }),
    }),
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: email }).email({ message: emailInvalid }),
        firstname: (0, zod_1.string)({ required_error: firstname }).min(1, {
            message: firstname,
        }),
        lastname: (0, zod_1.string)({ required_error: lastname }).min(1, {
            message: lastname,
        }),
        role: (0, zod_1.string)({ required_error: role })
            .min(1, { message: role })
            .refine((value) => value === 'admin' || value === 'user', {
            message: roleAccess,
        }),
        active: (0, zod_1.boolean)({ required_error: active }),
        remark: (0, zod_1.string)().optional().nullable(),
    }),
});
exports.updateUserPasswordSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id })
            .min(1, { message: id })
            .regex(regexId, { message: id }),
    }),
    body: (0, zod_1.object)({
        oldPassword: (0, zod_1.string)({ required_error: oldPassword }),
        newPassword: (0, zod_1.string)({ required_error: newPassword }).regex(regexPassword, {
            message: regexInValid,
        }),
        confirmPassword: (0, zod_1.string)({ required_error: confirmPassword }),
    }).refine((data) => data.newPassword === data.confirmPassword, {
        message: comparePassword,
        path: ['confirmPassword'],
    }),
});
exports.forgotPasswordSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: email }).email(emailInvalid),
    }),
});
exports.resetPasswordSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({ required_error: id })
            .min(1, { message: id })
            .regex(regexId, { message: id }),
    }),
    body: (0, zod_1.object)({
        passwordResetCode: (0, zod_1.string)({ required_error: passwordResetCode }).min(1, {
            message: passwordResetCode,
        }),
        newPassword: (0, zod_1.string)({ required_error: newPassword }).regex(regexPassword, {
            message: regexInValid,
        }),
        confirmPassword: (0, zod_1.string)({ required_error: confirmPassword }),
    }).refine((data) => data.newPassword === data.confirmPassword, {
        message: comparePassword,
        path: ['confirmPassword'],
    }),
});
