import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { NewUserDto } from './dto/new-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async registerUser(userDetail: NewUserDto): Promise<User> {
    const user = new this.userModel(userDetail);

    console.log(`HERE: ${JSON.stringify(user)}`);

    const date = new Date();
    user.registrationNumber = date.getMilliseconds();
    user.createdAt = date;

    user.save();

    return user;
  }
}
