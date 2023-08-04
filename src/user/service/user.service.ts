import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserInput } from '../dto/args/update-user.input';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { SignUpInput } from '../dto/args/sign.up.input';
import { UserRepository } from '../dto/repository/user.repo';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>
  ) { }
  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    return `This action returns all user`;
  }

  async SignUp(signUpInput: SignUpInput): Promise<UserEntity> {
    if (!signUpInput.email) {
      throw new Error("missing email");
    }
    if (!signUpInput) {
      throw new Error("invalid signUpInput object or ");
    }

    const existingUser = await this.userRepo.findOne({ where: { email: signUpInput.email } });

    if (existingUser) {
      throw new NotFoundException({
        path: "Data",
        message: "Data not found"
      });
    }

    await this.userRepo.save(signUpInput);
    return null;

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
