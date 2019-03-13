import {Controller} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';
import {UserService} from './user.service';

@Controller('users')
@ApiUseTags('Users')
export class UserController {

    constructor(private readonly userService: UserService) {}

}
