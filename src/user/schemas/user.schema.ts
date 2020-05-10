import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fullName: String,
  mobile: String,
  email: String,
  IDCard: Object,
  registrationType: String,
  noOfTickets: Number,
  registrationNumber: Number,
  createdAt: Date,
});
