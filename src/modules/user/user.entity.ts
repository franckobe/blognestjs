import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Role} from '../../common/enum/role.enum';
import {Article} from '../article/article.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: Role;

    @OneToMany(type => Article, article => article.author)
    articles: Article[];

}