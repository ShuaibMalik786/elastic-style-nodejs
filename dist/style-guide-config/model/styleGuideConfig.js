"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.StyleGuideConfigSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    primaryColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    secondaryColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    successColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    infoColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    warningColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    dangerColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    darkColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    lightColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    primaryGradientColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    secondaryGradientColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    successGradientColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    infoGradientColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    warningGradientColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    dangerGradientColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    darkGradientColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    lightGradientColor: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    active: {
        type: Boolean,
        default: false,
        required: true,
    },
}, { timestamps: true });
//# sourceMappingURL=styleGuideConfig.js.map