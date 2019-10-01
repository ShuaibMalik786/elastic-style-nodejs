import * as mongoose from 'mongoose';

export const StyleGuideSchema = new mongoose.Schema(
  {
    data: {},
  },
  { timestamps: true },
);
