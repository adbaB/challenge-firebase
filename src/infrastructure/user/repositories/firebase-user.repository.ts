import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/entities/user.entity';
import { UserRepository } from 'src/domain/user/repositories/user.repository';
import { FirebaseRepository } from 'src/infrastructure/common/firebase/firebase.repository';
import { BcryptService } from 'src/infrastructure/common/services/bcrypt.service';
@Injectable()
export class FirebaseUserRepository implements UserRepository {
  private collection: FirebaseFirestore.CollectionReference;
  constructor(
    private readonly firebaseRepository: FirebaseRepository,
    private readonly bcryptService: BcryptService,
  ) {
    this.collection = firebaseRepository.getCollection('user');
  }
  async save(user: User): Promise<void> {
    const data = user.toValue();
    await this.collection.add({
      id: data.id,
      username: data.username,
      email: data.email,
      password: data.password ? await this.bcryptService.hash(data.password) : '',
    });
  }
  async findById(id: string): Promise<User | null> {
    const user = await this.collection.where('id', '==', id).get();
    const data = !user.empty ? user.docs[0].data(): null;
    
    if(!data){
      return null;
    }

    return new User({
      id: data?.id,
      email: data?.email,
      username: data?.username,
      password: data?.password,
    });
  }
}
