import { Injectable } from 'src/shared/injectable';
import { User } from './../../../domain/user/entities/user.entity';
import { UserRepository } from './../../../domain/user/repositories/user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository){
  }

  async execute(dto: CreateUserDto): Promise<void>{
    const user = User.create(dto)
    await this.userRepository.save(user)
  }
}