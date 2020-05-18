import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/user.interface';
import { NewUserDto } from './dto/new-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async registerUser(userDetail: NewUserDto): Promise<User> {
    const user = new this.userModel(userDetail);

    const response = user.save();

    return response;
  }
}
