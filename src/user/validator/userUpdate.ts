import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class UserUpdateDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsNotEmpty()
  @MaxLength(255)
  userName: string;
}
