import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field()
  @IsString()
  userName?: string

  @Field()
  @IsString()
  firstName?: string

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email?: string
}
