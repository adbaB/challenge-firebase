import { UserNotFoundException } from 'src/domain/user/exceptions/user-not-found.exception';
import { IUser } from 'src/domain/user/interfaces/user.interface';
import { Injectable } from 'src/shared/injectable';
import { UserRepository } from './../../../domain/user/repositories/user.repository';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class FindUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async run(dto: FindUserDto): Promise<IUser> {
    const user = await this.userRepository.findById(dto.id);

    if (!user) {
      throw new UserNotFoundException(dto.id);
    }

    return user.toValue();
  }
}
