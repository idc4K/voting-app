import { SignUpInput } from './sign.up.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(SignUpInput) {
  @Field(() => Int)
  id: number;
}
