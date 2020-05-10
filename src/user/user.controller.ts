import { Controller, Body, Post } from '@nestjs/common';
import { NewUserDto } from './dto/new-user.dto';
import { UserService } from './user.service';
import { User } from './interface/user.interface';

@Controller('v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async registerUser(@Body() payload: NewUserDto): Promise<User> {
    const x = await this.userService.registerUser(payload);
    return x;
  }
}
