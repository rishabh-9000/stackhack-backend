import { Document } from 'mongoose';

export interface User extends Document {
  id?: string;
  fullName: string;
  mobile: string;
  email: string;
  registrationType: string;
  numberOfTickets: number;
  registrationNumber: number;
  createdAt: Date;
}
