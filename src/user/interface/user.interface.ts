import { Document } from 'mongoose';

export interface User extends Document {
  id?: string;
  fullName: string;
  mobile: string;
  email: string;
  IDCard: object;
  registrationType: string;
  noOfTickets: number;
  registrationNumber: number;
  createdAt: Date;
}
