import {
  IsEmail,
  IsNotEmpty,
  Max,
  IsInt,
  MaxLength,
  IsIn,
  MinLength,
  IsObject,
} from 'class-validator';
import { ImageInfo } from '../models/user.interface';

export class NewUserDto {
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(4)
  readonly fullName: string;

  @IsNotEmpty()
  @MaxLength(10)
  readonly mobile: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  readonly email: string;

  @IsNotEmpty()
  @IsIn(['self', 'group', 'corporate', 'other'])
  readonly registrationType: string;

  @IsNotEmpty()
  @IsInt()
  @Max(100)
  readonly numberOfTickets: number;

  @IsNotEmpty()
  @IsObject()
  readonly imageInfo: ImageInfo;
}
