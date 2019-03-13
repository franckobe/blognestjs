import {IsEmail, IsEnum, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';
import {Role} from '../../../common/enum/role.enum';

export class UserSignUpDto {

    @IsString()
    @ApiModelProperty()
    readonly username: string;

    @IsString()
    @ApiModelProperty()
    readonly password: string;

    @IsEmail()
    @ApiModelProperty()
    readonly email: string;

    @IsEnum(Role)
    @ApiModelProperty()
    readonly role: Role;

}