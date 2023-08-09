import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { UserEntity } from 'src/entities/user.entity';
import { UpdateUserInput } from '../dto/args/update-user.input';
import { SignUpInput } from '../dto/args/sign.up.input';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query()
  findAll() {
    return this.userService.findAll();
  }

  @Mutation(() => UserEntity, {
    name: "createUser"
  })
  public async create(
    @Args('data')
    data: SignUpInput,
  ): Promise<UserEntity> {
    return this.userService.SignUp(data);
  }
  // @Query(() => UserEntity, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.findOne(id);
  // }

  // @Mutation(() => UserEntity)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.userService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => UserEntity)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.remove(id);
  // }
}
