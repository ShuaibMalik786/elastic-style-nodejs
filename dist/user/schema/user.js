"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var RoleSchema = require('../schema/role').schema;
exports.UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    password: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 1024,
    },
    roleId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role',
            required: true,
        },
    ],
}, { timestamps: true });
//# sourceMappingURL=user.js.map