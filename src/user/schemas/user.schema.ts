import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  registrationType: { type: String, required: true },
  numberOfTickets: { type: Number, required: true },
  registrationNumber: { type: Number, required: true, default: Date.now() },
  createdAt: { type: Date, required: true, default: new Date() },
});
