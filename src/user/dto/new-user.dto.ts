import {
  IsEmail,
  IsNotEmpty,
  Max,
  IsInt,
  MaxLength,
  IsIn,
  IsAlpha,
} from 'class-validator';

export class NewUserDto {
  @IsNotEmpty()
  @MaxLength(100)
  @IsAlpha()
  readonly fullName: string;

  @IsNotEmpty()
  @MaxLength(10)
  readonly mobile: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  readonly email: string;

  @IsNotEmpty()
  @IsIn(['self', 'group', 'corporate', 'others'])
  readonly registrationType: string;

  @IsNotEmpty()
  @IsInt()
  @Max(10)
  readonly numberOfTickets: number;
}
