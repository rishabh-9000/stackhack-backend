import { Document } from 'mongoose';

export interface Admin extends Document {
  id?: string;
  email: string;
  password: string;
}
