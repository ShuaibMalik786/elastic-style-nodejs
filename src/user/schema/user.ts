import * as mongoose from 'mongoose';
const RoleSchema = require('../schema/role').schema;

export const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: false,
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
    role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: false,
      },
    ],
  },
  { timestamps: true },
);
