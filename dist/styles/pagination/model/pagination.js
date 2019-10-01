"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.PaginationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        unique: true,
    },
    css: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 20000,
    },
    previewCss: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 20000,
    },
    scss: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20000,
    },
    previewScss: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 20000,
    },
    html: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20000,
    },
}, { timestamps: true });
//# sourceMappingURL=pagination.js.map