import * as mongoose from 'mongoose';

export const StyleGuideConfigSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    primaryColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    secondaryColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    successColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    infoColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    warningColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    dangerColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    darkColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    lightColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    primaryGradientColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    secondaryGradientColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    successGradientColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    infoGradientColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    warningGradientColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    dangerGradientColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    darkGradientColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    lightGradientColor: {
      type: String,
      // required: true,
      minlength: 1,
      maxlength: 255,
    },
    active: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true },
);
