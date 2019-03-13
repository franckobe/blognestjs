import {IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class UserSignInDto {

    @IsString()
    @ApiModelProperty()
    readonly username: string;

    @IsString()
    @ApiModelProperty()
    readonly password: string;

}