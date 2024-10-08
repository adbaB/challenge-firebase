import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract save(user: User): Promise<void>;
  abstract findById(id: string): Promise<User | null>;
}
