import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class SignUpInput {

  @IsString()
  userName?: string;

  @IsString()
  firstName?: string;

  @IsEmail()
  email?: string;

  @IsAlpha()
  password?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}
