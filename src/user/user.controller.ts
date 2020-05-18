import { Controller, Body, Post } from '@nestjs/common';
import { NewUserDto } from './dto/new-user.dto';
import { UserService } from './user.service';
import { User } from './models/user.interface';

@Controller('v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async registerUser(@Body() payload: NewUserDto): Promise<User> {
    const response = await this.userService.registerUser(payload);

    return response;
  }
}
