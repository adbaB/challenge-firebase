import { Test } from '@nestjs/testing';
import { CreateUserUseCase } from 'src/application/user/create-user-use-case/create-user-use-case';
import { UserRepository } from 'src/domain/user/repositories/user.repository';
import { FirebaseUserRepository } from 'src/infrastructure/user/repositories/firebase-user.repository';

describe('createUserUseCase', () => {
  let userRepository: UserRepository;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        FirebaseUserRepository,
        CreateUserUseCase,
        {
          provide: UserRepository,
          useExisting: FirebaseUserRepository,
        },
      ],
    }).compile();

    userRepository = moduleRef.get<UserRepository>(UserRepository);
    createUserUseCase = moduleRef.get<CreateUserUseCase>(CreateUserUseCase) 
  });

  describe('save', () => {
    it('should return an array of cats', async () => {
      
      jest.spyOn(userRepository, 'save').mockImplementation();

     const data = {
        username:'jose',
        email:'alberto@prueba.com'
    }
      await createUserUseCase.execute(data);
    });
  });
});
