import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsNotEmpty()
  @MaxLength(255)
  userName: string;

  @IsNotEmpty()
  @MaxLength(255)
  password: string;
}
