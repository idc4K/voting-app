import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
import { typeOrmConfig } from 'src/config/typeOrmConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './dto/repository/user.repo';
import { UserEntity } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule { }
