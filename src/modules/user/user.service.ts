import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from './user.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) {}

    async insert(user: User) {
        return await this.userRepository.insert(user);
    }

}
