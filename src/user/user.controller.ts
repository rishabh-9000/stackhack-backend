import {
  Controller,
  Body,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { NewUserDto } from './dto/new-user.dto';
import { UserService } from './user.service';
import { User } from './models/user.interface';
import { extname } from 'path';

@Controller('v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async registerUser(@Body() payload: NewUserDto): Promise<User> {
    const response = await this.userService.registerUser(payload);

    return response;
  }

  @Post('/upload-ID')
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './../assets',
      limits: {
        fileSize: 2097152,
      },
      fileFilter(req, file, cb) {
        if (file.mimetype.match(/\/(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
          cb(null, true);
        } else {
          cb(
            new HttpException(
              `Unsupported file type ${extname(file.originalname)}`,
              HttpStatus.BAD_REQUEST,
            ),
            false,
          );
        }
      },
    }),
  )
  uploadID(@UploadedFile() image): object {
    return image;
  }
}
