import {Role} from '../../../common/enum/role.enum';
import {IsEmail, IsEnum, IsNumber, IsString} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserCreateDto {

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