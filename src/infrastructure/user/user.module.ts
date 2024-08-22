import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/user/create-user-use-case/create-user-use-case';
import { FindUserUseCase } from 'src/application/user/find-user-use-case/find-user-use-case';
import { UserRepository } from 'src/domain/user/repositories/user.repository';

import { FirebaseModule } from '../common/firebase/firebase.module';
import { ServiceModule } from '../common/services/services.module';
import { CreateUserController } from './controllers/create-user/create-user.controller';
import { FindUserByIdController } from './controllers/find-user-by-id/find-user-by-id.controller';
import { FirebaseUserRepository } from './repositories/firebase-user.repository';

@Module({
  imports: [FirebaseModule,ServiceModule],
  controllers: [CreateUserController,FindUserByIdController],
  providers: [
    CreateUserUseCase,
    FindUserUseCase,
    FirebaseUserRepository, 
    {
      provide:UserRepository,
      useExisting:FirebaseUserRepository
    },
  ],
  exports: [CreateUserUseCase, FindUserUseCase],
})
export class UserModule {}
