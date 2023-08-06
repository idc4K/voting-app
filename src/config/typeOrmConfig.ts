import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import * as dotenv from 'dotenv';

dotenv.config()

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: process.env.DATABASE,
    entities: ['dist/entities/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
    subscribers: ['dist/user/subscribers/*.subscriber{.ts,.js}'],


}