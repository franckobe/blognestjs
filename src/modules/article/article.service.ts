import { Injectable } from '@nestjs/common';
import {Article} from './article.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>) {}

    /**
     * Get all article
     */
    async getAll() {
        return await this.articleRepository.find({relations: ['author']});
    }

    async getOne(id: number) {
        return await this.articleRepository.findOne(id, {relations: ['author']});
    }
}
