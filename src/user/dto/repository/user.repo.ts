import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<UserEntity> {

    constructor(
        @InjectRepository(UserEntity)
        repository: Repository<UserEntity>
    ) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}