import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Role} from '../../common/enum/role.enum';

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

}