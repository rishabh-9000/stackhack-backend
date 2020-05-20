import { Document } from 'mongoose';

export interface User extends Document {
  id?: string;
  fullName: string;
  mobile: string;
  email: string;
  registrationType: string;
  numberOfTickets: number;
  registrationNumber: number;
  registrationDate: Date;
}

export interface ImageInfo {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}
