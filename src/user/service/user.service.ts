import { Injectable } from '@nestjs/common';
import { UpdateUserInput } from '../dto/args/update-user.input';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { CreateUserInput } from '../dto/args/create-user.input';

@Injectable()
export class UserService {
  // constructor(
  //   private readonly defautUserRepository: Repository<UserEntity>
  // ) { }
  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    return `This action returns all user`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
