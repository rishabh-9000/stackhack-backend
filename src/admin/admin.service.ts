import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './models/admin.interface';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  ) {}

  async login(adminDetail: AdminDto): Promise<Admin> {
    const admin = await this.adminModel.findOne({ email: adminDetail.email });

    return admin;
  }
}
