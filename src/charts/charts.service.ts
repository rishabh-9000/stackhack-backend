import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/models/user.interface';
import { Count } from './models/count.interface';

@Injectable()
export class ChartsService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getRegistrationTypeCount(): Promise<Count[]> {
    const result = await this.userModel.aggregate([
      {
        $group: {
          _id: { $toLower: '$registrationType' },
          count: { $sum: 1 },
        },
      },
    ]);

    return result;
  }
}
