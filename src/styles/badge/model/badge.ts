import * as mongoose from 'mongoose';

export const BadgeSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true },
);
