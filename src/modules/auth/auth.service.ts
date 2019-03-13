import {Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import {User} from '../user/user.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
      private readonly jwtService: JwtService,
      @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  private createToken(user: User) {
    const payload: JwtPayload = {
      id: user.id,
    };
    const accessToken = this.jwtService.sign(payload);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload) {
    // put some validation logic here
    // for example query user by id/email/username
    return {};
  }

  async signIn(user: User) {
    const selectedUser = await this.userRepository.findOne({
        where: {
            username: user.username,
        },
    });
    if (selectedUser) {
      if (this.comparePassword(user.password, selectedUser.password)) {
          return this.createToken(selectedUser);
      }
      else return 'Mauvais mot de passe';
    }
    return 'Aucun user trouvé';
  }

    async signUp(user: User) {
        user.password = await AuthService.hashPassword(user.password);
        const insert = await this.userRepository.insert(user);
        if (insert) {
          const newUser = await this.userRepository.findOne({
              where: {
                username: user.username,
              },
          });
          return this.createToken(newUser);
        }
        return 'Erreur lors de l insertion';
    }

    private comparePassword(password: string, hash: string) {
        return bcrypt.compare(password, hash);
    }

    static async hashPassword(password: string) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

}
