import {Module} from '@nestjs/common';
import {ArticleController} from './article.controller';
import {ArticleService} from './article.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Article} from './article.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [ArticleService],
    controllers: [ArticleController],
})
export class ArticleModule {
}
