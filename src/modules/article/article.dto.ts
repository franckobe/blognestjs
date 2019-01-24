import {ApiModelProperty} from '@nestjs/swagger';
import {IsNumber, IsString} from 'class-validator';

export class ArticleDto {

    @IsNumber()
    @ApiModelProperty()
    readonly id: number;

    @IsString()
    @ApiModelProperty()
    readonly title: string;

    @IsString()
    @ApiModelProperty()
    readonly content: string;
}
