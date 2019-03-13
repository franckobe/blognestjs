import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Role} from '../../common/enum/role.enum';
import {Article} from '../article/article.entity';
import {UserSignInDto} from '../auth/dto/userSignIn.dto';
import {UserSignUpDto} from '../auth/dto/userSignUp.dto';

@Entity()
export class User {

    fillFromSignInDto(userSignInDto: UserSignInDto) {
        this.username = userSignInDto.username;
        this.password = userSignInDto.password;
        return this;
    }
    fillFromSignUpDto(userSignUpDto: UserSignUpDto) {
        this.username = userSignUpDto.username;
        this.email = userSignUpDto.email;
        this.password = userSignUpDto.password;
        this.role = userSignUpDto.role;
        return this;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column({unique: true})
    email: string;

    @Column()
    role: Role;

    @Column({default: true})
    isActive: boolean;

    @OneToMany(type => Article, article => article.author)
    articles: Article[];

}