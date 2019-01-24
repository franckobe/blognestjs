import {Role} from '../../common/enum/role.enum';
import {IsEnum, IsNumber, IsString} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {

    @IsNumber()
    @ApiModelProperty()
    readonly id: number;

    @IsString()
    @ApiModelProperty()
    readonly username: string;

    @IsString()
    @ApiModelProperty()
    readonly password: string;

    @IsEnum(Role)
    @ApiModelProperty()
    readonly role: Role;

}